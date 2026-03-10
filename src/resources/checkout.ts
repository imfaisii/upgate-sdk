import type { HttpClient } from '../http';
import type { CheckoutRequest, CheckoutResponse } from '../types/checkout';
import type { RequestOptions } from '../types/common';

export class CheckoutResource {
  constructor(private readonly http: HttpClient) {}

  /**
   * Create a one-time sale payment.
   * Returns a session with a redirect URL for the customer to complete payment.
   *
   * Note: For Apple Pay / Google Pay, include both the specific method
   * AND 'CARD' in paymentData.methods (e.g. ['APPLE_PAY', 'CARD']).
   */
  async sale(
    params: CheckoutRequest,
    options?: RequestOptions,
  ): Promise<CheckoutResponse> {
    const headers: Record<string, string> = {};
    if (options?.idempotencyKey) {
      headers['X-Idempotency-Key'] = options.idempotencyKey;
    }

    return this.http.post<CheckoutResponse>(
      '/checkout',
      params as unknown as Record<string, unknown>,
      { headers, signal: options?.signal },
    );
  }

  /**
   * Create a subscription (recurring payment).
   * Uses the same /checkout endpoint with RECURRING/AUTHORIZE type
   * and subscription products with charge intervals.
   */
  async subscribe(
    params: CheckoutRequest,
    options?: RequestOptions,
  ): Promise<CheckoutResponse> {
    return this.sale(params, options);
  }
}
