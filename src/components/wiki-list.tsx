"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { ChevronDown, Search, Terminal } from "lucide-react";
import { getIcon } from "@/lib/icons";

export type WikiItem = {
  id: string;
  icon: string;
  title: string;
  summary: string;
  body: string;
  steps: string[];
  facts: { label: string; value: string }[];
  commands: string[];
  modes: string[];
};

export type WikiChip = { value: string; label: string; ids: string[] };

const columnClasses: Record<1 | 2 | 3, string> = {
  1: "",
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
};

/**
 * Client half of the wiki: search, filter chips and the accordion. It only gets
 * already localised strings, so neither the wiki data nor the other language
 * end up in the browser bundle.
 */
export default function WikiList({
  entries,
  chips,
  columns,
  showControls,
}: {
  entries: WikiItem[];
  chips: WikiChip[];
  columns: 1 | 2 | 3;
  showControls: boolean;
}) {
  const t = useTranslations("ui");
  const [openIds, setOpenIds] = useState<string[]>([]);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");


  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase();
    const active = chips.find((chip) => chip.value === filter);

    return entries.filter((entry) => {
      if (filter !== "all" && !active?.ids.includes(entry.id)) return false;
      if (!needle) return true;
      const haystack = [
        entry.title,
        entry.summary,
        entry.body,
        ...entry.steps,
        ...entry.facts.flatMap((fact) => [fact.label, fact.value]),
        ...entry.commands,
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(needle);
    });
  }, [entries, chips, filter, query]);

  function toggle(id: string) {
    setOpenIds((current) =>
      current.includes(id)
        ? current.filter((entry) => entry !== id)
        : [...current, id],
    );
  }

  return (
    <div>
      {showControls && (
        <div className="mb-6 flex flex-col gap-3 lg:flex-row lg:items-center">
          <label className="mc-panel flex flex-1 items-center gap-2.5 bg-surface px-3.5 py-2.5 transition-colors focus-within:border-primary">
            <Search className="h-4 w-4 flex-none text-primary" />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={t("search")}
              className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-faint"
            />
          </label>

          <div className="flex flex-wrap gap-1.5">
            <FilterChip active={filter === "all"} onClick={() => setFilter("all")}>
              {t("all")}
            </FilterChip>
            {chips.map((chip) => (
              <FilterChip
                key={chip.value}
                active={filter === chip.value}
                onClick={() => setFilter(chip.value)}
              >
                {chip.label}
              </FilterChip>
            ))}
          </div>
        </div>
      )}

      {visible.length === 0 ? (
        <div className="mc-panel bg-surface p-8 text-center text-sm text-muted">
          {t("noResults")}
        </div>
      ) : (
        <div
          className={`grid items-start gap-3 ${columnClasses[columns]}`}
        >
          {visible.map((entry) => {
            const Icon = getIcon(entry.icon);
            const open = openIds.includes(entry.id);
            return (
              <div
                key={entry.id}
                className="mc-panel mc-tile bg-surface"
                data-open={open}
              >
                <button
                  type="button"
                  onClick={() => toggle(entry.id)}
                  aria-expanded={open}
                  className="flex w-full cursor-pointer items-start gap-3.5 p-5 text-left"
                >
                  <span className="mc-btn mc-btn-primary flex h-10 w-10 flex-none items-center justify-center">
                    <Icon className="h-4.5 w-4.5" />
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
                      <span className="font-bold text-foreground">
                        {entry.title}
                      </span>
                      {entry.modes.map((mode) => (
                        <span
                          key={mode}
                          className="border border-border bg-surface-2 px-1.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-muted"
                        >
                          {mode}
                        </span>
                      ))}
                    </span>
                    <span className="mt-1 block text-sm text-muted">
                      {entry.summary}
                    </span>
                  </span>

                  <ChevronDown className="mc-chevron mt-1 h-4 w-4 flex-none text-primary" />
                </button>

                <div className="mc-collapse" data-open={open}>
                  <div className="overflow-hidden">
                    <div className="border-t border-border px-5 pb-5 pt-4">
                      <p className="text-sm leading-relaxed text-muted">
                        {entry.body}
                      </p>

                      {entry.steps.length > 0 && (
                        <ol className="mt-4 space-y-2">
                          {entry.steps.map((step, index) => (
                            <li
                              key={step}
                              className="flex gap-2.5 text-sm text-muted"
                            >
                              <span className="flex h-5 w-5 flex-none items-center justify-center border border-border bg-surface-3 font-mono text-[11px] font-bold text-primary">
                                {index + 1}
                              </span>
                              <span className="leading-relaxed">
                                {step}
                              </span>
                            </li>
                          ))}
                        </ol>
                      )}

                      {entry.facts.length > 0 && (
                        <dl className="mt-4 border-t border-border">
                          {entry.facts.map((fact) => (
                            <div
                              key={fact.label}
                              className="flex items-baseline justify-between gap-4 border-b border-border py-2"
                            >
                              <dt className="text-xs text-muted">
                                {fact.label}
                              </dt>
                              <dd className="text-right font-mono text-xs font-bold text-foreground">
                                {fact.value}
                              </dd>
                            </div>
                          ))}
                        </dl>
                      )}

                      {entry.commands.length > 0 && (
                        <div className="mt-4">
                          <p className="mb-2 flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase tracking-wider text-primary">
                            <Terminal className="h-3.5 w-3.5" />
                            {t("commands")}
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {entry.commands.map((command) => (
                              <code
                                key={command}
                                className="border border-border bg-surface-3 px-2 py-1 font-mono text-xs text-primary-2"
                              >
                                {command}
                              </code>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`mc-btn cursor-pointer px-3 py-2 text-xs font-bold ${
        active ? "mc-btn-primary" : "mc-btn-ghost"
      }`}
    >
      {children}
    </button>
  );
}
