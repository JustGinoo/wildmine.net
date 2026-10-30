import type { Localized } from "./rules/types";

/**
 * Shared by `wiki.ts` and `wiki-extra.ts`. Both hold entries and reference
 * each other, so the types and the `f` helper live here — importing a runtime
 * value across that pair directly would be a circular import.
 */

export type WikiCategory =
  | "core"
  | "world"
  | "economy"
  | "ranks"
  | "extras"
  | "basics";

export type WikiFact = { label: Localized; value: Localized };

export type WikiEntry = {
  id: string;
  /** Key from `src/lib/icons.ts`. */
  icon: string;
  category: WikiCategory;
  title: Localized;
  /** One line shown on the collapsed tile. */
  summary: Localized;
  /** Two or three sentences — exact numbers belong in `facts`, not in here. */
  body: Localized;
  /** Numbered how-to, for features you have to set up rather than just use. */
  steps?: Localized[];
  /** Values from the live plugin config, rendered as a small table. */
  facts?: WikiFact[];
  /** In-game commands, verified against the plugin definitions. */
  commands?: string[];
};

export const wikiCategoryLabels: Record<WikiCategory, Localized> = {
  core: { de: "Netzwerk", en: "Network" },
  world: { de: "Welt & Reisen", en: "World & travel" },
  economy: { de: "Wirtschaft", en: "Economy" },
  ranks: { de: "Ränge & Perks", en: "Ranks & perks" },
  extras: { de: "Extras", en: "Extras" },
  basics: { de: "Grundlagen", en: "Basics" },
};

/** Shorthand so the fact tables stay readable. */
export const f = (
  de: string,
  en: string,
  valueDe: string,
  valueEn: string,
): WikiFact => ({ label: { de, en }, value: { de: valueDe, en: valueEn } });
