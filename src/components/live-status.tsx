"use client";

import { useTranslations } from "next-intl";
import { useNetworkStatus } from "./use-network-status";

/**
 * One line under the hero's join buttons: a dot and a sentence. It used to be
 * a third panel in that row, which made the most important action on the page
 * — copy the IP — compete with a read-only readout.
 */
export default function LiveStatus() {
  const t = useTranslations("hero");
  const status = useNetworkStatus();

  const maintenance = status?.maintenance.active ?? false;
  const online = (status?.online ?? false) && !maintenance;

  function detail() {
    if (status === null) return null;
    if (maintenance) {
      return status.maintenance.remaining
        ? `${t("maintenance")} · ${status.maintenance.remaining}`
        : t("maintenance");
    }
    if (!online) return t("offline");
    return `${t("online")} · ${status.players.online}/${status.players.max} ${t("players")}`;
  }

  const text = detail();

  return (
    <p className="mt-4 flex min-h-5 items-center gap-2.5 text-sm">
      {text && (
        <>
          <span
            aria-hidden
            className={`h-2 w-2 flex-none ${
              maintenance ? "bg-accent" : online ? "bg-primary" : "bg-faint"
            }`}
          />
          <span className="text-muted">{text}</span>
        </>
      )}
    </p>
  );
}
