"use client";

import { useMemo } from "react";
import type { Season } from "@/lib/site";

function pseudoRandom(seed: number, index: number) {
  const x = Math.sin(seed * 1000 + index * 97.13) * 43758.5453;
  return x - Math.floor(x);
}

function useSeeded(count: number, seed: number) {
  return useMemo(
    () => Array.from({ length: count }, (_, i) => pseudoRandom(seed, i)),
    [count, seed],
  );
}

function Snow() {
  const left = useSeeded(40, 1);
  const delay = useSeeded(40, 2);
  const duration = useSeeded(40, 3);
  const size = useSeeded(40, 4);
  const drift = useSeeded(40, 5);

  return (
    <div className="snow-layer" aria-hidden>
      {left.map((l, i) => (
        <span
          key={i}
          className="snowflake"
          style={{
            left: `${l * 100}%`,
            fontSize: `${8 + size[i] * 16}px`,
            animationDelay: `${delay[i] * -20}s`,
            animationDuration: `${10 + duration[i] * 14}s`,
            ["--drift" as string]: `${(drift[i] - 0.5) * 120}px`,
          }}
        >
          ❄
        </span>
      ))}
    </div>
  );
}

function Bats() {
  const top = useSeeded(6, 11);
  const delay = useSeeded(6, 12);
  const duration = useSeeded(6, 13);
  const scale = useSeeded(6, 14);

  return (
    <div className="bat-layer" aria-hidden>
      {top.map((t, i) => (
        <span
          key={i}
          className="bat"
          style={{
            top: `${5 + t * 60}%`,
            animationDelay: `${delay[i] * -18}s`,
            animationDuration: `${9 + duration[i] * 10}s`,
            ["--scale" as string]: 0.6 + scale[i] * 0.8,
          }}
        >
          <svg width="28" height="18" viewBox="0 0 28 18" fill="none">
            <path
              d="M14 6C11 1 5 0 0 2c3 1 6 3 7 6-3-1-6 0-7 3 4-1 7 0 9 3 0-3 2-5 5-6 3 1 5 3 5 6 2-3 5-4 9-3-1-3-4-4-7-3 1-3 4-5 7-6-5-2-11-1-14 4z"
              fill="#1a1a1a"
            />
          </svg>
        </span>
      ))}
    </div>
  );
}

export default function SeasonalOverlay({ season }: { season: Season }) {
  if (season === "winter") return <Snow />;
  if (season === "halloween") return <Bats />;
  return null;
}
