import { getIcon } from "@/lib/icons";
import { getModeFacts } from "@/data/modes";
import { pick, type Locale } from "@/data/rules/types";

/** Compact "at a glance" card shown next to a mode's wiki. */
export default function ModeFacts({
  slug,
  locale,
  title,
}: {
  slug: string;
  locale: Locale;
  title: string;
}) {
  const facts = getModeFacts(slug);
  if (facts.length === 0) return null;

  return (
    <div className="mc-panel bg-surface">
      <h3 className="mc-eyebrow border-b border-border px-5 py-3.5">{title}</h3>

      <dl className="flex flex-col">
        {facts.map((fact) => {
          const Icon = getIcon(fact.icon);
          return (
            <div
              key={fact.label.de}
              className="flex items-start gap-3 border-b border-border/60 px-5 py-3.5 last:border-b-0"
            >
              <Icon className="mt-0.5 h-4 w-4 flex-none text-primary" />
              <span className="min-w-0 flex-1">
                <dt className="font-mono text-[11px] uppercase tracking-wider text-faint">
                  {pick(fact.label, locale)}
                </dt>
                <dd className="text-sm font-semibold text-foreground">
                  {pick(fact.value, locale)}
                </dd>
              </span>
            </div>
          );
        })}
      </dl>
    </div>
  );
}
