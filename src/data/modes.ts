import type { Localized } from "./rules/types";

export type ModeFact = {
  /** Key from `src/lib/icons.ts`. */
  icon: string;
  label: Localized;
  value: Localized;
};

/** Short "at a glance" facts rendered next to the ruleset on a mode page. */
export const modeFacts: Record<string, ModeFact[]> = {
  wildattack: [
    {
      icon: "swords",
      label: { de: "PvP", en: "PvP" },
      value: {
        de: "Aus · /pvp, 12 h Cooldown",
        en: "Off · /pvp, 12 h cooldown",
      },
    },
    {
      icon: "mapPin",
      label: { de: "Schutz", en: "Protection" },
      value: { de: "Claim-System", en: "Claim system" },
    },
    {
      icon: "send",
      label: { de: "Teleport", en: "Teleport" },
      value: {
        de: "TPA nur mit Premium oder Vote",
        en: "TPA with premium or a vote only",
      },
    },
    {
      icon: "map",
      label: { de: "Welten", en: "Worlds" },
      value: {
        de: "Haupt, Nether, End, Farm",
        en: "Main, Nether, End, farm",
      },
    },
  ],
  wildsmp: [
    {
      icon: "swords",
      label: { de: "PvP", en: "PvP" },
      value: { de: "Nur in Farmwelten", en: "Farm worlds only" },
    },
    {
      icon: "mapPin",
      label: { de: "Schutz", en: "Protection" },
      value: { de: "Claim-System", en: "Claim system" },
    },
    {
      icon: "coins",
      label: { de: "Wirtschaft", en: "Economy" },
      value: { de: "Auktionshaus & Shops", en: "Auction house & shops" },
    },
    {
      icon: "trophy",
      label: { de: "Fortschritt", en: "Progression" },
      value: { de: "Skills, Quests & Perks", en: "Skills, quests & perks" },
    },
  ],
  wildblock: [
    {
      icon: "swords",
      label: { de: "PvP", en: "PvP" },
      value: { de: "Vollständig deaktiviert", en: "Fully disabled" },
    },
    {
      icon: "user",
      label: { de: "Spielweise", en: "Playstyle" },
      value: { de: "Solo – eine Insel pro Spieler", en: "Solo — one island per player" },
    },
    {
      icon: "box",
      label: { de: "Fortschritt", en: "Progression" },
      value: { de: "OneBlock-Phasen", en: "OneBlock phases" },
    },
    {
      icon: "clock",
      label: { de: "Reset", en: "Reset" },
      value: { de: "Saisonal möglich", en: "Seasonal, possible" },
    },
  ],
  wildcity: [
    {
      icon: "building",
      label: { de: "Modus", en: "Mode" },
      value: { de: "Rollenspiel", en: "Roleplay" },
    },
    {
      icon: "map",
      label: { de: "Welt", en: "World" },
      value: { de: "Eine große Stadt", en: "One large city" },
    },
    {
      icon: "mapPin",
      label: { de: "Grundstücke", en: "Plots" },
      value: { de: "Vom Team zugewiesen", en: "Assigned by the team" },
    },
    {
      icon: "cog",
      label: { de: "Status", en: "Status" },
      value: { de: "Im Aufbau", en: "Under construction" },
    },
  ],
};

export function getModeFacts(slug: string): ModeFact[] {
  return modeFacts[slug] ?? [];
}
