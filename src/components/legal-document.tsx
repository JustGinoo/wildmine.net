import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { LegalBlock, LegalDocument, LegalRun } from "@/data/legal";
import PageHeader from "./page-header";

/**
 * Renders one legal document. Deliberately plain: a narrow measure, real
 * headings and no decoration, because these pages exist to be read and cited,
 * not admired.
 */
export default async function LegalDocumentView({
  document,
  locale,
}: {
  document: LegalDocument;
  locale: string;
}) {
  const t = await getTranslations("legal");

  return (
    <div className="mc-shell mc-shell-narrow py-10 sm:py-14">
      <PageHeader
        eyebrow={t("eyebrow")}
        title={document.title}
        lead={document.updated}
      />

      {/* The documents are German law in German. An English rendering would be
          a second version somebody could call the binding one. */}
      {locale !== "de" && (
        <p className="mc-panel mt-8 border-l-2 border-primary bg-surface p-4 text-sm text-muted">
          {t("germanOnly")}
        </p>
      )}

      <article className="mt-10 flex flex-col gap-9">
        {document.sections.map((section, index) => (
          <section key={section.heading ?? index}>
            {section.heading && (
              <h2 className="mb-3 text-lg font-bold text-foreground">
                {section.heading}
              </h2>
            )}
            <div className="flex flex-col gap-3">
              {section.blocks.map((block, blockIndex) => (
                <Block key={blockIndex} block={block} />
              ))}
            </div>
          </section>
        ))}
      </article>
    </div>
  );
}

function Block({ block }: { block: LegalBlock }) {
  switch (block.kind) {
    case "address":
      return (
        <address className="mc-panel bg-surface p-4 not-italic leading-relaxed text-foreground">
          {block.lines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </address>
      );

    case "list":
      return (
        <ul className="flex flex-col gap-2">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3 text-muted">
              <span
                aria-hidden
                className="mt-2.5 h-1.5 w-1.5 flex-none bg-primary"
              />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      );

    case "aside":
      return (
        <p className="text-xs leading-relaxed text-faint">
          <Runs runs={block.runs} />
        </p>
      );

    default:
      return (
        <p className="leading-relaxed text-muted">
          <Runs runs={block.runs} />
        </p>
      );
  }
}

function Runs({ runs }: { runs: LegalRun[] }) {
  return (
    <>
      {runs.map((run, index) =>
        typeof run === "string" ? (
          run
        ) : (
          <LegalLink key={index} href={run.href} label={run.label} />
        ),
      )}
    </>
  );
}

const LINK_CLASS =
  "font-semibold text-primary underline decoration-primary/40 underline-offset-4 transition-colors hover:decoration-primary";

function LegalLink({ href, label }: { href: string; label: string }) {
  // Internal routes keep the locale prefix; everything else is a plain anchor,
  // and only real external sites get the new tab and the rel guard.
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={LINK_CLASS}>
        {label}
      </Link>
    );
  }

  const external = href.startsWith("http");

  return (
    <a
      href={href}
      className={`${LINK_CLASS} break-words`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {label}
    </a>
  );
}
