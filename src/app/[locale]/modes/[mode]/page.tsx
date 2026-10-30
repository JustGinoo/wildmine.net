import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  Map as MapIcon,
  Trees,
  Box,
  Building2,
  Swords,
  ArrowLeft,
  ArrowRight,
  MessageCircle,
  ScrollText,
  BookOpen,
} from "lucide-react";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { allModes, modeServer, site } from "@/lib/site";
import { getModeRuleSet } from "@/data/rules";
import { getModeWiki } from "@/data/wiki";
import { getModeMap } from "@/data/livemaps";
import { modeImage } from "@/lib/mode-image";
import { pick, type Locale } from "@/data/rules/types";
import RulesView from "@/components/rules-view";
import WikiGrid from "@/components/wiki-grid";
import ModeFacts from "@/components/mode-facts";
import ModePlayers from "@/components/mode-players";
import ModeStatusBadge from "@/components/mode-status";
import ModeTagline from "@/components/mode-tagline";
import LiveMapFrame from "@/components/live-map";
import SectionHeading from "@/components/section-heading";
import CopyIp from "@/components/copy-ip";
import Reveal from "@/components/reveal";

const modeIcons = {
  wildsmp: Trees,
  wildblock: Box,
  wildcity: Building2,
  wildattack: Swords,
};

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    allModes.map((mode) => ({ locale, mode: mode.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; mode: string }>;
}): Promise<Metadata> {
  const { locale, mode } = await params;
  if (!allModes.some((entry) => entry.slug === mode)) return {};

  const t = await getTranslations({ locale, namespace: "modes" });
  const title = `${t(`${mode}.title`)} — WildMine`;
  const description = t(`${mode}.description`);

  return {
    title,
    description,
    openGraph: { title, description, type: "article" },
  };
}

