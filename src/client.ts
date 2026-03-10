import { resolveConfig, type UpGateConfig } from './config';
import { HttpClient } from './http';
import {
  CheckoutResource,
  SubscriptionsResource,
  TransactionsResource,
  RefundsResource,
  TokensResource,
  PayoutsResource,
  MitResource,
  CitResource,
  DeprecatedResource,
} from './resources';

/**
 * UpGate payment orchestration SDK client.
 *
 * @example
 * ```typescript
 * import { UpGate } from 'upgate';
 *
 * // Reads UPGATE_API_KEY from environment
 * const upgate = new UpGate({ environment: 'sandbox' });
 *
 * // Or pass the key explicitly
 * const upgate = new UpGate({ apiKey: 'sk_live_...', environment: 'production' });
 * ```
 */
export class UpGate {
  /** One-time payments and subscription checkout flows */
  public readonly checkout: CheckoutResource;

  /** Subscription management (list, get, update rebill status) */
  public readonly subscriptions: SubscriptionsResource;

  /** Transaction queries with filters and cursor-based pagination */
  public readonly transactions: TransactionsResource;

  /** Full and partial refunds */
  public readonly refunds: RefundsResource;

  /** Payment token creation for card-on-file flows */
  public readonly tokens: TokensResource;

  /** Payouts to customers (CARD, CRYPTO, SEPA, PAXUM, BANK_TRANSFER) */
  public readonly payouts: PayoutsResource;

  /** Merchant-Initiated Transactions (sale and authorize with stored tokens) */
  public readonly mit: MitResource;

  /** Customer-Initiated Transactions with 3D Secure */
  public readonly cit: CitResource;

  /** @deprecated Legacy endpoints — use checkout instead */
  public readonly deprecated: DeprecatedResource;

  constructor(config: UpGateConfig = {}) {
    const resolved = resolveConfig(config);
    const http = new HttpClient(resolved);

    this.checkout = new CheckoutResource(http);
    this.subscriptions = new SubscriptionsResource(http);
    this.transactions = new TransactionsResource(http);
    this.refunds = new RefundsResource(http);
    this.tokens = new TokensResource(http);
    this.payouts = new PayoutsResource(http);
    this.mit = new MitResource(http);
    this.cit = new CitResource(http);
    this.deprecated = new DeprecatedResource(http);
  }
}
