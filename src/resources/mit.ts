import type { HttpClient } from '../http';
import type { MitSaleRequest, MitAuthorizeRequest, MitResponse } from '../types/mit';
import type { MitCitRequestOptions } from '../types/common';

export class MitResource {
  constructor(private readonly http: HttpClient) {}

  /**
   * Merchant-Initiated Transaction: Sale.
   * Charges a customer using a previously obtained payment token.
   * No 3DS required since this is merchant-initiated.
   *
   * @param options.mode - SYNC returns result immediately; ASYNC returns pending status
   */
  async sale(
    params: MitSaleRequest,
    options?: MitCitRequestOptions,
  ): Promise<MitResponse> {
    const query = options?.mode ? { mode: options.mode } : undefined;
    const headers: Record<string, string> = {};
    if (options?.idempotencyKey) {
      headers['X-Idempotency-Key'] = options.idempotencyKey;
    }

    return this.http.post<MitResponse>(
      '/mit-sale',
      params as unknown as Record<string, unknown>,
      { query, headers, signal: options?.signal },
    );
  }

  /**
   * Merchant-Initiated Transaction: Authorize.
   * Places a hold on a customer's card using a payment token.
   *
   * @param options.mode - SYNC returns result immediately; ASYNC returns pending status
   */
  async authorize(
    params: MitAuthorizeRequest,
    options?: MitCitRequestOptions,
  ): Promise<MitResponse> {
    const query = options?.mode ? { mode: options.mode } : undefined;
    const headers: Record<string, string> = {};
    if (options?.idempotencyKey) {
      headers['X-Idempotency-Key'] = options.idempotencyKey;
    }

    return this.http.post<MitResponse>(
      '/mit-authorize',
      params as unknown as Record<string, unknown>,
      { query, headers, signal: options?.signal },
    );
  }
}
