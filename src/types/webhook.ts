import type { SubscriptionData } from './subscription';

// ─── Postback Types ───

export type PostbackType = 'TRANSACTION' | 'SUBSCRIPTION';

export interface TransactionPostbackData {
  version?: number;
  transactionId: string;
  transactionType: string;
  transactionStatus: string;
  createdAt: string;
  responseCode: number;
  responseText: string;
  transactionAmount?: string;
  transactionCurrencyCode?: string;
  transactionFeeAmount?: string;
  transactionFeeCurrencyCode?: string;
  transactionTaxAmount?: string;
  transactionTaxCurrencyCode?: string;
  transactionTaxType?: string;
  transactionTaxLabel?: string;
  transactionTaxPercentage?: string;
  transactionTaxExemptAmount?: string;
  rrn?: string;
  paymentMethodReferenceType?: string;
  paymentMethodReferenceNumber?: string;
  cardBinCountryName?: string;
  cardBinCountryCode?: string;
  cardBinType?: string;
  customerSelectedCountryCode?: string;
  customerPhoneNumber?: string;
  customerEmail?: string;
  customerFirstName?: string;
  customerLastName?: string;
  paymentTokenType?: string;
  processorResponseText?: string;
  cascadeAttempt?: number;
  hasBeenCascaded?: boolean;
  merchantCustomerId?: string;
  merchantPaymentId?: string;
  merchantProductId?: string;
  paymentMethod?: string;
  currencyCode?: string;
  amount?: string;
}

export interface TransactionPostback {
  type: 'TRANSACTION';
  data: TransactionPostbackData;
}

export interface SubscriptionPostbackData extends SubscriptionData {
  rebillTransactionFeeAmount?: string;
  rebillTransactionFeeCurrencyCode?: string;
  rebillTransactionTaxAmount?: string;
  rebillTransactionTaxCurrencyCode?: string;
}

export interface SubscriptionPostback {
  type: 'SUBSCRIPTION';
  data: SubscriptionPostbackData;
}

export type WebhookEvent = TransactionPostback | SubscriptionPostback;

// ─── Verification ───

export interface VerifySignatureParams {
  payload: string | Buffer;
  signature: string;
  secret: string;
}
