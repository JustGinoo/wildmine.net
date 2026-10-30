"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { MessageCircle, ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";

type DiscordData = {
  memberCount: number;
  onlineCount: number;
  guildName: string | null;
  iconUrl: string | null;
};

/**
 * Live Discord numbers, as a compact card in the hero's right column.
 *
 * It wears Discord's own blurple rather than the site green: it is the one
 * element on the page that leads somewhere else, and the colour says so before
 * the label does.
 */
export default function DiscordWidget() {
  const t = useTranslations("discordWidget");
  const [data, setData] = useState<DiscordData | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch("/api/discord");
        const json: DiscordData = await res.json();
        if (!cancelled) setData(json);
      } catch {
        // keep previous state
      }
    }

    load();
    const interval = setInterval(load, 60000);
    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, []);

  return (
    <a
      href={site.discordUrl}
      target="_blank"
      rel="noopener noreferrer"
      title={t("open")}
      className="mc-card group flex items-center gap-3 bg-surface/90 p-3 backdrop-blur-sm hover:border-discord"
    >
      {data?.iconUrl ? (
        /* Same reason as the player heads: served through our optimizer so
           cdn.discordapp.com never sees the visitor. */
        <Image
          src={data.iconUrl}
          alt=""
          width={32}
          height={32}
          className="h-8 w-8 flex-none"
        />
      ) : (
        <span className="mc-btn flex h-8 w-8 flex-none items-center justify-center border-discord bg-discord text-discord-text">
          <MessageCircle className="h-4 w-4" />
        </span>
      )}

      <span className="min-w-0 flex-1 truncate text-sm font-bold text-foreground">
        {data?.guildName ?? t("title")}
      </span>

      <span className="flex flex-none items-center gap-3 font-mono text-xs tabular-nums">
        <span className="flex items-center gap-1.5">
          <span aria-hidden className="h-2 w-2 flex-none bg-discord" />
          <span className="font-bold text-foreground">
            {data ? data.memberCount.toLocaleString() : "…"}
          </span>
        </span>
        <span className="flex items-center gap-1.5">
          <span aria-hidden className="h-2 w-2 flex-none bg-primary" />
          <span className="text-muted">
            {data ? data.onlineCount.toLocaleString() : "…"}
          </span>
        </span>
      </span>

      <ArrowUpRight className="h-4 w-4 flex-none text-muted transition-colors group-hover:text-discord" />
    </a>
  );
}
