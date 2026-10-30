import type { LucideIcon } from "lucide-react";

/**
 * Shared masthead for every sub-page: /wiki, /status, /livemap.
 *
 * Left-aligned and always the same shape, so moving between those pages never
 * feels like landing on a different website.
 */
export default function PageHeader({
  eyebrow,
  title,
  lead,
  icon: Icon,
  /** Small facts beside the title — counts, timestamps, a status word. */
  meta,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  icon?: LucideIcon;
  meta?: React.ReactNode;
}) {
  return (
    <header className="border-b border-border pb-10">
      <div className="flex items-start gap-5">
        {Icon && (
          <span className="mc-btn mc-btn-primary hidden h-14 w-14 flex-shrink-0 items-center justify-center sm:flex">
            <Icon className="h-7 w-7" />
          </span>
        )}

        <div className="min-w-0 flex-1">
          <p className="mc-eyebrow mb-3">{eyebrow}</p>
          <h1 className="t-h1 text-foreground">{title}</h1>
          {lead && <p className="mt-4 max-w-2xl text-muted">{lead}</p>}
        </div>
      </div>

      {meta && <div className="mt-7 flex flex-wrap gap-2">{meta}</div>}
    </header>
  );
}
