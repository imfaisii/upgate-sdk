import { createHmac, timingSafeEqual } from 'node:crypto';
import type { VerifySignatureParams, WebhookEvent } from '../types/webhook';

/**
 * Standalone webhook utilities for verifying and parsing UpGate postbacks.
 * No client instantiation required — import and use directly.
 *
 * @example
 * ```typescript
 * import { UpGateWebhooks } from 'upgate';
 *
 * const isValid = UpGateWebhooks.verifySignature({
 *   payload: rawBody,
 *   signature: req.headers['x-signature'],
 *   secret: process.env.UPGATE_WEBHOOK_SECRET!,
 * });
 * ```
 */
export class UpGateWebhooks {
  /**
   * Verify the HMAC-SHA256 signature of an incoming webhook postback.
   * Uses timing-safe comparison to prevent timing attacks.
   *
   * @returns true if the signature is valid, false otherwise
   */
  static verifySignature(params: VerifySignatureParams): boolean {
    const { payload, signature, secret } = params;

    const payloadStr = typeof payload === 'string'
      ? payload
      : payload.toString('utf8');

    const expectedSignature = createHmac('sha256', secret)
      .update(payloadStr)
      .digest('hex');

    try {
      return timingSafeEqual(
        Buffer.from(signature, 'hex'),
        Buffer.from(expectedSignature, 'hex'),
      );
    } catch {
      // Length mismatch or invalid hex — signature is invalid
      return false;
    }
  }

  /**
   * Parse a raw webhook payload into a typed event object.
   * Always call verifySignature() before parsing untrusted payloads.
   */
  static parseEvent<T extends WebhookEvent = WebhookEvent>(
    payload: string | Buffer,
  ): T {
    const str = typeof payload === 'string'
      ? payload
      : payload.toString('utf8');
    return JSON.parse(str) as T;
  }
}
