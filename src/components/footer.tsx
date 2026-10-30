import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { site, getSeason, seasonLogo, allModes } from "@/lib/site";
import ServerAge from "./server-age";

/** Own pages since the legal texts moved onto this site. */
const legalLinks = [
  { key: "imprint", href: "/impressum" },
  { key: "terms", href: "/agb" },
  { key: "privacy", href: "/datenschutz" },
] as const;

const navLinks = ["status", "livemap", "wiki"] as const;

/** Live banner from Best Minecraft Serverlist: players, votes, rank and IP. */
const serverlistBanner = (locale: string) =>
  `https://best-minecraft-serverlist.com/embed/widget/wildmine-net?size=banner&style=welt&show=players%2Cvotes%2Crank%2Cip&lang=${locale === "en" ? "en" : "de"}`;

export default async function Footer() {
  const t = await getTranslations();
  const locale = await getLocale();
  const season = getSeason();

  return (
    <footer className="mt-auto border-t border-border bg-surface/40">
      <div className="mc-shell grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2.5 font-extrabold">
            <Image
              src={seasonLogo[season]}
              alt={site.name}
              width={28}
              height={28}
              className="h-7 w-7 object-contain"
            />
            <span>
              <span className="text-primary">WILD</span>MINE
            </span>
          </div>

          <p className="mt-4 max-w-xs text-sm text-muted">
            {t("footer.tagline")}
          </p>

          <div className="mt-5">
            <ServerAge />
            <p className="mt-2 text-xs text-faint">{t("serverAge.label")}</p>
          </div>

          <a
            href={site.discordUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mc-btn mc-btn-ghost mt-5 inline-flex items-center gap-2 px-4 py-2 text-sm font-bold"
          >
            <MessageCircle className="h-4 w-4" />
            {t("community.cta")}
          </a>
        </div>

        <FooterColumn title={t("footer.columns.nav")}>
          <FooterLink href="/">{t("nav.home")}</FooterLink>
          {navLinks.map((key) => (
            <FooterLink key={key} href={`/${key}`}>
              {t(`nav.${key}`)}
            </FooterLink>
          ))}
        </FooterColumn>

        <FooterColumn title={t("modes.eyebrow")}>
          {allModes.map((mode) => (
            <FooterLink key={mode.slug} href={`/modes/${mode.slug}`}>
              {t(`modes.${mode.slug}.title`)}
            </FooterLink>
          ))}
        </FooterColumn>

        <FooterColumn title={t("footer.columns.legal")}>
          <FooterExternal href={site.storeUrl}>
            {t("footer.store")}
          </FooterExternal>
          {legalLinks.map((link) => (
            <FooterLink key={link.key} href={link.href}>
              {t(`footer.legal.${link.key}`)}
            </FooterLink>
          ))}
        </FooterColumn>
      </div>

      <div className="mc-shell pb-8">
        <iframe
          src={serverlistBanner(locale)}
          width={728}
          height={90}
          title="WildMine.net – Best Minecraft Serverlist"
          loading="lazy"
          className="mx-auto block h-[90px] w-[728px] max-w-full border-0"
          // Third-party widget on its own origin: may load its assets, run scripts and open links in a new tab, but never navigate this page
          sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="border-t border-border/70">
        <div className="mc-shell flex flex-wrap items-center justify-between gap-2 py-5 text-xs text-faint">
          <p>
            &copy; {new Date().getFullYear()} {site.name}
          </p>
          <p>{t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="mc-eyebrow mb-4">{title}</p>
      <ul className="flex flex-col gap-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm text-muted transition-colors hover:text-primary"
      >
        {children}
      </Link>
    </li>
  );
}

function FooterExternal({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-muted transition-colors hover:text-primary"
      >
        {children}
      </a>
    </li>
  );
}
