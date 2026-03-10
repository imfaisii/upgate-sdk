import type { PayoutMethod } from './common';

// ─── Discriminated payment details by method ───

export interface CardPaymentDetails {
  paymentTokenId: string;
}

export interface CryptoPaymentDetails {
  cryptoNetwork: string;
  cryptoAddress: string;
}

export interface SepaPaymentDetails {
  iban: string;
  bic?: string;
}

export interface PaxumPaymentDetails {
  email: string;
}

export interface BankTransferPaymentDetails {
  bankName: string;
  accountNumber: string;
  routingNumber?: string;
  [key: string]: unknown;
}

export type PayoutPaymentDetails =
  | CardPaymentDetails
  | CryptoPaymentDetails
  | SepaPaymentDetails
  | PaxumPaymentDetails
  | BankTransferPaymentDetails;

// ─── Request ───

export interface PayoutRequest {
  paymentMethod: PayoutMethod;
  merchantPaymentId: string;
  merchantCustomerId: string;
  amount: string;
  currencyCode: string;
  paymentDetails: PayoutPaymentDetails;
  description?: string;
}

// ─── Response ───

export interface PayoutData {
  paymentId: string;
  paymentType: 'PAYOUT';
  createdAt: string;
  merchantId: string;
  baseAmount: string;
  baseCurrencyCode: string;
  paymentMethod: PayoutMethod;
}

export interface PayoutResponse {
  type: 'PAYMENT';
  data: PayoutData;
}
