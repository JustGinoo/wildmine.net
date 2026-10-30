"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { useNetworkStatus } from "./use-network-status";

/**
 * Player count in the header. On a Minecraft server site "is anyone on right
 * now" is the single most asked question, so it belongs in the chrome rather
 * than halfway down the start page.
 *
 * Renders nothing until the first response lands — a placeholder that resizes
 * would shift the whole nav bar.
 */
export default function NavLivePill() {
  const t = useTranslations("hero");
  const status = useNetworkStatus(30000);

  if (!status) return null;

  const maintenance = status.maintenance.active;
  const online = status.online && !maintenance;

  return (
    <Link
      href="/status"
      title={t("playersOnline")}
      className="mc-panel flex items-center gap-2 bg-surface px-2.5 py-1.5 font-mono text-xs transition-colors hover:border-primary"
    >
      <span
        aria-hidden
        className={`h-2 w-2 flex-none ${
          maintenance ? "bg-accent" : online ? "bg-primary" : "bg-faint"
        }`}
      />
      {online ? (
        <span className="font-bold text-foreground tabular-nums">
          {status.players.online}
          <span className="ml-1 font-normal text-muted">
            {t("online").toLowerCase()}
          </span>
        </span>
      ) : (
        <span className="text-muted">
          {maintenance ? t("maintenance") : t("offline")}
        </span>
      )}
    </Link>
  );
}
