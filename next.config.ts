import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import { liveMaps } from "./src/data/livemaps";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/webp"],
    // Player head renders for the playtime podium
    // Fetched by our server, never by the visitor's browser — see the note on
    // the Image calls. Anything added here must stay on that side of the line.
    remotePatterns: [
      { protocol: "https", hostname: "minotar.net", pathname: "/helm/**" },
      { protocol: "https", hostname: "cdn.discordapp.com", pathname: "/icons/**" },
    ],
  },
  /**
   * The map servers speak plain HTTP, and a browser refuses to embed that into
   * an HTTPS page. Proxying them keeps the whole request chain on our own
   * origin; squaremap only ever uses relative paths, so a path prefix is all it
   * needs. The maps prefix is excluded from the middleware in src/proxy.ts.
   */
  /**
   * The network-wide ruleset is gone; every mode page carries its own. Old
   * links to /regeln land on the home page, where the modes are listed.
   */
  async redirects() {
    return [
      { source: "/:locale(de|en)/regeln", destination: "/:locale", permanent: true },
      { source: "/regeln", destination: "/", permanent: true },
    ];
  },
  async rewrites() {
    return liveMaps.filter((map) => map.upstream).map((map) => ({
      source: `/maps/${map.id}/:path*`,
      destination: `${map.upstream}/:path*`,
    }));
  },
};

export default withNextIntl(nextConfig);
