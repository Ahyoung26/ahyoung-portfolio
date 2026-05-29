import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Eyebrow({
  children,
  tone = "accent",
  className,
}: {
  children: ReactNode;
  tone?: "accent" | "muted" | "white";
  className?: string;
}) {
  const color =
    tone === "white"
      ? "text-white/60"
      : tone === "muted"
      ? "text-[var(--color-ink-3)]"
      : "text-[var(--color-accent)]";
  return (
    <span
      className={cn(
        "inline-block text-[11px] font-bold uppercase tracking-[0.2em]",
        color,
        className,
      )}
    >
      {children}
    </span>
  );
}

export function Pill({
  children,
  tone = "default",
  className,
}: {
  children: ReactNode;
  tone?: "default" | "accent" | "dark" | "outline";
  className?: string;
}) {
  const styles =
    tone === "accent"
      ? "bg-[var(--color-accent-l)] text-[var(--color-accent)] border-[var(--color-accent-m)]"
      : tone === "dark"
      ? "bg-[#15151a] text-white/80 border-white/10"
      : tone === "outline"
      ? "bg-transparent text-[var(--color-ink-2)] border-[var(--color-line)]"
      : "bg-[var(--color-bg-alt)] text-[var(--color-ink-2)] border-[var(--color-line)]";
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-semibold tracking-[0.06em] uppercase",
        styles,
        className,
      )}
    >
      {children}
    </span>
  );
}
