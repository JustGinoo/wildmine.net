import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { impressum } from "@/data/legal";
import LegalDocumentView from "@/components/legal-document";

export const metadata: Metadata = {
  title: `${impressum.title} — WildMine`,
  description: "Anbieterkennzeichnung nach § 5 DDG für WildMine.net.",
};

export default async function ImpressumPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <LegalDocumentView document={impressum} locale={locale} />;
}
