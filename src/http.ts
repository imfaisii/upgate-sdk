import type { ResolvedConfig } from './config';
import type { ApiErrorResponse } from './types/common';
import {
  UpGateError,
  UpGateConnectionError,
  UpGateAuthenticationError,
  UpGateInvalidRequestError,
  UpGateRateLimitError,
  UpGateInternalError,
} from './errors';
import { toSnakeCase, toCamelCase } from './utils';

type HttpMethod = 'GET' | 'POST' | 'PATCH';

interface HttpRequestOptions {
  method: HttpMethod;
  path: string;
  body?: Record<string, unknown>;
  query?: Record<string, string | number | boolean | undefined>;
  headers?: Record<string, string>;
  signal?: AbortSignal;
}

export class HttpClient {
  private readonly config: ResolvedConfig;

  constructor(config: ResolvedConfig) {
    this.config = config;
  }

  async request<T>(options: HttpRequestOptions): Promise<T> {
    const url = this.buildUrl(options.path, options.query);

    const headers: Record<string, string> = {
      'X-Api-Key': this.config.apiKey,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      ...options.headers,
    };

    let lastError: Error | undefined;

    for (let attempt = 0; attempt <= this.config.maxRetries; attempt++) {
      try {
        const response = await fetch(url, {
          method: options.method,
          headers,
          body: options.body ? JSON.stringify(toSnakeCase(options.body)) : undefined,
          signal: options.signal ?? AbortSignal.timeout(this.config.timeout),
        });

        if (response.ok) {
          const raw = await response.json();
          return toCamelCase(raw) as T;
        }

        const errorBody = await response.json().catch(() => ({ errors: [] })) as Record<string, unknown>;

        // Never retry 4xx (except 429)
        if (response.status < 500 && response.status !== 429) {
          this.throwForStatus(response.status, errorBody);
        }

        // Retry on 429 and 5xx
        if (attempt < this.config.maxRetries) {
          const retryAfterHeader = response.headers.get('Retry-After');
          const retryAfterMs = retryAfterHeader
            ? parseInt(retryAfterHeader, 10) * 1000
            : undefined;
          const delay = this.calculateBackoff(attempt, retryAfterMs);
          await this.sleep(delay);
          continue;
        }

        this.throwForStatus(response.status, errorBody);
      } catch (err) {
        if (err instanceof UpGateError) throw err;
        lastError = err as Error;

        if (attempt < this.config.maxRetries) {
          await this.sleep(this.calculateBackoff(attempt));
          continue;
        }
      }
    }

    throw new UpGateConnectionError(
      lastError?.message ?? 'Request failed after retries',
    );
  }

  async get<T>(
    path: string,
    query?: Record<string, string | number | boolean | undefined>,
    opts?: { signal?: AbortSignal },
  ): Promise<T> {
    return this.request<T>({ method: 'GET', path, query, signal: opts?.signal });
  }

  async post<T>(
    path: string,
    body?: Record<string, unknown>,
    opts?: {
      query?: Record<string, string | number | boolean | undefined>;
      headers?: Record<string, string>;
      signal?: AbortSignal;
    },
  ): Promise<T> {
    return this.request<T>({
      method: 'POST',
      path,
      body,
      query: opts?.query,
      headers: opts?.headers,
      signal: opts?.signal,
    });
  }

  async patch<T>(
    path: string,
    body?: Record<string, unknown>,
    opts?: {
      query?: Record<string, string | number | boolean | undefined>;
      signal?: AbortSignal;
    },
  ): Promise<T> {
    return this.request<T>({
      method: 'PATCH',
      path,
      body,
      query: opts?.query,
      signal: opts?.signal,
    });
  }

  // ─── Private Helpers ───

  private buildUrl(
    path: string,
    query?: Record<string, string | number | boolean | undefined>,
  ): string {
    const url = new URL(`${this.config.baseUrl}${path}`);

    if (query) {
      for (const [key, value] of Object.entries(query)) {
        if (value !== undefined) {
          url.searchParams.set(key, String(value));
        }
      }
    }

    return url.toString();
  }

  private throwForStatus(
    status: number,
    body: Record<string, unknown>,
    requestId?: string,
  ): never {
    // Error responses come in snake_case from the API — normalize to camelCase
    const rawErrors = (body.errors ?? []) as Array<Record<string, unknown>>;
    const errors = rawErrors.map((e) => ({
      errorCode: (e.error_code ?? e.errorCode) as string,
      errorMessage: (e.error_message ?? e.errorMessage) as string,
    })) as ApiErrorResponse['errors'];

    switch (status) {
      case 400:
        throw new UpGateInvalidRequestError(errors, requestId);
      case 401:
        throw new UpGateAuthenticationError(requestId);
      case 429:
        throw new UpGateRateLimitError(errors, undefined, requestId);
      case 500:
        throw new UpGateInternalError(errors, requestId);
      default:
        throw new UpGateError(
          `Unexpected status ${status}`,
          status,
          errors,
          requestId,
        );
    }
  }

  private calculateBackoff(attempt: number, retryAfterMs?: number): number {
    if (retryAfterMs && retryAfterMs > 0) return retryAfterMs;
    // Exponential backoff: 1s, 2s, 4s... capped at 30s, with jitter
    const base = Math.min(1000 * Math.pow(2, attempt), 30_000);
    const jitter = Math.random() * 500;
    return base + jitter;
  }

  private sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
