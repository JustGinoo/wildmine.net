import { readdirSync } from "node:fs";
import { join } from "node:path";

const DIRECTORY = "backgrounds";
const EXTENSIONS = [".webp", ".jpg", ".jpeg", ".png"];

/**
 * Screenshot for a game mode, or null when none has been added yet.
 *
 * The lookup goes through the file system rather than a list in the code, so
 * adding a picture means dropping `public/backgrounds/<slug>.webp` into the
 * project — no edit here, and no half-broken state where the layout reserves
 * room for an image that 404s.
 *
 * Server only, and deliberately uncached: every caller is a prerendered page,
 * so in production this runs a handful of times during the build, and in
 * development a new file shows up on the next reload instead of after a
 * restart.
 */
export function modeImage(slug: string): string | null {
  const wanted = slug.toLowerCase();

  let names: string[];
  try {
    names = readdirSync(join(process.cwd(), "public", DIRECTORY));
  } catch {
    return null; // No directory yet — no mode has a picture
  }

  for (const name of names) {
    const dot = name.lastIndexOf(".");
    if (dot <= 0) continue;
    if (!EXTENSIONS.includes(name.slice(dot).toLowerCase())) continue;
    if (name.slice(0, dot).toLowerCase() !== wanted) continue;
    return `/${DIRECTORY}/${name}`;
  }

  return null;
}
