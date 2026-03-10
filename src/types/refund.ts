export interface RefundRequest {
  transactionId: string;
  reason?: string;
  initiatedBy?: string;
  amount?: string;
  currencyCode?: string;
}

export interface RefundData {
  transactionId: string;
  reason?: string;
  initiatedBy?: string;
}

export interface RefundResponse {
  type: 'REFUND';
  data: RefundData;
}
