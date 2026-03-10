// ─── Payment Methods ───

export type PaymentMethod =
  | 'CARD'
  | 'APPLE_PAY'
  | 'GOOGLE_PAY'
  | 'KAKAO_PAY'
  | 'SEPA'
  | 'CRYPTO'
  | 'PAY_BY_BANK_JAPAN';

export type PayoutMethod =
  | 'CARD'
  | 'CRYPTO'
  | 'SEPA'
  | 'PAXUM'
  | 'BANK_TRANSFER';

// ─── Payment Types ───

export type PaymentDataType = 'SALE' | 'AUTHORIZE' | 'RECURRING';

export type PaymentType =
  | 'SALE'
  | 'AUTHORIZE'
  | 'MIT_SALE'
  | 'MIT_AUTHORIZE'
  | 'RECURRING'
  | 'TOKEN'
  | 'PAYOUT';

// ─── Product Types ───

export type ProductType = 'SALE' | 'SUBSCRIPTION';

// ─── Transaction Types ───

export type TransactionType =
  | 'TOKEN'
  | 'THREE_DS'
  | 'SALE'
  | 'AUTHORIZE'
  | 'PAYOUT'
  | 'CHARGEBACK'
  | 'CHARGEBACK_REVERSAL'
  | 'RDR'
  | 'RDR_REVERSAL'
  | 'REFUND'
  | 'VOID'
  | 'FRAUD_ALERT';

export type TransactionStatus = 'SUCCESS' | 'DECLINE' | 'ERROR';

// ─── Processing Mode ───

export type ProcessingMode = 'SYNC' | 'ASYNC';

// ─── Charge Interval ───

export type ChargeInterval = 'DAY';

// ─── Theme ───

export type ThemeType = 'LIGHT' | 'DARK' | 'BROWSER';

// ─── Tax ───

export type TaxType = 'INCLUDED' | 'ON_TOP';
export type TaxLabel = 'TAX' | 'VAT' | 'GST' | 'SALES_TAX';

// ─── Error Codes ───

export type UpGateErrorCode =
  | 'INVALID_REQUEST_PARAMETER'
  | 'INVALID_REQUEST'
  | 'INTERNAL_ERROR'
  | 'TOO_MANY_REQUESTS'
  | 'NOT_FOUND';

export interface ApiErrorDetail {
  errorCode: UpGateErrorCode;
  errorMessage: string;
}

export interface ApiErrorResponse {
  errors: ApiErrorDetail[];
}

// ─── Request Options ───

export interface RequestOptions {
  idempotencyKey?: string;
  signal?: AbortSignal;
}

export interface MitCitRequestOptions extends RequestOptions {
  mode?: ProcessingMode;
}
