import { getTranslations } from "next-intl/server";
import { Map as MapIcon } from "lucide-react";
import { pick, type Locale } from "@/data/rules/types";
import type { LiveMap } from "@/data/livemaps";
import { modeImage } from "@/lib/mode-image";
import MapEmbed from "./map-embed";

/**
 * Embeds one live map. The iframe is the real map application, so panning and
 * zooming work exactly as they do on the map's own page.
 */
export default async function LiveMapFrame({
  map,
  locale,
  /** Shorter frame for a mode page, where the map is one section among many. */
  compact = false,
}: {
  map: LiveMap;
  locale: Locale;
  compact?: boolean;
}) {
  const t = await getTranslations("ui");

  return (
    <div className="mc-panel bg-surface">
      <div className="flex items-center gap-3 border-b border-border p-4">
        <div className="flex min-w-0 items-center gap-3">
          <span className="mc-btn mc-btn-primary flex h-9 w-9 flex-none items-center justify-center">
            <MapIcon className="h-4.5 w-4.5" />
          </span>
          <div className="min-w-0">
            <p className="font-bold text-foreground">
              {pick(map.title, locale)}
            </p>
            <p className="truncate text-xs text-muted">
              {pick(map.summary, locale)}
            </p>
          </div>
        </div>
      </div>

      <div
        className={`relative w-full ${compact ? "h-[clamp(320px,55vh,560px)]" : "h-[clamp(380px,72vh,860px)]"}`}
      >
        <MapEmbed
          src={map.path}
          title={pick(map.title, locale)}
          preview={map.mode ? modeImage(map.mode) : null}
          loadLabel={t("mapLoad")}
          loadingLabel={t("mapLoading")}
        />
      </div>
    </div>
  );
}
