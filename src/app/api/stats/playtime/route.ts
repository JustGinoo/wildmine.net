import { NextResponse } from "next/server";
import { getProxyPlaytime } from "@/lib/proxy-api";

export const dynamic = "force-dynamic";

export type PlaytimeEntry = {
  rank: number;
  name: string;
  playtimeSeconds: number;
};

const TTL_MS = 5 * 60 * 1000;
const EMPTY_TTL_MS = 60 * 1000;

let cache: { data: PlaytimeEntry[]; expires: number } | null = null;

async function load(): Promise<PlaytimeEntry[]> {
  const proxy = await getProxyPlaytime(10);
  if (!proxy) return [];
  return proxy.players.map((entry) => ({
    rank: entry.rank,
    name: entry.name,
    playtimeSeconds: entry.playtimeSeconds,
  }));
}

export async function GET() {
  if (cache && cache.expires > Date.now()) {
    return NextResponse.json(cache.data);
  }

  const data = await load();
  cache =
    data.length > 0
      ? { data, expires: Date.now() + TTL_MS }
      : { data: cache?.data ?? data, expires: Date.now() + EMPTY_TTL_MS };
  return NextResponse.json(cache.data);
}
