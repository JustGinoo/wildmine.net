import { getTranslations } from "next-intl/server";
import { Compass, Home } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { allModes } from "@/lib/site";

/**
 * Shown for an unknown page and for a mode slug that does not exist. It offers
 * the way out that a visitor actually wants: the list of game modes.
 */
export default async function NotFound() {
  const t = await getTranslations();

  return (
    <div className="mc-shell mc-shell-narrow py-20 sm:py-28">
      <div className="mc-panel mc-ticks bg-surface p-8 sm:p-12">
        <p className="mc-eyebrow">404</p>

        <h1 className="t-h1 mt-4 text-foreground">
          {t("pages.notFound.title")}
        </h1>
        <p className="mt-4 max-w-xl text-muted">{t("pages.notFound.lead")}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/"
            className="mc-btn mc-btn-primary inline-flex items-center gap-2 px-5 py-3 text-sm font-bold"
          >
            <Home className="h-4 w-4" />
            {t("nav.home")}
          </Link>
          <Link
            href="/wiki"
            className="mc-btn mc-btn-ghost inline-flex items-center gap-2 px-5 py-3 text-sm font-bold"
          >
            <Compass className="h-4 w-4" />
            {t("nav.wiki")}
          </Link>
        </div>

        <div className="mt-10 border-t border-border pt-6">
          <p className="mc-eyebrow mb-3">{t("modes.eyebrow")}</p>
          <div className="flex flex-wrap gap-2">
            {allModes.map((mode) => (
              <Link
                key={mode.slug}
                href={`/modes/${mode.slug}`}
                className="mc-panel bg-surface-2 px-3 py-2 text-sm font-semibold text-muted transition-colors hover:border-primary hover:text-primary"
              >
                {t(`modes.${mode.slug}.title`)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
