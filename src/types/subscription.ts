export interface SubscriptionData {
  version: number;
  initialTransactionId: string;
  lastTransactionId?: string;
  subscriptionId: string;
  createdAt: string;
  subscriptionStatus: string;
  expiresAt: string;
  merchantId: string;
  merchantProductId: string;
  merchantPaymentId: string;
  merchantCustomerId: string;
  paymentMethod: string;
  currencyCode: string;
  amount: string;
  transactionCurrencyCode: string;
  transactionAmount: string;
  transactionFeeCurrencyCode?: string;
  transactionFeeAmount?: string;
  transactionTaxCurrencyCode?: string;
  transactionTaxAmount?: string;
  transactionTaxType?: string;
  transactionTaxLabel?: string;
  transactionTaxPercentage?: string;
  transactionTaxExemptAmount?: string;
  isTrial: boolean;
  chargeInterval: string;
  chargeIntervalValue: number;
  isRebillEnabled: boolean;
  trialInterval?: string;
  trialIntervalValue?: number;
  paymentId: string;
  productId: string;
  retryAt?: string;
  retryCount?: number;
  retryTotalCount?: number;
  shopName?: string;
  shopUrl?: string;
}

// ─── Responses ───

export interface SubscriptionResponse {
  type: 'SUBSCRIPTION';
  data: SubscriptionData;
}

export interface SubscriptionListResponse {
  type: 'SUBSCRIPTION';
  data: SubscriptionData[];
  meta: {
    pageNumber: number;
    pageSize: number;
  };
}

// ─── Params ───

export interface SubscriptionListParams {
  transactionId: string;
  page?: number;
  size?: number;
}

export interface SubscriptionUpdateParams {
  isRebillEnabled: boolean;
}
