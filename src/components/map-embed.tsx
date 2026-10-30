"use client";

import { useState } from "react";
import { Map as MapIcon } from "lucide-react";

/**
 * The live map pulls several megabytes of tiles and markers, so it only loads
 * once the visitor asks for it. Until then a dimmed screenshot holds the space.
 */
export default function MapEmbed({
  src,
  title,
  preview,
  loadLabel,
  loadingLabel,
}: {
  src: string;
  title: string;
  preview: string | null;
  loadLabel: string;
  loadingLabel: string;
}) {
  const [active, setActive] = useState(false);

  if (active) {
    return (
      <>
        <p className="absolute inset-0 flex items-center justify-center text-sm text-muted">{loadingLabel}</p>
        <iframe src={src} title={title} allowFullScreen className="absolute inset-0 h-full w-full border-0" />
      </>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setActive(true)}
      className="group absolute inset-0 flex items-center justify-center overflow-hidden bg-surface-2"
    >
      {preview && (
        <span
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center opacity-40 transition-opacity group-hover:opacity-55"
          style={{ backgroundImage: `url(${preview})` }}
        />
      )}
      <span className="mc-btn mc-btn-primary relative inline-flex items-center gap-2 px-5 py-3 font-bold">
        <MapIcon className="h-4.5 w-4.5" />
        {loadLabel}
      </span>
    </button>
  );
}
