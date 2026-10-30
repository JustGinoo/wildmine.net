"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowUpRight, Trophy } from "lucide-react";
import { Link } from "@/i18n/navigation";

type PlaytimeEntry = { rank: number; name: string; playtimeSeconds: number };

function formatHours(seconds: number) {
  return `${Math.floor(seconds / 3600).toLocaleString()} h`;
}

/** Top three by playtime, as a card in the hero's right column. */
export default function TopPlaytime() {
  const t = useTranslations("topPlaytime");
  const [entries, setEntries] = useState<PlaytimeEntry[] | null>(null);

  useEffect(() => {
    let cancelled = false;

    fetch("/api/stats/playtime")
      .then((res) => res.json())
      .then((data: PlaytimeEntry[]) => {
        if (!cancelled) setEntries(data.slice(0, 3));
      })
      .catch(() => {
        if (!cancelled) setEntries([]);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  // Nothing to show yet — stay out of the way rather than render an empty box
  if (entries !== null && entries.length === 0) return null;

  return (
    <Link
      href="/#playtime"
      title={t("cta")}
      className="mc-card group block bg-surface/90 backdrop-blur-sm"
    >
      <div className="flex items-center gap-3 border-b border-border p-4">
        <span className="mc-btn mc-btn-primary flex h-9 w-9 flex-none items-center justify-center">
          <Trophy className="h-4.5 w-4.5" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-sm font-bold text-foreground">
            {t("title")}
          </span>
          <span className="block truncate text-xs text-muted">{t("cta")}</span>
        </span>
        <ArrowUpRight className="h-4 w-4 flex-none text-muted transition-colors group-hover:text-primary" />
      </div>

      {entries === null ? (
        <div className="flex flex-col gap-px bg-border">
          {[0, 1, 2].map((index) => (
            <div key={index} className="h-11 bg-surface" />
          ))}
        </div>
      ) : (
        <ol className="flex flex-col gap-px bg-border">
          {entries.map((entry) => (
            <li
              key={entry.rank}
              className="flex items-center gap-3 bg-surface px-4 py-2.5"
            >
              <span
                className={`w-5 flex-none font-mono text-xs font-bold tabular-nums ${
                  entry.rank === 1 ? "text-accent" : "text-faint"
                }`}
              >
                {entry.rank}
              </span>
              {/* No `unoptimized`: the optimizer fetches the head server
                  side, so the visitor's browser never calls mc-heads.net and
                  no IP address leaves for a third party. */}
              <Image
                src={`https://mc-heads.net/avatar/${encodeURIComponent(entry.name)}/32`}
                alt=""
                width={24}
                height={24}
                loading="eager"
                className="h-6 w-6 flex-none [image-rendering:pixelated]"
              />
              <span className="min-w-0 flex-1 truncate text-sm font-semibold text-foreground">
                {entry.name}
              </span>
              <span className="flex-none font-mono text-xs tabular-nums text-muted">
                {formatHours(entry.playtimeSeconds)}
              </span>
            </li>
          ))}
        </ol>
      )}
    </Link>
  );
}
