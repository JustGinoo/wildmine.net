import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { BookOpen } from "lucide-react";
import { contentModes } from "@/lib/site";
import { getModeWiki, wikiPageEntries } from "@/data/wiki";
import type { Locale } from "@/data/rules/types";
import WikiGrid from "@/components/wiki-grid";
import PageHeader from "@/components/page-header";
import Reveal from "@/components/reveal";

// Modes without wiki entries would only ever filter down to nothing
const modeSlugs = contentModes
  .map((mode) => mode.slug)
  .filter((slug) => getModeWiki(slug).length > 0);

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.wiki" });
  return { title: `${t("title")} — WildMine`, description: t("lead") };
}

export default async function WikiPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const lang: Locale = locale === "en" ? "en" : "de";
  const t = await getTranslations("pages.wiki");

  return (
    <div className="mc-shell py-10 sm:py-14">
      <PageHeader
        eyebrow={t("eyebrow")}
        title={t("title")}
        lead={t("lead")}
        icon={BookOpen}
      />

      <div className="mt-10">
        <Reveal>
          <WikiGrid
            entries={wikiPageEntries}
            locale={lang}
            columns={2}
            modeSlugs={modeSlugs}
            showModeBadges
          />
        </Reveal>
      </div>
    </div>
  );
}
