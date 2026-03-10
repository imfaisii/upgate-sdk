import type { ApiErrorDetail, UpGateErrorCode } from './types/common';

/**
 * Base error for all UpGate SDK errors.
 * Contains structured API error details and HTTP status information.
 */
export class UpGateError extends Error {
  public readonly statusCode: number;
  public readonly errors: ApiErrorDetail[];
  public readonly requestId?: string;

  constructor(
    message: string,
    statusCode: number,
    errors: ApiErrorDetail[] = [],
    requestId?: string,
  ) {
    super(message);
    this.name = 'UpGateError';
    this.statusCode = statusCode;
    this.errors = errors;
    this.requestId = requestId;
    Object.setPrototypeOf(this, new.target.prototype);
  }

  get code(): UpGateErrorCode | undefined {
    return this.errors[0]?.errorCode;
  }
}

/** 400 — Invalid request parameters or payload */
export class UpGateInvalidRequestError extends UpGateError {
  constructor(errors: ApiErrorDetail[], requestId?: string) {
    super(
      errors[0]?.errorMessage ?? 'Invalid request',
      400,
      errors,
      requestId,
    );
    this.name = 'UpGateInvalidRequestError';
  }
}

/** 401 — Missing or invalid API key */
export class UpGateAuthenticationError extends UpGateError {
  constructor(requestId?: string) {
    super('Invalid or missing API key', 401, [], requestId);
    this.name = 'UpGateAuthenticationError';
  }
}

/** 429 — Rate limit exceeded */
export class UpGateRateLimitError extends UpGateError {
  public readonly retryAfter?: number;

  constructor(errors: ApiErrorDetail[], retryAfter?: number, requestId?: string) {
    super('Rate limit exceeded', 429, errors, requestId);
    this.name = 'UpGateRateLimitError';
    this.retryAfter = retryAfter;
  }
}

/** 500 — UpGate internal server error */
export class UpGateInternalError extends UpGateError {
  constructor(errors: ApiErrorDetail[], requestId?: string) {
    super('Internal server error', 500, errors, requestId);
    this.name = 'UpGateInternalError';
  }
}

/** Network/connection failures (DNS, timeout, etc.) */
export class UpGateConnectionError extends UpGateError {
  constructor(message: string) {
    super(message, 0, []);
    this.name = 'UpGateConnectionError';
  }
}
