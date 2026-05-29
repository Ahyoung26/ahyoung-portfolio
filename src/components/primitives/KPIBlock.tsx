import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type KPI = {
  value: ReactNode;
  label: ReactNode;
  caption?: ReactNode;
};

/**
 * Big KPI Block — 큰 숫자 + 짧은 라벨 (DESIGN_GUIDE Metric Card 규칙).
 */
export function KPIBlock({
  value,
  label,
  caption,
  tone = "default",
  size = "lg",
  className,
}: KPI & {
  tone?: "default" | "accent" | "dark";
  size?: "md" | "lg" | "xl";
  className?: string;
}) {
  const valueSize =
    size === "xl"
      ? "text-[64px] sm:text-[88px] lg:text-[112px]"
      : size === "lg"
      ? "text-[44px] sm:text-[60px] lg:text-[76px]"
      : "text-[32px] sm:text-[40px] lg:text-[48px]";

  const valueColor =
    tone === "accent"
      ? "text-[var(--color-accent)]"
      : tone === "dark"
      ? "text-white"
      : "text-[var(--color-ink)]";

  const labelColor =
    tone === "dark" ? "text-white/60" : "text-[var(--color-ink-2)]";

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <div
        className={cn(
          "num font-bold leading-[0.95] tracking-[-0.04em]",
          valueSize,
          valueColor,
        )}
      >
        {value}
      </div>
      <div
        className={cn(
          "mt-2 text-[12px] font-semibold uppercase tracking-[0.16em]",
          labelColor,
        )}
      >
        {label}
      </div>
      {caption && (
        <div
          className={cn(
            "text-[13px]",
            tone === "dark" ? "text-white/50" : "text-[var(--color-ink-3)]",
          )}
        >
          {caption}
        </div>
      )}
    </div>
  );
}

/**
 * KPI Grid — 여러 KPIBlock을 균등 분할.
 */
export function KPIGrid({
  items,
  tone = "default",
  size = "lg",
  cols,
  className,
  divided = true,
}: {
  items: KPI[];
  tone?: "default" | "accent" | "dark";
  size?: "md" | "lg" | "xl";
  cols?: 2 | 3 | 4 | 5;
  className?: string;
  divided?: boolean;
}) {
  const n = cols ?? (items.length >= 4 ? 4 : (items.length as 2 | 3));
  const colClass =
    n === 5
      ? "grid-cols-2 md:grid-cols-5"
      : n === 4
      ? "grid-cols-2 md:grid-cols-4"
      : n === 3
      ? "grid-cols-1 sm:grid-cols-3"
      : "grid-cols-1 sm:grid-cols-2";

  const dividerColor =
    tone === "dark"
      ? "md:divide-white/10"
      : "md:divide-[var(--color-line)]";

  return (
    <div
      className={cn(
        "grid gap-y-10",
        colClass,
        divided && "md:divide-x",
        divided && dividerColor,
        className,
      )}
    >
      {items.map((it, i) => (
        <div key={i} className={cn(divided && "md:px-8 first:md:pl-0")}>
          <KPIBlock {...it} tone={tone} size={size} />
        </div>
      ))}
    </div>
  );
}
