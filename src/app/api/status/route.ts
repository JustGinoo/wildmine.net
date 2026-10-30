import { NextResponse } from "next/server";
import { site } from "@/lib/site";
import { memo } from "@/lib/memo";
import { getProxyStatus, visibleServers } from "@/lib/proxy-api";
import { emptyStatus as empty, type StatusResponse } from "@/lib/status";

export const dynamic = "force-dynamic";

/** mcstatus.io only knows the proxy as a whole — used when our API is down. */
async function fromMcStatus(): Promise<StatusResponse> {
  try {
    const res = await fetch(
      `https://api.mcstatus.io/v2/status/java/${site.javaIp}`,
      { cache: "no-store", signal: AbortSignal.timeout(5000) },
    );

    if (!res.ok) return empty;
    const data = await res.json();

    return {
      ...empty,
      online: Boolean(data.online),
      players: {
        online: data.players?.online ?? 0,
        max: data.players?.max ?? 0,
      },
      source: "mcstatus",
    };
  } catch {
    return empty;
  }
}

export async function GET() {
  return NextResponse.json<StatusResponse>(await memo("status", 15_000, loadStatus));
}

async function loadStatus(): Promise<StatusResponse> {
  const status = await getProxyStatus();

  if (!status) {
    return fromMcStatus();
  }

  return {
    online: status.proxy.online,
    players: {
      online: status.proxy.players,
      max: status.proxy.maxPlayers,
    },
    source: "proxysystem",
    maintenance: {
      active: status.proxy.maintenance,
      remaining: status.maintenance?.remaining ?? null,
    },
    registeredPlayers: status.proxy.registeredPlayers ?? null,
    uptimeSeconds: status.proxy.uptimeSeconds,
    servers: visibleServers(status).map((server) => ({
      name: server.name,
      display: server.display?.trim() || server.name,
      state: server.state,
      online: server.online,
      max: server.max,
      pingMs: server.pingMs,
      queue: server.queue,
      tps: server.performance ? server.performance.tps : null,
    })),
  };
}
