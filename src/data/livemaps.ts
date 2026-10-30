import type { Localized } from "./rules/types";

export type LiveMap = {
  id: string;
  /** Game mode this map belongs to, so the mode page can pick it up. */
  mode?: string;
  title: Localized;
  summary: Localized;
  /**
   * Path on our own origin. The map servers speak plain HTTP, which a browser
   * refuses to embed into an HTTPS page, so every map is proxied through us —
   * see the `maps` rewrite in next.config.ts.
   *
   * Points at index.html on purpose: Next strips a trailing slash with a 308,
   * and without it the maps relative asset paths would resolve one level too
   * high. Ending in a filename sidesteps the redirect entirely.
   */
  path: string;
  /**
   * Upstream address the rewrite points at. Kept here so both stay in sync.
   *
   * Build time only: next.config.ts reads it, nothing renders it. That is what
   * keeps a bare host and port out of the page a visitor receives — check it
   * stays that way before moving this field anywhere near a component.
   */
  upstream: string;
};

export const liveMaps: LiveMap[] = [
  {
    id: "wildsmp",
    mode: "wildsmp",
    title: { de: "WildSMP", en: "WildSMP" },
    summary: {
      de: "Welten, Bauwerke und Spieler in Echtzeit — zieh die Karte mit der Maus, zoome mit dem Scrollrad.",
      en: "Worlds, builds and players in real time — drag the map with your mouse, zoom with the scroll wheel.",
    },
    path: "/maps/wildsmp/index.html",
    upstream: process.env.LIVEMAP_WILDSMP_URL ?? "",
  },
  {
    id: "wildattack",
    mode: "wildattack",
    title: { de: "WildAttack", en: "WildAttack" },
    summary: {
      de: "Welten, Bauwerke und Spieler in Echtzeit — zieh die Karte mit der Maus, zoome mit dem Scrollrad.",
      en: "Worlds, builds and players in real time — drag the map with your mouse, zoom with the scroll wheel.",
    },
    path: "/maps/wildattack/index.html",
    upstream: process.env.LIVEMAP_WILDATTACK_URL ?? "",
  },
];

/** The map belonging to a game mode, if that mode has one. */
export function getModeMap(slug: string): LiveMap | undefined {
  return liveMaps.find((map) => map.mode === slug);
}
