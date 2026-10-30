import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { agb } from "@/data/legal";
import LegalDocumentView from "@/components/legal-document";

export const metadata: Metadata = {
  title: `${agb.title} — WildMine`,
  description:
    "Die Nutzungsbedingungen für den Minecraft-Server WildMine und die damit verbundenen Dienste.",
};

export default async function AgbPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <LegalDocumentView document={agb} locale={locale} />;
}
