import { getTranslations } from "next-intl/server";
import {
  getFeatureModes,
  getModeWiki,
  wikiCategoryLabels,
  type WikiCategory,
  type WikiEntry,
} from "@/data/wiki";
import { pick, type Locale } from "@/data/rules/types";
import WikiList, { type WikiChip, type WikiItem } from "./wiki-list";

/** Filter + search only earn their space once there is enough to sift through. */
const CONTROLS_THRESHOLD = 8;

/**
 * Server half of the wiki: resolves every entry to the current language and
 * hands plain strings to the interactive list.
 */
export default async function WikiGrid({
  entries,
  locale,
  columns = 2,
  showModeBadges = false,
  modeSlugs,
}: {
  entries: WikiEntry[];
  locale: Locale;
  columns?: 1 | 2 | 3;
  /** Tags each feature with the game modes it belongs to. */
  showModeBadges?: boolean;
  /** When given, the chips filter by game mode instead of by category. */
  modeSlugs?: string[];
}) {
  const tm = await getTranslations("modes");
  const modeTitle = (slug: string) => tm(`${slug}.title`);

  const items: WikiItem[] = entries.map((entry) => ({
    id: entry.id,
    icon: entry.icon,
    title: pick(entry.title, locale),
    summary: pick(entry.summary, locale),
    body: pick(entry.body, locale),
    steps: (entry.steps ?? []).map((step) => pick(step, locale)),
    facts: (entry.facts ?? []).map((fact) => ({ label: pick(fact.label, locale), value: pick(fact.value, locale) })),
    commands: entry.commands ?? [],
    modes: showModeBadges ? getFeatureModes(entry.id).map(modeTitle) : [],
  }));

  const categories = [...new Set(entries.map((entry) => entry.category))] as WikiCategory[];
  const chips: WikiChip[] = modeSlugs?.length
    ? modeSlugs.map((slug) => ({
        value: slug,
        label: modeTitle(slug),
        ids: getModeWiki(slug).map((entry) => entry.id),
      }))
    : categories.map((category) => ({
        value: category,
        label: pick(wikiCategoryLabels[category], locale),
        ids: entries.filter((entry) => entry.category === category).map((entry) => entry.id),
      }));

  return (
    <WikiList
      entries={items}
      chips={chips}
      columns={columns}
      showControls={entries.length >= CONTROLS_THRESHOLD}
    />
  );
}
