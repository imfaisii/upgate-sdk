// Main client
export { UpGate } from './client';
export type { UpGateConfig, Environment } from './config';

// Webhook utilities (standalone — no client needed)
export { UpGateWebhooks } from './webhooks';

// Error classes
export {
  UpGateError,
  UpGateInvalidRequestError,
  UpGateAuthenticationError,
  UpGateRateLimitError,
  UpGateInternalError,
  UpGateConnectionError,
} from './errors';

// All types
export type * from './types';
