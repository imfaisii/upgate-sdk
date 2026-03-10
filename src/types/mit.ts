export interface MitProduct {
  merchantProductId?: string;
  name: string;
  price: number;
  description?: string;
}

export interface MitSaleRequest {
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

export interface MitAuthorizeRequest {
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

// ─── Response ───

export interface MitSession {
  createdAt: string;
  expiresAt: string;
  redirectUrl: string;
}

export interface MitResponse {
  id: string;
  createdAt: string;
  merchantId: string;
  session: MitSession;
  paymentData: Record<string, unknown>;
  customer: Record<string, unknown>;
  callback: Record<string, unknown>;
  products: MitProduct[];
}
