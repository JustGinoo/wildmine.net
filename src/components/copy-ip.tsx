"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Copy, Check } from "lucide-react";

/**
 * The single most useful control on the site. Java is filled and Bedrock is
 * not, because most visitors want the Java address — a row of identical
 * buttons makes you read both before you can choose.
 */
export default function CopyIp({
  value,
  label,
  variant = "ghost",
}: {
  value: string;
  label?: string;
  variant?: "primary" | "ghost";
}) {
  const t = useTranslations("hero");
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard unavailable, ignore
    }
  }

  const primary = variant === "primary";

  return (
    <button
      onClick={handleCopy}
      title={t("copy")}
      className={`mc-btn flex cursor-pointer items-center gap-2.5 px-4 py-3 ${
        primary ? "mc-btn-primary" : "mc-btn-ghost"
      }`}
    >
      {label && (
        <span
          className={`font-mono text-[10px] font-bold uppercase tracking-widest ${
            primary ? "opacity-70" : "text-primary"
          }`}
        >
          {label}
        </span>
      )}
      <span className="font-mono text-sm font-bold">{value}</span>
      {copied ? (
        <Check className="h-4 w-4 flex-none" />
      ) : (
        <Copy className="h-4 w-4 flex-none opacity-60" />
      )}
    </button>
  );
}
