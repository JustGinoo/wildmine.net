/**
 * Short-lived in-memory cache for the public API routes. Every request used to
 * hit Discord, the proxy API or mcstatus.io directly; a flood of requests would
 * get the server rate-limited there. Concurrent callers share one fetch.
 */
const entries = new Map<string, { value: unknown; expires: number; pending?: Promise<unknown> }>();

export async function memo<T>(key: string, ttlMs: number, load: () => Promise<T>): Promise<T> {
  const hit = entries.get(key);
  if (hit && hit.expires > Date.now()) return hit.value as T;
  if (hit?.pending) return hit.pending as Promise<T>;

  const pending = load();
  entries.set(key, { value: hit?.value, expires: 0, pending });
  try {
    const value = await pending;
    entries.set(key, { value, expires: Date.now() + ttlMs });
    return value;
  } catch (err) {
    entries.delete(key);
    throw err;
  }
}
