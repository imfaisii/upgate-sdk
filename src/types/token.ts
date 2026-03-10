export interface TokenRequest {
  paymentMethod: 'CARD';
  merchantCustomerId: string;
  email: string;
  language: string;
  countryCode: string;
  successUrl: string;
  failureUrl: string;
  merchantPaymentId?: string;
  prefilledCardHolder?: string;
}

// ─── Response ───

export interface TokenSession {
  expiresAt: string;
  redirectUrl: string;
}

export interface TokenData {
  paymentId: string;
  paymentType: 'TOKEN';
  paymentMethod: 'CARD';
  createdAt: string;
  session: TokenSession;
}

export interface TokenResponse {
  type: 'PAYMENT';
  data: TokenData;
}
