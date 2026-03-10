import type { TransactionType, TransactionStatus } from './common';

export interface TransactionData {
  transactionId: string;
  transactionType: TransactionType;
  transactionStatus: TransactionStatus;
  createdAt: string;
  responseCode: number;
  responseText: string;
  transactionAmount?: string;
  transactionCurrencyCode?: string;
  transactionDetails: Record<string, unknown>;
  paymentContext: Record<string, unknown>;
  paymentDetails: Record<string, unknown>;
  payment: Record<string, unknown>;
}

// ─── Response ───

export interface TransactionListResponse {
  type: 'TRANSACTION';
  data: TransactionData[];
  meta: {
    nextPrevId?: string;
  };
}

// ─── Params ───

export interface TransactionListParams {
  createdAtFrom?: string;
  createdAtTo?: string;
  limit?: number;
  prevId?: string;
  responseCode?: number;
  transactionType?: string;
}
