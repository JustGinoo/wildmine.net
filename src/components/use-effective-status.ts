"use client";

import { useCallback, useSyncExternalStore } from "react";
import { effectiveStatus, type GameMode, type ModeStatus } from "@/lib/site";

/** Longest delay setTimeout can hold — anything beyond fires immediately. */
const MAX_TIMEOUT = 2_147_483_647;

/**
 * A mode's status, resolved against the clock in the visitor's browser.
 *
 * Pages are prerendered, so a mode with a launch moment would otherwise keep
 * the status it had at build time until someone redeploys. Here it is resolved
 * again on the client, and once the launch is within timer range the page
 * flips itself over at that second without a reload — nobody has to be awake
 * at 18:00 to push a button.
 *
 * The server snapshot returns the configured status, so the prerendered HTML
 * and the first client render agree and hydration stays quiet.
 */
export function useEffectiveStatus(mode: GameMode): ModeStatus {
  const subscribe = useCallback(
    (onChange: () => void) => {
      if (!mode.liveFrom) return () => {};
      const delay = Date.parse(mode.liveFrom) - Date.now();
      if (delay <= 0 || delay > MAX_TIMEOUT) return () => {};
      const id = setTimeout(onChange, delay + 500);
      return () => clearTimeout(id);
    },
    [mode.liveFrom],
  );

  return useSyncExternalStore(
    subscribe,
    () => effectiveStatus(mode),
    () => mode.status,
  );
}
