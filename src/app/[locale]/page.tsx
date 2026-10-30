import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  Zap,
  Scale,
  PartyPopper,
  ShieldCheck,
  Gamepad2,
  Users,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { Link } from "@/i18n/navigation";
import { site, getSeason, seasonLogo, seasonBackground } from "@/lib/site";
import { networkFeatures } from "@/data/wiki";
import type { Locale } from "@/data/rules/types";
import CopyIp from "@/components/copy-ip";
import LiveStatus from "@/components/live-status";
import SectionHeading from "@/components/section-heading";
import GameModes from "@/components/game-modes";
import DiscordWidget from "@/components/discord-widget";
import StatTiles from "@/components/stat-tiles";
import PlaytimeLeaderboard from "@/components/playtime-leaderboard";
import TopPlaytime from "@/components/top-playtime";
import WikiGrid from "@/components/wiki-grid";
import Reveal from "@/components/reveal";

const featureIcons = {
  performance: Zap,
  economy: Scale,
  events: PartyPopper,
  anticheat: ShieldCheck,
  crossplay: Gamepad2,
  community: Users,
};

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const lang: Locale = locale === "en" ? "en" : "de";
  const t = await getTranslations();
  const season = getSeason();
  const featureKeys = Object.keys(featureIcons) as (keyof typeof featureIcons)[];

  return (
    <div>
      {/* ---- Hero -------------------------------------------------------- */}
      <section className="relative overflow-hidden border-b border-border">
        <div
          data-photo
          aria-hidden
          className="hero-bg"
          style={{ backgroundImage: `url(${seasonBackground[season]})` }}
        />

        <div className="mc-shell relative z-10 pb-14 pt-16 sm:pb-20 sm:pt-24">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            {/* Who we are and how to get in */}
            <div className="mc-intro lg:col-span-7">
              <p className="mc-eyebrow">{t("hero.eyebrow")}</p>

              <div className="mt-5 flex items-center gap-4 sm:gap-5">
                <Image
                  src={seasonLogo[season]}
                  alt={site.name}
                  width={160}
                  height={160}
                  className="h-16 w-16 flex-none object-contain sm:h-24 sm:w-24"
                  priority
                />
                <h1 className="t-display text-foreground">
                  WILD<span className="text-primary">MINE</span>
                </h1>
              </div>

              <p className="mt-6 max-w-xl text-lg text-muted">
                {t("hero.tagline")}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <CopyIp value={site.javaIp} label="Java" variant="primary" />
                <CopyIp value={site.bedrockIp} label="Bedrock" />
              </div>

              <LiveStatus />
            </div>

            {/* Proof that somebody is actually in there */}
            <div
              className="mc-intro flex flex-col gap-4 lg:col-span-5"
              style={{ ["--base" as string]: "180ms" }}
            >
              <DiscordWidget />
              <TopPlaytime />
            </div>
          </div>

          {/* Numbers, docked to the foot of the hero instead of taking a
              scroll stop of their own */}
          <div className="mt-14 sm:mt-20">
            <StatTiles />
          </div>
        </div>
      </section>

      {/* ---- Game modes -------------------------------------------------- */}
      <section id="spielmodi" className="mc-band scroll-mt-16">
        <div className="mc-shell">
          <Reveal>
            <SectionHeading
              eyebrow={t("modes.eyebrow")}
              title={t("modes.title")}
              lead={t("modes.lead")}
            />
            <GameModes />
          </Reveal>
        </div>
      </section>

      {/* ---- Why us ------------------------------------------------------ */}
      <section className="mc-band">
        <div className="mc-shell">
          <Reveal>
            <SectionHeading
              eyebrow={t("features.eyebrow")}
              title={t("features.title")}
              lead={t("features.lead")}
            />

            <div className="mc-panel mc-stagger grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
              {featureKeys.map((key) => {
                const Icon = featureIcons[key];
                return (
                  <div key={key} className="bg-surface p-6 sm:p-7">
                    <span className="mc-btn mc-btn-primary mb-5 flex h-10 w-10 items-center justify-center">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="t-h3 mb-2 text-foreground">
                      {t(`features.items.${key}.title`)}
                    </h3>
                    <p className="text-sm text-muted">
                      {t(`features.items.${key}.desc`)}
                    </p>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---- Wiki + leaderboard side by side ------------------------------ */}
      <section className="mc-band">
        <div className="mc-shell grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionHeading
                eyebrow={t("networkWiki.eyebrow")}
                title={t("networkWiki.title")}
                lead={t("networkWiki.lead")}
              />

              <WikiGrid entries={networkFeatures} locale={lang} columns={1} />

              <Link
                href="/wiki"
                className="mc-btn mc-btn-ghost mt-6 inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold"
              >
                {t("networkWiki.cta")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <div id="playtime" className="scroll-mt-24 lg:col-span-5">
            <Reveal>
              <SectionHeading
                eyebrow={t("playtimeLeaderboard.eyebrow")}
                title={t("playtimeLeaderboard.title")}
                lead={t("playtimeLeaderboard.subtitle")}
              />
              <PlaytimeLeaderboard showHeader={false} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---- Community --------------------------------------------------- */}
      <section className="mc-band">
        <div className="mc-shell">
          <Reveal>
            <div className="mc-panel mc-ticks bg-surface px-6 py-12 text-center sm:px-12 sm:py-16">
              <p className="mc-eyebrow justify-center">{t("community.eyebrow")}</p>
              <h2 className="t-h2 mx-auto mt-4 max-w-xl text-foreground">
                {t("community.title")}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted">
                {t("community.lead")}
              </p>

              <div className="mt-7 flex flex-wrap justify-center gap-2">
                {(["active", "support", "updates", "events"] as const).map(
                  (key) => (
                    <span
                      key={key}
                      className="mc-panel bg-surface-2 px-3 py-1.5 text-xs font-semibold text-muted"
                    >
                      {t(`community.tags.${key}`)}
                    </span>
                  ),
                )}
              </div>

              <a
                href={site.discordUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mc-btn mc-btn-primary mt-8 inline-flex items-center gap-2 px-8 py-3.5 font-bold"
              >
                <MessageCircle className="h-4 w-4" />
                {t("community.cta")}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
