"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { useNetworkStatus } from "./use-network-status";
import { useDaysOnline } from "./use-days-online";

type DiscordData = { memberCount: number; onlineCount: number };

/**
 * The four headline numbers, as one strip of cells rather than four floating
 * boxes. `gap-px` over a border-coloured background draws the dividers, so the
 * hairlines stay exactly 1px at any breakpoint.
 */
export default function StatTiles() {
  const t = useTranslations("stats");
  const td = useTranslations("discordWidget");
  const ta = useTranslations("serverAge");
  const status = useNetworkStatus();
  const [discord, setDiscord] = useState<DiscordData | null>(null);
  const days = useDaysOnline();

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch("/api/discord");
        const data: DiscordData = await res.json();
        if (!cancelled) setDiscord(data);
      } catch {
        if (!cancelled) setDiscord(null);
      }
    }

    load();
    const interval = setInterval(load, 30000);
    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, []);

  // Values the APIs could not deliver are left out instead of showing a misleading 0
  const registered = status?.registeredPlayers || null;
  const members = discord?.memberCount || null;

  const cells = [
    {
      key: "players",
      value: status ? status.players.online.toLocaleString() : "…",
      label: t("playersOnline"),
    },
    {
      key: "days",
      value: days === null ? "…" : days.toLocaleString(),
      label: `${ta("days")} ${ta("label")}`,
    },
    {
      key: "registered",
      value: registered === null ? null : registered.toLocaleString(),
      label: t("registered"),
    },
    {
      key: "discord",
      value: discord === null ? "…" : members === null ? null : members.toLocaleString(),
      label: td("members"),
    },
  ].filter((cell) => cell.value !== null);

  return (
    <div
      className={`mc-panel mc-intro grid grid-cols-2 gap-px bg-border backdrop-blur-sm ${
        cells.length === 4 ? "sm:grid-cols-4" : cells.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"
      }`}
      style={{ ["--base" as string]: "300ms" }}
    >
      {cells.map((cell) => (
        <div key={cell.key} className="bg-surface/90 px-4 py-6 text-center">
          <p className="font-mono text-3xl font-extrabold tabular-nums text-primary">
            {cell.value}
          </p>
          <p className="mt-1.5 text-xs text-muted">{cell.label}</p>
        </div>
      ))}
    </div>
  );
}
