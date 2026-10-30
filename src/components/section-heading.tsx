/**
 * The one heading block used by every section on the site.
 *
 * A small monospace eyebrow carries the colour, the title stays in the normal
 * text colour. That is the whole trick behind the calmer look: before, every
 * section shouted its name in 48px green, so nothing on a page outranked
 * anything else.
 */
export default function SectionHeading({
  eyebrow,
  title,
  lead,
  /** Right-hand slot on the same line as the title — usually a link. */
  action,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  action?: React.ReactNode;
  align?: "left" | "center";
}) {
  const centered = align === "center";

  return (
    <div
      className={`mb-10 ${centered ? "mx-auto max-w-2xl text-center" : ""}`}
    >
      <div
        className={`flex flex-wrap items-end gap-x-8 gap-y-4 ${
          centered ? "flex-col items-center" : "justify-between"
        }`}
      >
        <div className={centered ? "" : "max-w-2xl"}>
          {eyebrow && <p className="mc-eyebrow mb-3">{eyebrow}</p>}
          <h2 className="t-h2 text-foreground">{title}</h2>
        </div>
        {action && <div className="flex-shrink-0 pb-1">{action}</div>}
      </div>

      {lead && (
        <p
          className={`mt-4 text-muted ${centered ? "" : "max-w-2xl"}`}
        >
          {lead}
        </p>
      )}
    </div>
  );
}
