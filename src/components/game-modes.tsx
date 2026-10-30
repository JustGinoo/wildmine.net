import { Trees, Box, Building2, Swords, ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { gameModes, featuredMode, modeServer, type ModeStatus } from "@/lib/site";
import { modeImage } from "@/lib/mode-image";
import ModePlayers from "./mode-players";
import ModeStatusBadge from "./mode-status";
import ModeTagline from "./mode-tagline";

const modeIcons = {
  wildsmp: Trees,
  wildblock: Box,
  wildcity: Building2,
  wildattack: Swords,
};

export default async function GameModes() {
  const t = await getTranslations("modes");
  const FeaturedIcon = modeIcons[featuredMode.slug as keyof typeof modeIcons];
  const featuredPhoto = modeImage(featuredMode.slug);

  /** A mode may override the generic status wording with its own. */
  const statusLabel = (slug: string, status: ModeStatus) =>
    t.has(`${slug}.statusLabel`)
      ? t(`${slug}.statusLabel`)
      : t(`status.${status}`);

  /** Only given when a mode words its tagline differently once it is live. */
  const liveTagline = (slug: string) =>
    t.has(`${slug}.taglineLive`) ? t(`${slug}.taglineLive`) : undefined;

  return (
    <div className="flex flex-col gap-5">
      {/* The main mode gets the full width and the corner marks */}
      <Link
        href={`/modes/${featuredMode.slug}`}
        className="mc-card mc-ticks flex flex-col gap-6 overflow-hidden bg-surface p-7 sm:flex-row sm:items-center sm:gap-8 sm:p-10"
      >
        {featuredPhoto && (
          <span
            data-photo
            aria-hidden
            className="photo-layer"
            style={{ backgroundImage: `url(${featuredPhoto})` }}
          />
        )}

        <span className="mc-btn mc-btn-primary relative z-10 flex h-20 w-20 flex-none items-center justify-center sm:h-24 sm:w-24">
          <FeaturedIcon className="h-10 w-10 sm:h-12 sm:w-12" />
        </span>

        <span className="relative z-10 min-w-0 flex-1">
          <span className="mb-2.5 flex flex-wrap items-center gap-2">
            <span className="bg-accent px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-background">
              {t.has(`${featuredMode.slug}.badge`)
                ? t(`${featuredMode.slug}.badge`)
                : t("eventBadge")}
            </span>
            <ModeStatusBadge
              mode={featuredMode}
              liveLabel={t("status.live")}
              pendingLabel={statusLabel(featuredMode.slug, featuredMode.status)}
            />
          </span>

          <span className="block text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
            {t(`${featuredMode.slug}.title`)}
          </span>
          <span className="mt-1 block text-sm text-muted">
            <ModeTagline
              mode={featuredMode}
              pending={t(`${featuredMode.slug}.tagline`)}
              live={liveTagline(featuredMode.slug)}
            />
          </span>
          <span className="mt-2.5 block">
            <ModePlayers server={modeServer(featuredMode)} />
          </span>
        </span>

        <span className="mc-btn mc-btn-primary relative z-10 flex flex-none items-center gap-2 self-start px-5 py-2.5 text-sm font-bold sm:self-auto">
          {t("cta")}
          <ArrowRight className="h-4 w-4" />
        </span>
      </Link>

      <div className="mc-stagger grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {gameModes.map((mode) => {
          const { slug, status } = mode;
          const Icon = modeIcons[slug as keyof typeof modeIcons];
          return (
            <Link
              key={slug}
              href={`/modes/${slug}`}
              className="mc-card flex flex-col bg-surface p-6"
            >
              <span className="mb-5 flex items-start justify-between gap-3">
                <span className="mc-btn mc-btn-primary flex h-11 w-11 flex-none items-center justify-center">
                  <Icon className="h-5 w-5" />
                </span>
                <ModeStatusBadge
                  mode={mode}
                  liveLabel={t("status.live")}
                  pendingLabel={statusLabel(slug, status)}
                />
              </span>

              <span className="t-h3 block text-foreground">
                {t(`${slug}.title`)}
              </span>
              <span className="mt-1.5 block text-sm text-muted">
                <ModeTagline
                  mode={mode}
                  pending={t(`${slug}.tagline`)}
                  live={liveTagline(slug)}
                />
              </span>

              <span className="mt-3 block min-h-5">
                <ModePlayers server={modeServer(mode)} />
              </span>

              <span className="mt-6 flex items-center gap-1.5 border-t border-border pt-4 text-sm font-bold text-primary">
                {t("cta")}
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
