import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Activity } from "lucide-react";
import PageHeader from "@/components/page-header";
import SectionHeading from "@/components/section-heading";
import Reveal from "@/components/reveal";
import NetworkOverview from "@/components/network-overview";
import ServerStatusList from "@/components/server-status-list";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.status" });
  return { title: `${t("title")} — WildMine`, description: t("lead") };
}

export default async function StatusPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.status");

  return (
    <div className="mc-shell py-10 sm:py-14">
      <PageHeader
        eyebrow={t("eyebrow")}
        title={t("title")}
        lead={t("lead")}
        icon={Activity}
      />

      <section className="mt-10">
        <Reveal>
          <NetworkOverview />
        </Reveal>
      </section>

      <section className="mt-16">
        <Reveal>
          <SectionHeading
            eyebrow={t("servers.eyebrow")}
            title={t("servers.title")}
            lead={t("servers.lead")}
          />
          <ServerStatusList />
        </Reveal>
      </section>
    </div>
  );
}
