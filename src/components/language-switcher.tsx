"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="mc-panel flex items-center bg-surface p-0.5 text-xs font-bold">
      {routing.locales.map((l) => (
        <button
          key={l}
          onClick={() => router.replace(pathname, { locale: l })}
          aria-current={locale === l}
          className={`cursor-pointer px-2.5 py-1.5 font-mono uppercase tracking-wide transition-colors ${
            locale === l
              ? "mc-btn-primary"
              : "text-muted hover:text-foreground"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
