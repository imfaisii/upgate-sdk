import type { MitProduct } from './mit';

/** @deprecated Use CheckoutRequest instead */
export interface DeprecatedSaleRequest {
  paymentTokenId: string;
  paymentMethod: string;
  merchantCustomerId: string;
  email: string;
  amount: string;
  countryCode: string;
  currencyCode: string;
  merchantPaymentId?: string;
  language?: string;
  successUrl?: string;
  failureUrl?: string;
  shopName?: string;
  shopUrl?: string;
  products: MitProduct[];
}

/** @deprecated Use CheckoutRequest with type AUTHORIZE instead */
export interface DeprecatedAuthorizeRequest {
  paymentTokenId: string;
  paymentMethod: string;
  merchantCustomerId: string;
  email: string;
  amount: string;
  countryCode: string;
  currencyCode: string;
  merchantPaymentId?: string;
  language?: string;
  successUrl?: string;
  failureUrl?: string;
  shopName?: string;
  shopUrl?: string;
  products: MitProduct[];
}

/** @deprecated Use CheckoutRequest with subscription products instead */
export interface DeprecatedRecurringRequest {
  paymentTokenId: string;
  paymentMethod: string;
  merchantCustomerId: string;
  email: string;
  amount: string;
  countryCode: string;
  currencyCode: string;
  merchantPaymentId?: string;
  language?: string;
  successUrl?: string;
  failureUrl?: string;
  shopName?: string;
  shopUrl?: string;
  products: MitProduct[];
}

export interface DeprecatedResponse {
  id: string;
  createdAt: string;
  merchantId: string;
  session: {
    createdAt: string;
    expiresAt: string;
    redirectUrl: string;
  };
  paymentData: Record<string, unknown>;
  customer: Record<string, unknown>;
  callback: Record<string, unknown>;
  products: MitProduct[];
}
