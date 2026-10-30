import { wildattackRules } from "./wildattack";
import { wildblockRules } from "./wildblock";
import { wildsmpRules } from "./wildsmp";
import type { RuleSet } from "./types";

export * from "./types";

/**
 * Rulesets that belong to a game mode, keyed by mode slug. Each one is
 * complete on its own; there is no network-wide ruleset on top. A mode missing
 * here simply shows no ruleset section.
 *
 * WildCity is deliberately absent: it is far enough out that publishing a
 * ruleset for it would be misleading.
 */
export const modeRuleSets: Record<string, RuleSet> = {
  wildsmp: wildsmpRules,
  wildattack: wildattackRules,
  wildblock: wildblockRules,
};

export function getModeRuleSet(slug: string): RuleSet | undefined {
  return modeRuleSets[slug];
}
