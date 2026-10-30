import type { Metadata } from "next";
import { Sora, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { getSeason } from "@/lib/site";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SeasonalOverlay from "@/components/seasonal-overlay";
import ImageGuard from "@/components/image-guard";
import "../globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "hero" });
  return {
    metadataBase: new URL("https://wildmine.net"),
    title: "WildMine — WildMine.net",
    description: t("tagline"),
    openGraph: {
      title: "WildMine — WildMine.net",
      description: t("tagline"),
      siteName: "WildMine",
      url: `https://wildmine.net/${locale}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "WildMine — WildMine.net",
      description: t("tagline"),
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  const season = getSeason();

  return (
    <html
      lang={locale}
      data-season={season}
      className={`${sora.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider>
          <SeasonalOverlay season={season} />
          <ImageGuard />
          <Navbar season={season} />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
