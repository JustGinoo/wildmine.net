"use client";

import { useTranslations } from "next-intl";
import { Users } from "lucide-react";
import { useNetworkStatus } from "./use-network-status";

/**
 * Small live player count for a single game mode. Renders nothing while the
 * status is loading or when the mode has no server on the proxy yet, so the
 * card layout never jumps for modes that are still in the works.
 */
export default function ModePlayers({ server }: { server: string }) {
  const t = useTranslations("modes");
  const status = useNetworkStatus();

  if (!status) return null;

  const entry = status.servers.find(
    (candidate) => candidate.name.toLowerCase() === server.toLowerCase(),
  );

  if (!entry || entry.state !== "ONLINE") return null;

  return (
    <span className="flex items-center gap-1.5 text-xs font-semibold text-primary-2">
      <Users className="h-3.5 w-3.5" />
      {t("playersOnline", { count: entry.online })}
    </span>
  );
}
