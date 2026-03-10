import type { HttpClient } from '../http';
import type {
  SubscriptionResponse,
  SubscriptionListResponse,
  SubscriptionListParams,
  SubscriptionUpdateParams,
} from '../types/subscription';
import type { RequestOptions } from '../types/common';

export class SubscriptionsResource {
  constructor(private readonly http: HttpClient) {}

  /**
   * List subscriptions by transaction ID with pagination.
   * GET /subscription?transaction_id=...&page=...&size=...
   */
  async list(
    params: SubscriptionListParams,
    options?: RequestOptions,
  ): Promise<SubscriptionListResponse> {
    return this.http.get<SubscriptionListResponse>(
      '/subscription',
      {
        transaction_id: params.transactionId,
        page: params.page,
        size: params.size,
      },
      { signal: options?.signal },
    );
  }

  /**
   * Get a single subscription by its ID.
   * GET /subscription/{subscriptionId}
   */
  async get(
    subscriptionId: string,
    options?: RequestOptions,
  ): Promise<SubscriptionResponse> {
    return this.http.get<SubscriptionResponse>(
      `/subscription/${subscriptionId}`,
      undefined,
      { signal: options?.signal },
    );
  }

  /**
   * Update a subscription by its ID (enable/disable rebill).
   * PATCH /subscription/{subscriptionId}
   */
  async update(
    subscriptionId: string,
    params: SubscriptionUpdateParams,
    options?: RequestOptions,
  ): Promise<SubscriptionResponse> {
    return this.http.patch<SubscriptionResponse>(
      `/subscription/${subscriptionId}`,
      params as unknown as Record<string, unknown>,
      { signal: options?.signal },
    );
  }

  /**
   * Update a subscription by merchant product ID (enable/disable rebill).
   * PATCH /subscription?merchant_product_id=...
   */
  async updateByProductId(
    merchantProductId: string,
    params: SubscriptionUpdateParams,
    options?: RequestOptions,
  ): Promise<SubscriptionResponse> {
    return this.http.patch<SubscriptionResponse>(
      '/subscription',
      params as unknown as Record<string, unknown>,
      {
        query: { merchant_product_id: merchantProductId },
        signal: options?.signal,
      },
    );
  }
}
