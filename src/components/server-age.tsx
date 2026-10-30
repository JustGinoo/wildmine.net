"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { site } from "@/lib/site";

function diffParts(from: Date, to: Date) {
  let ms = to.getTime() - from.getTime();
  const days = Math.floor(ms / 86_400_000);
  ms -= days * 86_400_000;
  const hours = Math.floor(ms / 3_600_000);
  ms -= hours * 3_600_000;
  const minutes = Math.floor(ms / 60_000);
  ms -= minutes * 60_000;
  const seconds = Math.floor(ms / 1000);
  return { days, hours, minutes, seconds };
}

/** Running clock since launch, shown in the footer. */
export default function ServerAge() {
  const t = useTranslations("serverAge");
  const [parts, setParts] = useState<ReturnType<typeof diffParts> | null>(null);

  useEffect(() => {
    const launch = new Date(site.launchDate);
    const tick = () => setParts(diffParts(launch, new Date()));
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      title={t("label")}
      className="mc-panel inline-flex items-center gap-2.5 bg-surface px-3.5 py-2"
    >
      <span aria-hidden className="h-2 w-2 flex-none bg-primary" />
      <span className="font-mono text-xs tabular-nums text-foreground">
        {parts
          ? `${parts.days} ${t("days")} ${String(parts.hours).padStart(2, "0")}:${String(
              parts.minutes,
            ).padStart(2, "0")}:${String(parts.seconds).padStart(2, "0")}`
          : "…"}
      </span>
    </div>
  );
}
