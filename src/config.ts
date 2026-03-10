export type Environment = 'sandbox' | 'production';

export interface UpGateConfig {
  /** API key. Falls back to UPGATE_API_KEY env var if not provided. */
  apiKey?: string;

  /** Selects sandbox or production base URL. Defaults to 'sandbox'. */
  environment?: Environment;

  /** Override the base URL entirely (takes precedence over environment). */
  baseUrl?: string;

  /** Request timeout in milliseconds. Defaults to 30000 (30s). */
  timeout?: number;

  /** Max automatic retries on 5xx or network errors. Defaults to 2. */
  maxRetries?: number;
}

export const BASE_URLS: Record<Environment, string> = {
  sandbox: 'https://api.sandbox.upgate.com/v1',
  production: 'https://api.upgate.com/v1',
};

const DEFAULT_ENVIRONMENT: Environment = 'sandbox';
const DEFAULT_TIMEOUT = 30_000;
const DEFAULT_MAX_RETRIES = 2;

export function resolveConfig(config: UpGateConfig) {
  const apiKey = config.apiKey ?? process.env.UPGATE_API_KEY;

  if (!apiKey) {
    throw new Error(
      'UpGate API key is required. Provide it via the apiKey option or set the UPGATE_API_KEY environment variable.',
    );
  }

  const environment = config.environment ?? DEFAULT_ENVIRONMENT;
  const baseUrl = config.baseUrl ?? BASE_URLS[environment];
  const timeout = config.timeout ?? DEFAULT_TIMEOUT;
  const maxRetries = config.maxRetries ?? DEFAULT_MAX_RETRIES;

  return { apiKey, baseUrl, timeout, maxRetries };
}

export type ResolvedConfig = ReturnType<typeof resolveConfig>;
