import type { HttpClient } from '../http';
import type { CitSaleRequest, CitSaleResponse } from '../types/cit';
import type { MitCitRequestOptions } from '../types/common';

export class CitResource {
  constructor(private readonly http: HttpClient) {}

  /**
   * Customer-Initiated Transaction: Sale with 3DS.
   * Charges a customer using a payment token with 3D Secure authentication.
   * Use forced3d: true to always trigger 3DS from the merchant side.
   *
   * @param options.mode - SYNC returns result immediately; ASYNC returns pending status
   */
  async sale(
    params: CitSaleRequest,
    options?: MitCitRequestOptions,
  ): Promise<CitSaleResponse> {
    const query = options?.mode ? { mode: options.mode } : undefined;
    const headers: Record<string, string> = {};
    if (options?.idempotencyKey) {
      headers['X-Idempotency-Key'] = options.idempotencyKey;
    }

    return this.http.post<CitSaleResponse>(
      '/cit-sale',
      params as unknown as Record<string, unknown>,
      { query, headers, signal: options?.signal },
    );
  }
}
