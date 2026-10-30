import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { datenschutz } from "@/data/legal";
import LegalDocumentView from "@/components/legal-document";

export const metadata: Metadata = {
  title: `${datenschutz.title} — WildMine`,
  description:
    "Welche Daten WildMine verarbeitet, wie lange sie gespeichert werden und welche Rechte du hast.",
};

export default async function DatenschutzPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <LegalDocumentView document={datenschutz} locale={locale} />;
}
