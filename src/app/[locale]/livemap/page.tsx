import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Map as MapIcon } from "lucide-react";
import { liveMaps } from "@/data/livemaps";
import type { Locale } from "@/data/rules/types";
import LiveMapFrame from "@/components/live-map";
import PageHeader from "@/components/page-header";
import Reveal from "@/components/reveal";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.livemap" });
  return { title: `${t("title")} — WildMine`, description: t("lead") };
}

export default async function LiveMapPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const lang: Locale = locale === "en" ? "en" : "de";
  const t = await getTranslations("pages.livemap");

  return (
    <div className="mc-shell py-10 sm:py-14">
      <PageHeader
        eyebrow={t("eyebrow")}
        title={t("title")}
        lead={t("lead")}
        icon={MapIcon}
      />

      <div className="mt-10">
        {liveMaps.length === 0 ? (
          <div className="mc-panel bg-surface p-8 text-center text-sm text-muted">
            {t("empty")}
          </div>
        ) : (
          <div className="flex flex-col gap-8">
            {liveMaps.map((map) => (
              <Reveal key={map.id}>
                <LiveMapFrame map={map} locale={lang} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
