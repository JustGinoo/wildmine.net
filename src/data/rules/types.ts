export type Locale = "de" | "en";

export type Localized = { de: string; en: string };

/** Picks the right language, falling back to German (the default locale). */
export function pick(value: Localized, locale: Locale) {
  return value[locale] ?? value.de;
}

export type RuleItem = {
  /** Numbering inside the paragraph, e.g. "1.4". */
  ref: string;
  text: Localized;
  /** Example or exception, rendered as an indented sub-line. */
  note?: Localized;
  /** Mode slugs this rule is limited to. Absent means it applies everywhere. */
  modes?: string[];
};

export type RuleParagraph = {
  /** Paragraph number, rendered as "§0", "§1", … */
  num: string;
  /** Key from `src/lib/icons.ts`. */
  icon: string;
  title: Localized;
  items: RuleItem[];
};

export type RuleSet = {
  key: string;
  title: Localized;
  /** Where this ruleset applies — shown under the title. */
  scope: Localized;
  /** Red callout at the top. */
  notice?: Localized;
  /** Amber callout below the notice. */
  hint?: Localized;
  /** Marks a ruleset that is not finalised yet, so the UI can badge it. */
  draft?: boolean;
  paragraphs: RuleParagraph[];
};

/** Compact constructor for a numbered rule. */
export const r = (
  ref: string,
  de: string,
  en: string,
  note?: Localized,
): RuleItem => ({ ref, text: { de, en }, ...(note ? { note } : {}) });

/** Compact constructor for a paragraph. */
export const p = (
  num: string,
  icon: string,
  de: string,
  en: string,
  items: RuleItem[],
): RuleParagraph => ({ num, icon, title: { de, en }, items });

/** Limits a rule to some game modes, so the UI can badge it. */
export const only = (modes: string[], item: RuleItem): RuleItem => ({
  ...item,
  modes,
});

/** Compact constructor for a rule note (example / exception). */
export const n = (de: string, en: string): Localized => ({ de, en });

/** Total number of numbered rules in a ruleset. */
export function countRules(set: RuleSet) {
  return set.paragraphs.reduce((sum, para) => sum + para.items.length, 0);
}
