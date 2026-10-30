"use client";

import { useEffect } from "react";

/**
 * Makes the screenshots awkward to walk off with: no right-click menu over an
 * image, no dragging one out of the page onto the desktop.
 *
 * This is a speed bump, not a lock. A browser has to download a picture in
 * order to show it, so anyone who opens the network panel or the page source
 * still has the file. There is no way around that on the web — the only real
 * protection is a visible watermark in the image itself.
 *
 * One delegated listener instead of handlers on every element, and it fires
 * only over images, so right-clicking a link or copying text still works
 * everywhere else on the page.
 */
export default function ImageGuard() {
  useEffect(() => {
    function isPhoto(target: EventTarget | null) {
      if (!(target instanceof Element)) return false;
      return Boolean(target.closest("img, [data-photo]"));
    }

    function onContextMenu(event: MouseEvent) {
      if (isPhoto(event.target)) event.preventDefault();
    }

    function onDragStart(event: DragEvent) {
      if (isPhoto(event.target)) event.preventDefault();
    }

    document.addEventListener("contextmenu", onContextMenu);
    document.addEventListener("dragstart", onDragStart);
    return () => {
      document.removeEventListener("contextmenu", onContextMenu);
      document.removeEventListener("dragstart", onDragStart);
    };
  }, []);

  return null;
}
