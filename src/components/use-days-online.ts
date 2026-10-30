"use client";

import { useSyncExternalStore } from "react";
import { site } from "@/lib/site";

const MS_PER_DAY = 86_400_000;

/** The count only changes once a day, so there is nothing to subscribe to. */
const noSubscribe = () => () => {};

function daysSinceLaunch() {
  const launched = new Date(site.launchDate).getTime();
  return Math.max(0, Math.floor((Date.now() - launched) / MS_PER_DAY));
}

/**
 * Days since launch, resolved on the client only — the server snapshot is null
 * so a clock difference between server and browser cannot turn into a
 * hydration mismatch. Read from outside React rather than set in an effect.
 */
export function useDaysOnline(): number | null {
  return useSyncExternalStore(noSubscribe, daysSinceLaunch, () => null);
}
