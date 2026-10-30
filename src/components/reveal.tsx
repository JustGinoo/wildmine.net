"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Fades a whole band in once, the first time it comes into view. Deliberately
 * small — ten pixels and a little opacity, nothing that draws attention to
 * itself. Use it per section, not per card: a grid of twelve tiles animating
 * in sequence is the thing this redesign set out to remove.
 */
export default function Reveal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Safety net. Nothing may stay invisible because an observer never fired —
    // a stuck section would read as missing content, not as a missing effect.
    const fallback = setTimeout(() => setShown(true), 1200);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setShown(true);
        observer.disconnect();
      },
      { rootMargin: "0px 0px -5% 0px" },
    );

    observer.observe(el);
    return () => {
      clearTimeout(fallback);
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={ref} data-shown={shown} className={`mc-reveal ${className ?? ""}`}>
      {children}
    </div>
  );
}
