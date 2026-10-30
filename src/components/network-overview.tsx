"use client";

import { useTranslations } from "next-intl";
import { useNetworkStatus } from "./use-network-status";
import { useDaysOnline } from "./use-days-online";

/** Shown while the first request is running. */
const LOADING = "…";
/** Shown when the request finished but the proxy API had nothing to offer. */
const NO_DATA = "–";

export default function NetworkOverview() {
  const t = useTranslations("pages.status.overview");
  const status = useNetworkStatus(20000);
  const days = useDaysOnline();

  const serversOnline =
    status?.servers.filter((s) => s.state === "ONLINE").length ?? 0;
  const serversTotal = status?.servers.length ?? 0;

  const tiles = [
    {
      key: "players",
      value: status ? status.players.online.toLocaleString() : LOADING,
    },
    {
      key: "servers",
      value: status
        ? serversTotal > 0
          ? `${serversOnline}/${serversTotal}`
          : NO_DATA
        : LOADING,
    },
    {
      key: "registered",
      value: !status
        ? LOADING
        : status.registeredPlayers != null
          ? status.registeredPlayers.toLocaleString()
          : NO_DATA,
    },
    {
      key: "daysOnline",
      value: days === null ? LOADING : days.toLocaleString(),
    },
  ] as const;

  return (
    <div className="mc-panel mc-stagger grid grid-cols-2 gap-px bg-border sm:grid-cols-4">
      {tiles.map((tile) => (
        <div key={tile.key} className="bg-surface px-4 py-6 text-center">
          <p className="font-mono text-3xl font-extrabold tabular-nums text-primary">
            {tile.value}
          </p>
          <p className="mt-1.5 text-xs text-muted">{t(tile.key)}</p>
        </div>
      ))}
    </div>
  );
}
