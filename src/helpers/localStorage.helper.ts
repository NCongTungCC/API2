import { AsyncLocalStorage } from 'node:async_hooks';
import { randomBytes } from 'node:crypto';

type ContextStore = Map<string, unknown>;

const storage = new AsyncLocalStorage<ContextStore>();

export const localStorageHelper = {
  run(initial: Record<string, unknown>, callback: () => void): void {
    storage.run(new Map(Object.entries(initial)), callback);
  },

  set(key: string, value: unknown): void {
    storage.getStore()?.set(key, value);
  },

  get<T>(key: string): T | undefined {
    return storage.getStore()?.get(key) as T;
  },
};

export const generateRequestId = (): string => randomBytes(16).toString('base64url').slice(0, 21);
