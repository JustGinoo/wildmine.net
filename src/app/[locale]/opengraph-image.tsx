import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/lib/site";

export const alt = "WildMine.net";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const copy: Record<string, { tagline: string; kicker: string }> = {
  de: {
    tagline: "Der grünste SMP-Server 2026",
    kicker: "Java & Bedrock · Survival-Netzwerk",
  },
  en: {
    tagline: "The greenest SMP server of 2026",
    kicker: "Java & Bedrock · Survival network",
  },
};

const GREEN = "#46e05a";
const BACKGROUND = "#080b09";

/** The corner marks from the site, drawn as four positioned rules. */
function Corner({ at }: { at: "tl" | "br" }) {
  const top = at === "tl";
  return (
    <div
      style={{
        position: "absolute",
        width: 56,
        height: 56,
        ...(top
          ? {
              top: 0,
              left: 0,
              borderTop: `6px solid ${GREEN}`,
              borderLeft: `6px solid ${GREEN}`,
            }
          : {
              right: 0,
              bottom: 0,
              borderRight: `6px solid ${GREEN}`,
              borderBottom: `6px solid ${GREEN}`,
            }),
      }}
    />
  );
}

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const text = copy[locale] ?? copy.de;

  const logo = await readFile(join(process.cwd(), "public/logos/logo-green.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          padding: 56,
          backgroundColor: BACKGROUND,
          backgroundImage:
            "radial-gradient(110% 60% at 50% -10%, rgba(70,224,90,0.20) 0%, rgba(8,11,9,0) 70%)",
        }}
      >
        {/* The framed panel, matching the site's bordered surfaces */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
            padding: 56,
            border: "1px solid #2a352d",
            backgroundColor: "rgba(15,21,18,0.72)",
          }}
        >
          <Corner at="tl" />
          <Corner at="br" />

          <div
            style={{
              display: "flex",
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: GREEN,
            }}
          >
            {text.kicker}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 36 }}>
            <img src={logoSrc} width={168} height={168} alt="" />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  display: "flex",
                  fontSize: 104,
                  fontWeight: 800,
                  letterSpacing: -3,
                  color: "#e8efe9",
                }}
              >
                WILD<span style={{ color: GREEN }}>MINE</span>
              </div>
              <div
                style={{
                  display: "flex",
                  marginTop: 8,
                  fontSize: 34,
                  color: "#97a89b",
                }}
              >
                {text.tagline}
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              paddingTop: 28,
              borderTop: "1px solid #2a352d",
              fontSize: 30,
              fontWeight: 700,
              color: "#e8efe9",
            }}
          >
            <div style={{ display: "flex", width: 16, height: 16, backgroundColor: GREEN }} />
            {site.javaIp}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
