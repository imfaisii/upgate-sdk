# UpGate SDK

TypeScript SDK for the [UpGate](https://docs.upgate.com) payment orchestration platform. Zero runtime dependencies.

## Install

```bash
npm install upgate
# or
pnpm add upgate
# or
yarn add upgate
```

Requires Node.js 18+.

## Setup

Set your API key via environment variable:

```env
UPGATE_API_KEY=your_api_key_here
```

```typescript
import { UpGate } from 'upgate';

// Reads UPGATE_API_KEY from process.env automatically
const upgate = new UpGate({ environment: 'production' });

// Or pass it explicitly
const upgate = new UpGate({
  apiKey: 'sk_live_...',
  environment: 'production', // 'sandbox' (default) | 'production'
});
```

### Configuration Options

```typescript
const upgate = new UpGate({
  apiKey: 'sk_...',           // Falls back to UPGATE_API_KEY env var
  environment: 'sandbox',     // 'sandbox' | 'production'
  baseUrl: 'https://...',     // Override base URL entirely
  timeout: 30_000,            // Request timeout in ms (default: 30s)
  maxRetries: 2,              // Retries on 5xx/network errors (default: 2)
});
```

---

## Checkout

### One-Time Sale

```typescript
const sale = await upgate.checkout.sale({
  paymentData: {
    type: 'SALE',
    amount: 25.00,
    currencyCode: 'EUR',
    methods: ['CARD'],
    shopName: 'My Store',
    shopUrl: 'https://mystore.com',
  },
  customer: {
    merchantCustomerId: 'cust_123',
    email: 'customer@example.com',
    countryCode: 'DE',
  },
  callback: {
    successUrl: 'https://mystore.com/success',
    failureUrl: 'https://mystore.com/failure',
  },
  products: [
    { type: 'SALE', name: 'Widget', price: 25.00 },
  ],
}, {
  idempotencyKey: 'order_abc123', // optional — prevents duplicate charges
});

// Redirect customer to complete payment
console.log(sale.session.redirectUrl);
```

### Apple Pay / Google Pay

Include both the wallet method **and** `CARD` in the methods array:

```typescript
await upgate.checkout.sale({
  paymentData: {
    type: 'SALE',
    amount: 10.00,
    currencyCode: 'USD',
    methods: ['APPLE_PAY', 'CARD'], // or ['GOOGLE_PAY', 'CARD']
  },
  customer: { merchantCustomerId: 'cust_123' },
  callback: { successUrl: '...', failureUrl: '...' },
  products: [{ type: 'SALE', name: 'Item', price: 10.00 }],
});
```

### Subscription

```typescript
const sub = await upgate.checkout.subscribe({
  paymentData: {
    type: 'RECURRING',
    amount: 9.99,
    currencyCode: 'EUR',
    methods: ['CARD'],
  },
  customer: {
    merchantCustomerId: 'cust_123',
    email: 'customer@example.com',
  },
  callback: {
    successUrl: 'https://mystore.com/success',
    failureUrl: 'https://mystore.com/failure',
  },
  products: [
    {
      type: 'SUBSCRIPTION',
      name: 'Monthly Plan',
      price: 9.99,
      charge: { value: 30, interval: 'DAY' },
      trial: { value: 7, interval: 'DAY' }, // optional trial
    },
  ],
});
```

### Checkout Options

```typescript
// Custom payment form theme
await upgate.checkout.sale({
  // ...required fields...
  paymentFormOverride: {
    themeType: 'DARK', // 'LIGHT' | 'DARK' | 'BROWSER'
    color: '#6366f1',
    themeVariables: { '--primary': '#6366f1' },
  },
  taxOverride: {
    percentage: '20',
    type: 'INCLUDED',  // 'INCLUDED' | 'ON_TOP'
    label: 'VAT',      // 'TAX' | 'VAT' | 'GST' | 'SALES_TAX'
  },
  additionalInfo: {
    paymentTokenId: 'tok_...',     // reuse stored card
    cryptoNetwork: 'TRC20',        // for crypto payments
    cryptoAddress: 'T...',
    customerFullName: 'John Doe',
    phone: '+491234567890',
  },
});
```

---

## Merchant-Initiated Transactions (MIT)

Use stored payment tokens for subsequent charges without 3DS.

### MIT Sale

```typescript
const result = await upgate.mit.sale({
  paymentTokenId: 'tok_...',
  paymentMethod: 'CARD',
  merchantCustomerId: 'cust_123',
  email: 'customer@example.com',
  amount: '15.00',
  countryCode: 'DE',
  currencyCode: 'EUR',
  products: [{ name: 'Rebill', price: 15.00 }],
}, {
  mode: 'SYNC',  // 'SYNC' | 'ASYNC'
});
```

### MIT Authorize

```typescript
const auth = await upgate.mit.authorize({
  paymentTokenId: 'tok_...',
  paymentMethod: 'CARD',
  merchantCustomerId: 'cust_123',
  email: 'customer@example.com',
  amount: '50.00',
  countryCode: 'DE',
  currencyCode: 'EUR',
  products: [{ name: 'Hold', price: 50.00 }],
}, { mode: 'SYNC' });
```

---

## Customer-Initiated Transactions (CIT)

Customer-present transactions with 3D Secure authentication.

```typescript
const cit = await upgate.cit.sale({
  paymentTokenId: 'tok_...',
  paymentMethod: 'CARD',
  merchantCustomerId: 'cust_123',
  email: 'customer@example.com',
  amount: '20.00',
  countryCode: 'DE',
  currencyCode: 'EUR',
  forced3d: true, // always trigger 3DS
  products: [{ name: 'Purchase', price: 20.00 }],
}, { mode: 'SYNC' });
```

---

## Subscriptions

```typescript
// List by transaction ID (paginated)
const subs = await upgate.subscriptions.list({
  transactionId: '2U5T2MIX22EK3',
  page: 1,
  size: 100,
});
console.log(subs.data);     // SubscriptionData[]
console.log(subs.meta);     // { pageNumber, pageSize }

// Get by subscription ID
const sub = await upgate.subscriptions.get('2E2CL5R3KC7K3');

// Disable rebill by subscription ID
await upgate.subscriptions.update('2E2CL5R3KC7K3', {
  isRebillEnabled: false,
});

// Disable rebill by merchant product ID
await upgate.subscriptions.updateByProductId('prod_monthly', {
  isRebillEnabled: false,
});
```

---

## Transactions

```typescript
// List with filters
const txns = await upgate.transactions.list({
  createdAtFrom: '2024-01-01T00:00:00.000Z',
  createdAtTo: '2024-12-31T23:59:59.999Z',
  limit: 100,
  transactionType: 'SALE,REFUND', // comma-separated
  responseCode: 1000,
});

// Cursor-based pagination
if (txns.meta.nextPrevId) {
  const nextPage = await upgate.transactions.list({
    prevId: txns.meta.nextPrevId,
    limit: 100,
  });
}
```

**Transaction types:** `TOKEN`, `THREE_DS`, `SALE`, `AUTHORIZE`, `PAYOUT`, `CHARGEBACK`, `CHARGEBACK_REVERSAL`, `RDR`, `RDR_REVERSAL`, `REFUND`, `VOID`, `FRAUD_ALERT`

---

## Refunds

```typescript
// Full refund
await upgate.refunds.create({
  transactionId: 'txn_...',
  reason: 'Customer request',
  initiatedBy: 'support_agent',
});

// Partial refund
await upgate.refunds.create({
  transactionId: 'txn_...',
  amount: '5.00',
  currencyCode: 'EUR',
  reason: 'Partial return',
});
```

---

## Tokens

Create a payment token for card-on-file flows (requires backoffice setting enabled).

```typescript
const token = await upgate.tokens.create({
  paymentMethod: 'CARD',
  merchantCustomerId: 'cust_123',
  email: 'customer@example.com',
  language: 'en',
  countryCode: 'DE',
  successUrl: 'https://mystore.com/success',
  failureUrl: 'https://mystore.com/failure',
  prefilledCardHolder: 'John Doe', // optional
});

// Redirect customer to enter card details
console.log(token.data.session.redirectUrl);
// Use token.data.paymentId for subsequent MIT/CIT transactions
```

---

## Payouts

```typescript
// Card payout
await upgate.payouts.create({
  paymentMethod: 'CARD',
  merchantPaymentId: 'payout_001',
  merchantCustomerId: 'cust_123',
  amount: '100.00',
  currencyCode: 'EUR',
  paymentDetails: { paymentTokenId: 'tok_...' },
});

// Crypto payout
await upgate.payouts.create({
  paymentMethod: 'CRYPTO',
  merchantPaymentId: 'payout_002',
  merchantCustomerId: 'cust_123',
  amount: '50.00',
  currencyCode: 'USDT',
  paymentDetails: {
    cryptoNetwork: 'TRC20',
    cryptoAddress: 'TWd4WrZ9...',
  },
});

// SEPA payout
await upgate.payouts.create({
  paymentMethod: 'SEPA',
  merchantPaymentId: 'payout_003',
  merchantCustomerId: 'cust_123',
  amount: '200.00',
  currencyCode: 'EUR',
  paymentDetails: { iban: 'DE89370400440532013000' },
});

// PAXUM payout
await upgate.payouts.create({
  paymentMethod: 'PAXUM',
  merchantPaymentId: 'payout_004',
  merchantCustomerId: 'cust_123',
  amount: '75.00',
  currencyCode: 'USD',
  paymentDetails: { email: 'recipient@example.com' },
});

// Bank transfer payout
await upgate.payouts.create({
  paymentMethod: 'BANK_TRANSFER',
  merchantPaymentId: 'payout_005',
  merchantCustomerId: 'cust_123',
  amount: '500000',
  currencyCode: 'KRW',
  description: 'Monthly payout',
  paymentDetails: {
    bankName: 'KB Kookmin',
    accountNumber: '123456789',
  },
});
```

---

## Webhooks

Standalone — no client instantiation needed.

```typescript
import { UpGateWebhooks } from 'upgate';
import type { TransactionPostback, SubscriptionPostback } from 'upgate';
```

### Verify Signature

```typescript
const isValid = UpGateWebhooks.verifySignature({
  payload: rawBody,                          // string or Buffer
  signature: req.headers['x-signature'],     // HMAC-SHA256 hex
  secret: process.env.UPGATE_WEBHOOK_SECRET!,
});

if (!isValid) {
  return res.status(401).send('Invalid signature');
}
```

### Parse Events

```typescript
// Transaction postback
const event = UpGateWebhooks.parseEvent<TransactionPostback>(rawBody);
console.log(event.type); // 'TRANSACTION'
console.log(event.data.transactionId);
console.log(event.data.transactionStatus); // 'SUCCESS' | 'DECLINE' | 'ERROR'

// Subscription postback
const subEvent = UpGateWebhooks.parseEvent<SubscriptionPostback>(rawBody);
console.log(subEvent.type); // 'SUBSCRIPTION'
console.log(subEvent.data.subscriptionStatus);
console.log(subEvent.data.isRebillEnabled);
```

### Postback IP Allowlist

| Environment | IPs |
|---|---|
| **Production** | `18.195.228.88`, `3.68.255.126`, `3.127.95.240`, `18.198.146.231` |
| **Sandbox** | `35.159.56.107`, `18.153.214.226`, `18.194.246.210`, `52.28.150.254` |

---

## Error Handling

All errors extend `UpGateError` and include structured details from the API.

```typescript
import {
  UpGateError,
  UpGateInvalidRequestError,
  UpGateAuthenticationError,
  UpGateRateLimitError,
  UpGateInternalError,
  UpGateConnectionError,
} from 'upgate';

try {
  await upgate.refunds.create({ transactionId: 'bad_id' });
} catch (err) {
  if (err instanceof UpGateInvalidRequestError) {
    // 400 — bad request
    console.log(err.statusCode);  // 400
    console.log(err.errors);      // [{ errorCode, errorMessage }]
    console.log(err.code);        // first error code
  } else if (err instanceof UpGateAuthenticationError) {
    // 401 — invalid API key
  } else if (err instanceof UpGateRateLimitError) {
    // 429 — rate limited
    console.log(err.retryAfter);
  } else if (err instanceof UpGateInternalError) {
    // 500 — server error (auto-retried before throwing)
  } else if (err instanceof UpGateConnectionError) {
    // Network failure (auto-retried before throwing)
  }
}
```

**Error codes:** `INVALID_REQUEST_PARAMETER`, `INVALID_REQUEST`, `INTERNAL_ERROR`, `TOO_MANY_REQUESTS`, `NOT_FOUND`

---

## Supported Payment Methods

| Method | Code | Notes |
|---|---|---|
| Card | `CARD` | Visa, Mastercard, etc. |
| Apple Pay | `APPLE_PAY` | Must include `CARD` in methods too |
| Google Pay | `GOOGLE_PAY` | Must include `CARD` in methods too |
| Kakao Pay | `KAKAO_PAY` | — |
| SEPA | `SEPA` | — |
| Crypto | `CRYPTO` | Provide network + address in additionalInfo |
| Bank (Japan) | `PAY_BY_BANK_JAPAN` | — |

## Payout Methods

`CARD`, `CRYPTO`, `SEPA`, `PAXUM`, `BANK_TRANSFER`

---

## Deprecated Endpoints

These still work but should be migrated to `checkout.sale()` / `checkout.subscribe()`.

```typescript
await upgate.deprecated.sale({ ... });      // → use checkout.sale()
await upgate.deprecated.authorize({ ... }); // → use checkout.sale() with type AUTHORIZE
await upgate.deprecated.recurring({ ... }); // → use checkout.subscribe()
```

---

## Environments

| Environment | Base URL |
|---|---|
| Sandbox | `https://api.sandbox.upgate.com/v1` |
| Production | `https://api.upgate.com/v1` |

## License

MIT
