"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { ChevronDown, Info, Search, TriangleAlert } from "lucide-react";
import { getIcon } from "@/lib/icons";
import {
  countRules,
  pick,
  type Locale,
  type RuleParagraph,
  type RuleSet,
} from "@/data/rules/types";

/** The paragraph shortcut bar only helps on long rulesets. */
const NAV_THRESHOLD = 6;

/** Wraps every occurrence of `query` in the text so hits are easy to spot. */
function Highlight({ text, query }: { text: string; query: string }) {
  if (!query) return <>{text}</>;

  const haystack = text.toLowerCase();
  const needle = query.toLowerCase();
  const parts: React.ReactNode[] = [];
  let cursor = 0;

  for (;;) {
    const at = haystack.indexOf(needle, cursor);
    if (at === -1) {
      parts.push(text.slice(cursor));
      break;
    }
    if (at > cursor) parts.push(text.slice(cursor, at));
    parts.push(
      <mark key={at} className="bg-primary/25 text-foreground">
        {text.slice(at, at + needle.length)}
      </mark>,
    );
    cursor = at + needle.length;
  }

  return <>{parts}</>;
}

export default function RulesView({
  set,
  locale,
  /** Paragraph numbers that start expanded. */
  defaultOpen = ["0"],
  /** Off where the page already states the ruleset's name above the view. */
  showHeading = true,
}: {
  set: RuleSet;
  locale: Locale;
  defaultOpen?: string[];
  showHeading?: boolean;
}) {
  const t = useTranslations("ui");
  const tm = useTranslations("modes");
  const [open, setOpen] = useState<string[]>(defaultOpen);
  const [query, setQuery] = useState("");

  const total = countRules(set);
  const needle = query.trim().toLowerCase();
  const searching = needle.length > 0;

  /** Paragraphs cut down to the rules that match, empty ones dropped. */
  const shown = useMemo<RuleParagraph[]>(() => {
    if (!needle) return set.paragraphs;

    return set.paragraphs.flatMap((paragraph) => {
      const titleHit = pick(paragraph.title, locale)
        .toLowerCase()
        .includes(needle);

      const items = paragraph.items.filter((item) => {
        const haystack = [
          item.ref,
          pick(item.text, locale),
          item.note ? pick(item.note, locale) : "",
          ...(item.modes ?? []),
        ]
          .join(" ")
          .toLowerCase();
        return haystack.includes(needle);
      });

      // A paragraph whose heading matches keeps all of its rules
      const kept = items.length > 0 ? items : titleHit ? paragraph.items : [];
      return kept.length > 0 ? [{ ...paragraph, items: kept }] : [];
    });
  }, [set.paragraphs, needle, locale]);

  const hits = shown.reduce((sum, paragraph) => sum + paragraph.items.length, 0);
  const allOpen = open.length === set.paragraphs.length;

  function toggle(num: string) {
    setOpen((current) =>
      current.includes(num)
        ? current.filter((entry) => entry !== num)
        : [...current, num],
    );
  }

  function jumpTo(num: string) {
    setQuery("");
    setOpen((current) => (current.includes(num) ? current : [...current, num]));
    document
      .getElementById(`${set.key}-${num}`)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div>
      {/* Toolbar: what this ruleset is, plus the tools to get around it */}
      <div className="mc-panel bg-surface p-5 sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-3">
          {showHeading ? (
            <div className="min-w-0">
              <h2 className="text-xl font-extrabold tracking-tight text-foreground">
                {pick(set.title, locale)}
              </h2>
              <p className="mt-1.5 max-w-2xl text-sm text-muted">
                {pick(set.scope, locale)}
              </p>
            </div>
          ) : (
            <span />
          )}
          <div className="flex flex-wrap gap-1.5">
            {set.draft && (
              <span className="border border-border bg-surface-2 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-muted">
                {t("draft")}
              </span>
            )}
            <span className="border border-border bg-surface-2 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-primary">
              {t("ruleCount", { count: total })}
            </span>
          </div>
        </div>

        <label className="mc-panel mt-5 flex items-center gap-2.5 bg-surface-2 px-3.5 py-2.5 transition-colors focus-within:border-primary">
          <Search className="h-4 w-4 flex-none text-primary" />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={t("searchRules")}
            className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-faint"
          />
          {searching && (
            <span className="flex-none whitespace-nowrap font-mono text-xs text-primary">
              {t("matchCount", { count: hits })}
            </span>
          )}
        </label>

        {set.notice && (
          <Callout
            tone="warning"
            title={t("importantNotice")}
            icon={<TriangleAlert className="h-4 w-4" />}
          >
            {pick(set.notice, locale)}
          </Callout>
        )}

        {set.hint && (
          <Callout
            tone="info"
            title={t("goodToKnow")}
            icon={<Info className="h-4 w-4" />}
          >
            {pick(set.hint, locale)}
          </Callout>
        )}

        {(set.paragraphs.length >= NAV_THRESHOLD || !searching) && (
          <div className="mt-5 flex flex-wrap items-center gap-1.5 border-t border-border pt-5">
            {set.paragraphs.length >= NAV_THRESHOLD &&
              set.paragraphs.map((paragraph) => (
                <button
                  key={paragraph.num}
                  type="button"
                  onClick={() => jumpTo(paragraph.num)}
                  title={pick(paragraph.title, locale)}
                  className="mc-btn mc-btn-ghost cursor-pointer px-2.5 py-1.5 font-mono text-xs font-bold"
                >
                  §{paragraph.num}
                </button>
              ))}

            {!searching && (
              <button
                type="button"
                onClick={() =>
                  setOpen(allOpen ? [] : set.paragraphs.map((item) => item.num))
                }
                className="ml-auto cursor-pointer text-xs font-bold text-muted transition-colors hover:text-primary"
              >
                {allOpen ? t("collapseAll") : t("expandAll")}
              </button>
            )}
          </div>
        )}
      </div>

      {/* Paragraphs */}
      {shown.length === 0 ? (
        <div className="mc-panel mt-3 bg-surface p-8 text-center text-sm text-muted">
          {t("noResults")}
        </div>
      ) : (
        <div className="mt-3 flex flex-col gap-2">
          {shown.map((paragraph) => {
            const Icon = getIcon(paragraph.icon);
            // While searching every remaining paragraph stays open
            const isOpen = searching || open.includes(paragraph.num);
            return (
              <div
                key={paragraph.num}
                id={`${set.key}-${paragraph.num}`}
                data-open={isOpen}
                className="mc-panel mc-tile scroll-mt-24 bg-surface"
              >
                <button
                  type="button"
                  onClick={() => toggle(paragraph.num)}
                  aria-expanded={isOpen}
                  disabled={searching}
                  className="flex w-full items-center gap-3.5 p-4 text-left enabled:cursor-pointer sm:p-5"
                >
                  <span className="mc-btn mc-btn-primary flex h-10 w-10 flex-none items-center justify-center">
                    <Icon className="h-5 w-5" />
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block font-mono text-xs font-bold text-primary">
                      §{paragraph.num}
                    </span>
                    <span className="block font-bold text-foreground">
                      <Highlight
                        text={pick(paragraph.title, locale)}
                        query={needle}
                      />
                    </span>
                  </span>

                  <span className="hidden font-mono text-xs text-faint sm:block">
                    {paragraph.items.length}
                  </span>
                  {!searching && (
                    <ChevronDown className="mc-chevron h-4 w-4 flex-none text-primary" />
                  )}
                </button>

                <div className="mc-collapse" data-open={isOpen}>
                  <div className="overflow-hidden">
                    <ul className="border-t border-border">
                      {paragraph.items.map((item) => (
                        <li
                          key={item.ref}
                          className="flex gap-3 border-b border-border/60 px-4 py-3 last:border-b-0 sm:px-5"
                        >
                          <span className="w-10 flex-none pt-px font-mono text-xs font-bold tabular-nums text-primary">
                            {item.ref}
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="block text-sm leading-relaxed text-muted">
                              {item.modes?.map((slug) => (
                                <span
                                  key={slug}
                                  className="mr-1.5 inline-block border border-border bg-surface-2 px-1.5 py-0.5 align-[1px] font-mono text-[10px] font-bold uppercase tracking-wider text-primary"
                                >
                                  {tm(`${slug}.title`)}
                                </span>
                              ))}
                              <Highlight
                                text={pick(item.text, locale)}
                                query={needle}
                              />
                            </span>
                            {item.note && (
                              <span className="mt-1.5 flex gap-1.5 text-xs leading-relaxed text-faint">
                                <span aria-hidden>›</span>
                                <Highlight
                                  text={pick(item.note, locale)}
                                  query={needle}
                                />
                              </span>
                            )}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <p className="mt-6 text-xs leading-relaxed text-faint">
        {t("rulesFooter")}
      </p>
    </div>
  );
}

function Callout({
  tone,
  title,
  icon,
  children,
}: {
  tone: "warning" | "info";
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  const warning = tone === "warning";
  return (
    <div
      className={`mt-4 border-l-2 bg-surface-2 p-4 ${
        warning ? "border-red-500" : "border-primary"
      }`}
    >
      <p
        className={`mb-1.5 flex items-center gap-2 text-sm font-bold ${
          warning ? "text-red-400" : "text-primary"
        }`}
      >
        {icon}
        {title}
      </p>
      <p className="text-sm text-muted">{children}</p>
    </div>
  );
}