export default async function ModePage({
  params,
}: {
  params: Promise<{ locale: string; mode: string }>;
}) {
  const { locale, mode } = await params;
  setRequestLocale(locale);

  const gameMode = allModes.find((entry) => entry.slug === mode);
  if (!gameMode) notFound();

  const lang: Locale = locale === "en" ? "en" : "de";
  const t = await getTranslations("modes");
  const Icon = modeIcons[gameMode.slug as keyof typeof modeIcons];
  const ruleSet = getModeRuleSet(gameMode.slug);
  const wiki = getModeWiki(gameMode.slug);
  const liveMap = getModeMap(gameMode.slug);
  const photo = modeImage(gameMode.slug);

  const shortcuts = [
    liveMap && { href: "#livemap", label: t("sections.livemap"), Icon: MapIcon },
    wiki.length > 0 && {
      href: "#wiki",
      label: t("sections.wiki"),
      Icon: BookOpen,
    },
    ruleSet && {
      href: "#regelwerk",
      label: t("sections.rules"),
      Icon: ScrollText,
    },
  ].filter(Boolean) as { href: string; label: string; Icon: typeof MapIcon }[];

  return (
    <div className="mc-shell py-10 sm:py-14">
      <Link
        href="/"
        className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-muted transition-colors hover:text-primary"
      >
        <ArrowLeft className="h-4 w-4" />
        {t("back")}
      </Link>

      {/* ---- Masthead ---------------------------------------------------- */}
      <header className="mc-panel mc-ticks overflow-hidden bg-surface">
        {photo && (
          <div
            data-photo
            aria-hidden
            className="photo-layer"
            style={{ backgroundImage: `url(${photo})` }}
          />
        )}

        <div className="relative z-10 p-6 sm:p-10">
          <div className="mb-6 flex flex-wrap items-center gap-2.5">
            <ModeStatusBadge
              mode={gameMode}
              liveLabel={t("status.live")}
              className="px-2.5 py-1 text-[10px]"
              pendingLabel={
                t.has(`${gameMode.slug}.statusLabel`)
                  ? t(`${gameMode.slug}.statusLabel`)
                  : t(`status.${gameMode.status}`)
              }
            />
            <ModePlayers server={modeServer(gameMode)} />
          </div>

          <div className="flex items-start gap-5">
            <span className="mc-btn mc-btn-primary hidden h-16 w-16 flex-none items-center justify-center sm:flex">
              <Icon className="h-8 w-8" />
            </span>

            <div className="min-w-0">
              <h1 className="t-h1 text-foreground">
                {t(`${gameMode.slug}.title`)}
              </h1>
              <p className="mt-2 font-bold text-primary">
                <ModeTagline
                  mode={gameMode}
                  pending={t(`${gameMode.slug}.tagline`)}
                  live={
                    t.has(`${gameMode.slug}.taglineLive`)
                      ? t(`${gameMode.slug}.taglineLive`)
                      : undefined
                  }
                />
              </p>
            </div>
          </div>

          <p className="mt-6 max-w-3xl text-muted">
            {t(`${gameMode.slug}.description`)}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <CopyIp value={site.javaIp} label="Java" variant="primary" />
            <CopyIp value={site.bedrockIp} label="Bedrock" />
            <a
              href={site.discordUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mc-btn mc-btn-ghost inline-flex items-center gap-2 px-4 py-3 text-sm font-bold"
            >
              <MessageCircle className="h-4 w-4" />
              Discord
            </a>
          </div>
        </div>

        {/* Jump bar — only the sections this mode actually has */}
        {shortcuts.length > 0 && (
          <nav className="relative z-10 flex flex-col gap-px border-t border-border bg-border sm:flex-row">
            {shortcuts.map(({ href, label, Icon: ShortcutIcon }) => (
              <a
                key={href}
                href={href}
                className="flex flex-1 items-center gap-2.5 bg-surface px-5 py-3.5 text-sm font-bold text-muted transition-colors hover:bg-surface-2 hover:text-primary"
              >
                <ShortcutIcon className="h-4 w-4 flex-none text-primary" />
                {label}
                <ArrowRight className="ml-auto h-3.5 w-3.5 flex-none opacity-50" />
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* ---- Live map ---------------------------------------------------- */}
      {liveMap && (
        <section id="livemap" className="mt-16 scroll-mt-24 sm:mt-20">
          <Reveal>
            <SectionHeading
              eyebrow={t("sections.livemap")}
              title={t("liveMapTitle")}
            />
            <LiveMapFrame map={liveMap} locale={lang} compact />
          </Reveal>
        </section>
      )}

      {/* ---- Feature wiki ------------------------------------------------ */}
      {wiki.length > 0 && (
        <section id="wiki" className="mt-16 scroll-mt-24 sm:mt-20">
          <Reveal>
            <SectionHeading
              eyebrow={t("sections.wiki")}
              title={t("wikiTitle")}
              lead={t("wikiLead")}
            />

            <div className="grid gap-6 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <WikiGrid entries={wiki} locale={lang} columns={1} />
              </div>

              <aside className="flex flex-col gap-4 lg:col-span-4 lg:sticky lg:top-24 lg:self-start">
                <ModeFacts
                  slug={gameMode.slug}
                  locale={lang}
                  title={t("atAGlance")}
                />

                {ruleSet && (
                  <a
                    href="#regelwerk"
                    className="mc-card flex items-center gap-3 bg-surface p-5"
                  >
                    <span className="mc-btn mc-btn-ghost flex h-10 w-10 flex-none items-center justify-center text-primary">
                      <ScrollText className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-bold text-foreground">
                        {pick(ruleSet.title, lang)}
                      </span>
                      <span className="mt-0.5 block text-xs text-muted">
                        {t("modeRules")}
                      </span>
                    </span>
                  </a>
                )}
              </aside>
            </div>
          </Reveal>
        </section>
      )}

      {/* ---- Ruleset ----------------------------------------------------- */}
      {ruleSet && (
        <section id="regelwerk" className="mt-16 scroll-mt-24 sm:mt-20">
          <Reveal>
            <SectionHeading
              eyebrow={t("sections.rules")}
              title={pick(ruleSet.title, lang)}
              lead={pick(ruleSet.scope, lang)}
            />
            <RulesView set={ruleSet} locale={lang} showHeading={false} />
          </Reveal>
        </section>
      )}
    </div>
  );
}
