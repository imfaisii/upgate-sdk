import type { HttpClient } from '../http';
import type { TokenRequest, TokenResponse } from '../types/token';
import type { RequestOptions } from '../types/common';

export class TokensResource {
  constructor(private readonly http: HttpClient) {}

  /**
   * Create a payment token for a customer's card.
   * Returns a session redirect URL for the customer to enter card details.
   * The resulting token can be used for subsequent MIT/CIT transactions.
   *
   * Note: Requires "Enable token request" in the UpGate backoffice.
   */
  async create(
    params: TokenRequest,
    options?: RequestOptions,
  ): Promise<TokenResponse> {
    return this.http.post<TokenResponse>(
      '/token',
      params as unknown as Record<string, unknown>,
      { signal: options?.signal },
    );
  }
}
