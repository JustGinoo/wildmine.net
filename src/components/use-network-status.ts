"use client";

import { useEffect, useState } from "react";
import { emptyStatus, type StatusResponse } from "@/lib/status";

/**
 * Polls /api/status. One shared hook so hero, tiles and server list all use
 * the same request shape instead of three slightly different fetch loops.
 * Returns null while the first request is still running.
 */
export function useNetworkStatus(intervalMs = 30000) {
  const [status, setStatus] = useState<StatusResponse | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch("/api/status");
        const data: StatusResponse = await res.json();
        if (!cancelled) setStatus(data);
      } catch {
        if (!cancelled) setStatus(emptyStatus);
      }
    }

    load();
    const interval = setInterval(load, intervalMs);
    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, [intervalMs]);

  return status;
}
