import type { HttpClient } from '../http';
import type { RefundRequest, RefundResponse } from '../types/refund';
import type { RequestOptions } from '../types/common';

export class RefundsResource {
  constructor(private readonly http: HttpClient) {}

  /**
   * Create a refund for a transaction.
   * Omit amount for a full refund; provide amount + currencyCode for partial.
   */
  async create(
    params: RefundRequest,
    options?: RequestOptions,
  ): Promise<RefundResponse> {
    return this.http.post<RefundResponse>(
      '/refund',
      params as unknown as Record<string, unknown>,
      { signal: options?.signal },
    );
  }
}
