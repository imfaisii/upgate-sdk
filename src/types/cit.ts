import type { MitProduct } from './mit';

export interface CitSaleRequest {
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
  forced3d?: boolean;
  products: MitProduct[];
}

// ─── Response ───

export interface CitSession {
  createdAt: string;
  expiresAt: string;
  redirectUrl: string;
}

export interface CitSaleResponse {
  id: string;
  createdAt: string;
  merchantId: string;
  session: CitSession;
  paymentData: Record<string, unknown>;
  customer: Record<string, unknown>;
  callback: Record<string, unknown>;
  products: MitProduct[];
}
