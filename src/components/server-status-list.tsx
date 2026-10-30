"use client";

import { useTranslations } from "next-intl";
import { Activity, Users } from "lucide-react";
import { useNetworkStatus } from "./use-network-status";
import type { StatusServer } from "@/lib/status";

const stateStyles: Record<StatusServer["state"], string> = {
  ONLINE: "bg-primary",
  MAINTENANCE: "bg-accent",
  OFFLINE: "bg-faint",
};

function ServerRow({ server }: { server: StatusServer }) {
  const t = useTranslations("serverStatus");

  return (
    <li className="flex flex-wrap items-center justify-between gap-3 bg-surface px-4 py-3.5 sm:px-5">
      <div className="flex items-center gap-3">
        <span
          className={`h-2.5 w-2.5 flex-none ${stateStyles[server.state]}`}
          aria-hidden
        />
        <div className="leading-tight">
          <p className="font-semibold text-foreground">{server.display}</p>
          <p className="text-xs text-muted">
            {server.state === "ONLINE"
              ? t("online")
              : server.state === "MAINTENANCE"
                ? t("maintenance")
                : t("offline")}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4 font-mono text-sm tabular-nums text-muted">
        {server.state === "ONLINE" && (
          <>
            <span className="flex items-center gap-1.5" title={t("players")}>
              <Users className="h-3.5 w-3.5" />
              {server.online}
            </span>
            {server.tps !== null && (
              <span className="flex items-center gap-1.5" title={t("tps")}>
                <Activity className="h-3.5 w-3.5" />
                {server.tps.toFixed(1)}
              </span>
            )}
            {server.queue > 0 && (
              <span className="text-primary" title={t("queue")}>
                +{server.queue}
              </span>
            )}
          </>
        )}
      </div>
    </li>
  );
}

export default function ServerStatusList() {
  const t = useTranslations("serverStatus");
  const status = useNetworkStatus(20000);

  if (status === null) {
    return (
      <p className="mc-panel bg-surface p-8 text-center text-sm text-muted">
        {t("loading")}
      </p>
    );
  }

  if (status.servers.length === 0) {
    return (
      <p className="mc-panel bg-surface p-8 text-center text-sm text-muted">
        {t("unavailable")}
      </p>
    );
  }

  return (
    <div className="mc-panel bg-border">
      {status.maintenance.active && (
        <p className="mb-px border-l-2 border-accent bg-surface px-4 py-3 text-sm text-accent sm:px-5">
          {status.maintenance.remaining
            ? t("networkMaintenanceUntil", {
                remaining: status.maintenance.remaining,
              })
            : t("networkMaintenance")}
        </p>
      )}

      <ul className="flex flex-col gap-px">
        {status.servers.map((server) => (
          <ServerRow key={server.name} server={server} />
        ))}
      </ul>
    </div>
  );
}
