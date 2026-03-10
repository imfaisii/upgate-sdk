import type { HttpClient } from '../http';
import type {
  DeprecatedSaleRequest,
  DeprecatedAuthorizeRequest,
  DeprecatedRecurringRequest,
  DeprecatedResponse,
} from '../types/deprecated';
import type { RequestOptions } from '../types/common';

/**
 * @deprecated These endpoints are deprecated by UpGate.
 * Use checkout.sale() and checkout.subscribe() instead.
 */
export class DeprecatedResource {
  constructor(private readonly http: HttpClient) {}

  /** @deprecated Use checkout.sale() instead */
  async sale(
    params: DeprecatedSaleRequest,
    options?: RequestOptions,
  ): Promise<DeprecatedResponse> {
    return this.http.post<DeprecatedResponse>(
      '/sale',
      params as unknown as Record<string, unknown>,
      { signal: options?.signal },
    );
  }

  /** @deprecated Use checkout.sale() with type AUTHORIZE instead */
  async authorize(
    params: DeprecatedAuthorizeRequest,
    options?: RequestOptions,
  ): Promise<DeprecatedResponse> {
    return this.http.post<DeprecatedResponse>(
      '/authorize',
      params as unknown as Record<string, unknown>,
      { signal: options?.signal },
    );
  }

  /** @deprecated Use checkout.subscribe() instead */
  async recurring(
    params: DeprecatedRecurringRequest,
    options?: RequestOptions,
  ): Promise<DeprecatedResponse> {
    return this.http.post<DeprecatedResponse>(
      '/recurring',
      params as unknown as Record<string, unknown>,
      { signal: options?.signal },
    );
  }
}
