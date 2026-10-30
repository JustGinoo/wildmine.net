/**
 * Client for the ProxySystem web API that runs inside our Velocity proxy.
 * Only ever called from the server (route handlers), so the token never
 * reaches the browser. Every call fails soft: if the proxy is down or the
 * API is not configured, the caller gets null and falls back to mcstatus.io.
 */

export type ProxyServerState = "ONLINE" | "OFFLINE" | "MAINTENANCE";

export type ProxyServer = {
  name: string;
  display?: string;
  description?: string;
  hidden?: boolean;
  order?: number;
  state: ProxyServerState;
  online: number;
  max: number;
  pingMs: number;
  queue: number;
  performance?: {
    tps: number;
    memoryUsedMb: number;
    memoryMaxMb: number;
    diskFreeMb: number;
    diskTotalMb: number;
  };
};

export type ProxyStatus = {
  timestamp: number;
  proxy: {
    online: boolean;
    players: number;
    maxPlayers: number;
    uptimeSeconds: number;
    version: string;
    proxyVersion: string;
    memoryUsedMb: number;
    memoryMaxMb: number;
    maintenance: boolean;
    registeredPlayers?: number;
  };
  servers: ProxyServer[];
  maintenance?: {
    available: boolean;
    global: boolean;
    until: number | null;
    remaining: string;
    servers: string[];
  };
};

export type ProxyPlaytimeEntry = {
  rank: number;
  name: string;
  uuid?: string;
  playtimeSeconds: number;
  playtimeFormatted: string;
  firstSeen: number;
  lastSeen: number;
  lastServer: string | null;
};

const TIMEOUT_MS = 4000;

function baseUrl() {
  const url = process.env.PROXY_API_URL;
  return url ? url.replace(/\/+$/, "") : null;
}

async function get<T>(path: string): Promise<T | null> {
  const base = baseUrl();
  if (!base) return null;

  const token = process.env.PROXY_API_TOKEN;

  try {
    const res = await fetch(`${base}${path}`, {
      cache: "no-store",
      signal: AbortSignal.timeout(TIMEOUT_MS),
      headers: token ? { Authorization: `Bearer ${token}` } : undefined,
    });

    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

export function getProxyStatus() {
  return get<ProxyStatus>("/api/status");
}

export function getProxyPlaytime(limit = 10) {
  return get<{ count: number; players: ProxyPlaytimeEntry[] }>(
    `/api/playtime/top?limit=${limit}`,
  );
}

/**
 * Game modes the website does not publish. HardcoreSMP was retired from the
 * site, but the proxy still reports it, so the status page would keep listing
 * a mode nobody can read about anywhere else.
 */
const UNLISTED = new Set(["hardcoresmp"]);

/** Servers a visitor should see: hidden ones stay out, sorted like in game. */
export function visibleServers(status: ProxyStatus): ProxyServer[] {
  return status.servers
    .filter(
      (server) => !server.hidden && !UNLISTED.has(server.name.toLowerCase()),
    )
    .sort((a, b) => (a.order ?? 100) - (b.order ?? 100) || a.name.localeCompare(b.name));
}
