import type { HttpClient } from '../http';
import type { PayoutRequest, PayoutResponse } from '../types/payout';
import type { RequestOptions } from '../types/common';

export class PayoutsResource {
  constructor(private readonly http: HttpClient) {}

  /**
   * Create a payout to a customer.
   * Supports CARD, CRYPTO, SEPA, PAXUM, and BANK_TRANSFER methods.
   *
   * The paymentDetails structure varies by payment method:
   * - CARD: { paymentTokenId }
   * - CRYPTO: { cryptoNetwork, cryptoAddress }
   * - SEPA: { iban, bic? }
   * - PAXUM: { email }
   * - BANK_TRANSFER: { bankName, accountNumber, ... }
   */
  async create(
    params: PayoutRequest,
    options?: RequestOptions,
  ): Promise<PayoutResponse> {
    return this.http.post<PayoutResponse>(
      '/payout',
      params as unknown as Record<string, unknown>,
      { signal: options?.signal },
    );
  }
}
