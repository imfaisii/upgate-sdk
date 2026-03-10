import type { HttpClient } from '../http';
import type {
  TransactionListResponse,
  TransactionListParams,
} from '../types/transaction';
import type { RequestOptions } from '../types/common';

export class TransactionsResource {
  constructor(private readonly http: HttpClient) {}

  /**
   * List transactions with filters and cursor-based pagination.
   * GET /transaction?created_at_from=...&limit=...&prev_id=...
   *
   * Use meta.nextPrevId from the response as prevId for the next page.
   */
  async list(
    params?: TransactionListParams,
    options?: RequestOptions,
  ): Promise<TransactionListResponse> {
    return this.http.get<TransactionListResponse>(
      '/transaction',
      {
        created_at_from: params?.createdAtFrom,
        created_at_to: params?.createdAtTo,
        limit: params?.limit,
        prev_id: params?.prevId,
        response_code: params?.responseCode,
        transaction_type: params?.transactionType,
      },
      { signal: options?.signal },
    );
  }
}
