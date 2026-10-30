"use client";

import type { GameMode, ModeStatus } from "@/lib/site";
import { useEffectiveStatus } from "./use-effective-status";

const statusStyles: Record<ModeStatus, string> = {
  live: "bg-primary text-background",
  soon: "bg-surface-2 text-primary-2 border border-primary/40",
  wip: "bg-surface-2 text-faint border border-border",
};

/**
 * Status badge for a game mode. The clock work lives in useEffectiveStatus,
 * which the tagline uses too — the two must never disagree.
 */
export default function ModeStatusBadge({
  mode,
  liveLabel,
  pendingLabel,
  className = "px-2 py-1 text-[10px]",
}: {
  mode: GameMode;
  liveLabel: string;
  pendingLabel: string;
  className?: string;
}) {
  const status = useEffectiveStatus(mode);

  return (
    <span
      className={`font-bold uppercase tracking-wider ${className} ${statusStyles[status]}`}
    >
      {status === "live" ? liveLabel : pendingLabel}
    </span>
  );
}
