"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Trophy } from "lucide-react";

type PlaytimeEntry = { rank: number; name: string; playtimeSeconds: number };

function formatPlaytime(seconds: number) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  return `${hours.toLocaleString()} h ${minutes} m`;
}

export default function PlaytimeLeaderboard({
  /** Off when the surrounding section already carries the heading. */
  showHeader = true,
}: {
  showHeader?: boolean;
} = {}) {
  const t = useTranslations("playtimeLeaderboard");
  const [entries, setEntries] = useState<PlaytimeEntry[] | null>(null);

  useEffect(() => {
    let cancelled = false;

    fetch("/api/stats/playtime")
      .then((res) => res.json())
      .then((data: PlaytimeEntry[]) => {
        if (!cancelled) setEntries(data);
      })
      .catch(() => {
        if (!cancelled) setEntries([]);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="mc-panel bg-surface">
      {showHeader && (
        <div className="flex items-center gap-3 border-b border-border p-5">
          <span className="mc-btn mc-btn-primary flex h-10 w-10 flex-none items-center justify-center">
            <Trophy className="h-5 w-5" />
          </span>
          <span>
            <span className="block font-bold text-foreground">{t("title")}</span>
            <span className="block text-xs text-muted">{t("subtitle")}</span>
          </span>
        </div>
      )}

      {entries === null && (
        <p className="p-8 text-center text-sm text-muted">{t("loading")}</p>
      )}

      {entries !== null && entries.length === 0 && (
        <p className="p-8 text-center text-sm text-muted">{t("empty")}</p>
      )}

      {entries !== null && entries.length > 0 && (
        <ol className="flex flex-col gap-px bg-border">
          {entries.map((entry) => (
            <li
              key={entry.rank}
              className="flex items-center gap-3 bg-surface px-4 py-2.5 sm:px-5"
            >
              <span
                className={`w-6 flex-none font-mono text-sm font-bold tabular-nums ${
                  entry.rank === 1 ? "text-accent" : "text-faint"
                }`}
              >
                {entry.rank}
              </span>
              {/* No `unoptimized`: the optimizer fetches the head server
                  side, so the visitor's browser never calls minotar.net and
                  no IP address leaves for a third party. */}
              <Image
                src={`https://minotar.net/helm/${encodeURIComponent(entry.name)}/32`}
                alt=""
                width={24}
                height={24}
                className="h-6 w-6 flex-none [image-rendering:pixelated]"
              />
              <span className="min-w-0 flex-1 truncate font-semibold text-foreground">
                {entry.name}
              </span>
              <span className="flex-none font-mono text-sm tabular-nums text-muted">
                {formatPlaytime(entry.playtimeSeconds)}
              </span>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
