"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import LanguageSwitcher from "./language-switcher";
import NavLivePill from "./nav-live-pill";
import { site, seasonLogo, gameModes, featuredMode, type Season } from "@/lib/site";
import { getIcon } from "@/lib/icons";

const modeIconKeys: Record<string, string> = {
  wildsmp: "trees",
  wildblock: "box",
  wildcity: "building",
  wildattack: "swords",
};

const allModes = [featuredMode, ...gameModes];

export default function Navbar({ season }: { season: Season }) {
  const t = useTranslations("nav");
  const tm = useTranslations("modes");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [modesOpen, setModesOpen] = useState(false);

  /** Navigating always dismisses whichever menu the link came from. */
  function closeMenus() {
    setOpen(false);
    setModesOpen(false);
  }

  const links = [
    { href: "/status", label: t("status") },
    { href: "/livemap", label: t("livemap") },
    { href: "/wiki", label: t("wiki") },
  ];

  const modesActive = pathname.startsWith("/modes");

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <nav className="mc-shell flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="flex flex-shrink-0 items-center gap-2.5 font-extrabold tracking-tight"
        >
          <Image
            src={seasonLogo[season]}
            alt={site.name}
            width={32}
            height={32}
            className="h-8 w-8 object-contain"
            priority
          />
          <span className="text-lg">
            <span className="text-primary">WILD</span>MINE
          </span>
        </Link>

        <div className="hidden h-full items-stretch lg:flex">
          <NavItem href="/" active={pathname === "/"} onClick={closeMenus}>
            {t("home")}
          </NavItem>

          {/* Game modes dropdown */}
          <div
            className="relative flex items-stretch"
            onMouseEnter={() => setModesOpen(true)}
            onMouseLeave={() => setModesOpen(false)}
          >
            <button
              type="button"
              onClick={() => setModesOpen((value) => !value)}
              aria-expanded={modesOpen}
              className={`relative flex cursor-pointer items-center gap-1.5 px-4 text-sm font-semibold transition-colors ${
                modesActive
                  ? "text-foreground"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {tm("eyebrow")}
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 ${
                  modesOpen ? "rotate-180" : ""
                }`}
              />
              {modesActive && <ActiveBar />}
            </button>

            {modesOpen && (
              <div className="absolute left-0 top-full w-72 pt-px">
                <div className="mc-panel bg-surface p-1.5 shadow-xl shadow-black/30">
                  {allModes.map((mode) => {
                    const Icon = getIcon(modeIconKeys[mode.slug] ?? "box");
                    const active = pathname === `/modes/${mode.slug}`;
                    return (
                      <Link
                        key={mode.slug}
                        href={`/modes/${mode.slug}`}
                        onClick={closeMenus}
                        className={`flex items-center gap-3 px-3 py-2.5 text-sm transition-colors ${
                          active
                            ? "bg-surface-2 text-primary"
                            : "text-muted hover:bg-surface-2 hover:text-foreground"
                        }`}
                      >
                        <span className="mc-panel flex h-7 w-7 flex-shrink-0 items-center justify-center bg-surface-2 text-primary">
                          <Icon className="h-3.5 w-3.5" />
                        </span>
                        <span className="min-w-0 flex-1 font-semibold">
                          {tm(`${mode.slug}.title`)}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {links.map((link) => (
            <NavItem
              key={link.href}
              href={link.href}
              active={pathname.startsWith(link.href)}
              onClick={closeMenus}
            >
              {link.label}
            </NavItem>
          ))}
        </div>

        <div className="hidden items-center gap-2.5 lg:flex">
          <NavLivePill />
          <LanguageSwitcher />
        </div>

        <button
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="mc-btn mc-btn-ghost cursor-pointer p-2 lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="mc-shell py-4">
            <div className="flex flex-col">
              <MobileLink href="/" onClick={closeMenus}>
                {t("home")}
              </MobileLink>
              {links.map((link) => (
                <MobileLink
                  key={link.href}
                  href={link.href}
                  onClick={closeMenus}
                >
                  {link.label}
                </MobileLink>
              ))}
            </div>

            <p className="mc-eyebrow mb-2 mt-5">{tm("eyebrow")}</p>
            <div className="flex flex-col">
              {allModes.map((mode) => {
                const Icon = getIcon(modeIconKeys[mode.slug] ?? "box");
                return (
                  <Link
                    key={mode.slug}
                    href={`/modes/${mode.slug}`}
                    onClick={closeMenus}
                    className="flex items-center gap-3 border-b border-border/60 py-2.5 text-sm font-semibold text-muted transition-colors hover:text-foreground"
                  >
                    <Icon className="h-4 w-4 flex-shrink-0 text-primary" />
                    <span className="flex-1">{tm(`${mode.slug}.title`)}</span>
                  </Link>
                );
              })}
            </div>

            <div className="mt-5 flex items-center gap-2.5">
              <NavLivePill />
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

/** The square block under the current page — a pixel underline, not a pill. */
function ActiveBar() {
  return (
    <span
      aria-hidden
      className="absolute inset-x-3 bottom-0 h-0.5 bg-primary"
    />
  );
}

function NavItem({
  href,
  active,
  onClick,
  children,
}: {
  href: string;
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`relative flex items-center px-4 text-sm font-semibold transition-colors ${
        active ? "text-foreground" : "text-muted hover:text-foreground"
      }`}
    >
      {children}
      {active && <ActiveBar />}
    </Link>
  );
}

function MobileLink({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="border-b border-border/60 py-2.5 text-sm font-semibold text-muted transition-colors hover:text-foreground"
    >
      {children}
    </Link>
  );
}
