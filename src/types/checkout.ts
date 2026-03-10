import type {
  PaymentMethod,
  PaymentDataType,
  ProductType,
  ChargeInterval,
  ThemeType,
  TaxType,
  TaxLabel,
} from './common';

// ─── Request Types ───

export interface CheckoutPaymentData {
  type: PaymentDataType;
  amount: number;
  currencyCode: string;
  methods?: PaymentMethod[];
  merchantPaymentId?: string;
  forced3d?: boolean;
  shopName?: string;
  shopUrl?: string;
}

export interface CheckoutCustomer {
  merchantCustomerId: string;
  email?: string;
  language?: string;
  countryCode?: string;
}

export interface CheckoutCallback {
  successUrl: string;
  failureUrl: string;
}

export interface ProductCharge {
  value: number;
  interval: ChargeInterval;
}

export interface ProductTrial {
  value: number;
  interval: ChargeInterval;
}

export interface CheckoutProduct {
  merchantProductId?: string;
  type: ProductType;
  price: number;
  name: string;
  description?: string;
  charge?: ProductCharge;
  trial?: ProductTrial;
}

export interface AdditionalInfo {
  paymentTokenId?: string;
  cryptoNetwork?: string;
  cryptoAddress?: string;
  cryptoWithdrawalAddress?: string;
  customerFullName?: string;
  phone?: string;
}

export interface PaymentFormOverride {
  color?: string;
  themeType?: ThemeType;
  themeVariables?: Record<string, string>;
  themeRules?: Record<string, string>;
}

export interface TaxOverride {
  percentage?: string;
  type?: TaxType;
  label?: TaxLabel;
}

export interface CheckoutRequest {
  paymentData: CheckoutPaymentData;
  customer: CheckoutCustomer;
  callback: CheckoutCallback;
  products: CheckoutProduct[];
  additionalInfo?: AdditionalInfo;
  paymentFormOverride?: PaymentFormOverride;
  taxOverride?: TaxOverride;
}

// ─── Response Types ───

export interface CheckoutSession {
  createdAt: string;
  expiresAt: string;
  redirectUrl: string;
}

export interface CheckoutResponse {
  id: string;
  createdAt: string;
  merchantId: string;
  session: CheckoutSession;
  paymentData: CheckoutPaymentData;
  customer: CheckoutCustomer;
  callback: CheckoutCallback;
  products: CheckoutProduct[];
}
