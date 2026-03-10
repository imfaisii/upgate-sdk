/**
 * Converts a camelCase string to snake_case.
 * e.g. "merchantCustomerId" → "merchant_customer_id"
 */
function camelToSnake(str: string): string {
  return str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
}

/**
 * Converts a snake_case string to camelCase.
 * e.g. "merchant_customer_id" → "merchantCustomerId"
 */
function snakeToCamel(str: string): string {
  return str.replace(/_([a-z])/g, (_, letter: string) => letter.toUpperCase());
}

/**
 * Deep recursive transform of object keys from camelCase to snake_case.
 * Handles nested objects and arrays. Passes through primitives unchanged.
 */
export function toSnakeCase(obj: unknown): unknown {
  if (obj === null || obj === undefined) return obj;
  if (Array.isArray(obj)) return obj.map(toSnakeCase);
  if (typeof obj !== 'object') return obj;

  const result: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(obj as Record<string, unknown>)) {
    result[camelToSnake(key)] = toSnakeCase(value);
  }
  return result;
}

/**
 * Deep recursive transform of object keys from snake_case to camelCase.
 * Handles nested objects and arrays. Passes through primitives unchanged.
 */
export function toCamelCase(obj: unknown): unknown {
  if (obj === null || obj === undefined) return obj;
  if (Array.isArray(obj)) return obj.map(toCamelCase);
  if (typeof obj !== 'object') return obj;

  const result: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(obj as Record<string, unknown>)) {
    result[snakeToCamel(key)] = toCamelCase(value);
  }
  return result;
}
