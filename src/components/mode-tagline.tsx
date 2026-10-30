"use client";

import type { GameMode } from "@/lib/site";
import { useEffectiveStatus } from "./use-effective-status";

/**
 * A mode's one-line tagline, which may differ before and after its launch.
 *
 * Without this, WildAttack would still read "starts on 10 Oct at 6 pm" next to
 * a LIVE badge. Modes without a second line simply render the one they have.
 */
export default function ModeTagline({
  mode,
  pending,
  live,
}: {
  mode: GameMode;
  pending: string;
  /** Used once the mode is live. Omitted when the wording does not change. */
  live?: string;
}) {
  const status = useEffectiveStatus(mode);
  return <>{live && status === "live" ? live : pending}</>;
}
