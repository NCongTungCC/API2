export const MASK = '[MASKED]';

const SENSITIVE_KEY =
  /^(authorization|cookie|set-cookie|password|passwd|pwd|secret|credential|email|pin|otp|cvv|.*token.*|.*api[-_]?key.*|.*public[-_]?key.*|.*card[-_]?(number|no)$)$/i;

const MAX_DEPTH = 8;

export const maskHelper = {
  maskData(value: unknown, depth = 0): unknown {
    if (depth >= MAX_DEPTH || value === null || typeof value !== 'object') {
      return value;
    }

    if (Array.isArray(value)) {
      return value.map((item) => maskHelper.maskData(item, depth + 1));
    }

    return Object.fromEntries(
      Object.entries(value as Record<string, unknown>).map(([key, item]) =>
        SENSITIVE_KEY.test(key) ? [key, MASK] : [key, maskHelper.maskData(item, depth + 1)]
      )
    );
  },

  isPlainObject(value: unknown): value is Record<string, unknown> {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      !(value instanceof Error)
    );
  },
};
