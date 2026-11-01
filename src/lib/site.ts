export const site = {
  name: "WildMine",
  domain: "wildmine.net",
  javaIp: "wildmine.net",
  bedrockIp: "bedrock.wildmine.net",
  discordUrl: "https://discord.gg/Yt9KuKm76E",
  discordInviteCode: "Yt9KuKm76E",
  storeUrl: "https://store.wildmine.net",
  /** Server first went live for everyone on 2025-06-18, 20:00 Europe/Berlin (CEST, UTC+2). */
  launchDate: "2025-06-18T18:00:00.000Z",
} as const;

export type Season = "default" | "winter" | "halloween";

/**
 * Winter: Dec 1 – Jan 6, Halloween: Oct 15 – Oct 31.
 * Uses UTC month/day so it's stable regardless of server timezone.
 */
const seasons: Season[] = ["default", "winter", "halloween"];

/** `SITE_SEASON` in the .env forces a season; without it the date decides. */
export function getSeason(date: Date = new Date()): Season {
  const forced = process.env.SITE_SEASON as Season | undefined;
  if (forced && seasons.includes(forced)) return forced;

  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();

  if (month === 12 || (month === 1 && day <= 6)) return "winter";
  if (month === 10 && day >= 15) return "halloween";
  return "default";
}

export const seasonLogo: Record<Season, string> = {
  default: "/logos/logo-green.png",
  winter: "/logos/logo-winter.png",
  halloween: "/logos/logo-halloween.png",
};

export const seasonBackground: Record<Season, string> = {
  default: "/backgrounds/bg-default.webp",
  winter: "/backgrounds/bg-winter.webp",
  halloween: "/backgrounds/bg-halloween.webp",
};

export type ModeStatus = "live" | "soon" | "wip";

/** WildAttack opens for CraftAttack 14 on 2026-10-10 at 18:00 Europe/Berlin (CEST, UTC+2). */
export const WILDATTACK_LAUNCH = "2026-10-10T16:00:00.000Z";

export type GameMode = {
  slug: string;
  status: ModeStatus;
  /** ISO moment this mode goes live on its own. Overrides `status` once passed. */
  liveFrom?: string;
  /** Rendered as a large featured banner instead of a grid card. */
  featured?: boolean;
  /** Server name on the proxy, only needed when it differs from the slug. */
  server?: string;
};

/**
 * A mode with a launch moment flips itself live when that moment passes, so
 * nobody has to redeploy the site at 18:00.
 */
export function effectiveStatus(mode: GameMode, now: number = Date.now()): ModeStatus {
  if (mode.liveFrom && now >= Date.parse(mode.liveFrom)) return "live";
  return mode.status;
}

/** Name this mode has in velocity.toml / the ProxySystem API. */
export function modeServer(mode: GameMode) {
  return mode.server ?? mode.slug;
}

/** Order of the cards on the home page. WildCity sits last — it is furthest out. */
export const gameModes: GameMode[] = [
  { slug: "wildattack", status: "soon", liveFrom: WILDATTACK_LAUNCH },
  { slug: "wildblock", status: "live" },
  { slug: "wildcity", status: "wip" },
];

/** WildSMP is the server's main mode and gets the large banner above the grid. */
export const featuredMode: GameMode = {
  slug: "wildsmp",
  status: "live",
  featured: true,
};

export const allModes: GameMode[] = [featuredMode, ...gameModes];

/**
 * Order used by the rules page and the wiki filter. Differs from the home
 * page, which leads with the featured mode.
 */
export const contentModes: GameMode[] = [
  "wildsmp",
  "wildattack",
  "wildblock",
  "wildcity",
].flatMap((slug) => allModes.filter((mode) => mode.slug === slug));
