import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type DiagramNode = {
  stage?: string;
  label: ReactNode;
  note?: ReactNode;
  highlight?: boolean;
};

/**
 * Large horizontal process diagram — full-width.
 * SERVICE DESIGN 같은 핵심 다이어그램용.
 */
export function BigDiagram({
  nodes,
  tone = "light",
  className,
}: {
  nodes: DiagramNode[];
  tone?: "light" | "dark";
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-2xl border",
        dark
          ? "bg-[#0f0f12] border-white/10 text-white"
          : "bg-white border-[var(--color-line)] text-[var(--color-ink)]",
        className,
      )}
    >
      {/* grid background */}
      <div
        aria-hidden
        className={cn(
          "absolute inset-0 pointer-events-none",
          dark ? "grid-bg-dark opacity-60" : "grid-bg opacity-60",
        )}
      />

      <div className="relative px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12">
        {/* connecting line — desktop horizontal */}
        <div
          aria-hidden
          className={cn(
            "hidden lg:block absolute left-14 right-14 top-1/2 -translate-y-1/2 h-px",
            dark ? "bg-white/10" : "bg-[var(--color-line)]",
          )}
        />

        <ol className="relative grid gap-5 sm:grid-cols-2 lg:flex lg:items-stretch lg:gap-3">
          {nodes.map((n, i) => (
            <li
              key={i}
              className={cn(
                "relative flex-1 rounded-2xl border px-5 py-5 transition-shadow",
                n.highlight
                  ? "bg-[var(--color-accent)] text-white border-[var(--color-accent)] shadow-[0_8px_24px_-8px_rgba(79,70,229,0.45)]"
                  : dark
                  ? "bg-[#15151a] border-white/10"
                  : "bg-white border-[var(--color-line)] shadow-[0_1px_2px_rgba(15,15,17,0.04)]",
              )}
            >
              <div className="flex items-center justify-between mb-3">
                <span
                  className={cn(
                    "text-[10px] font-bold tracking-[0.2em] uppercase",
                    n.highlight
                      ? "text-white/80"
                      : dark
                      ? "text-white/50"
                      : "text-[var(--color-ink-3)]",
                  )}
                >
                  {n.stage ?? `STEP ${String(i + 1).padStart(2, "0")}`}
                </span>
                {n.highlight && (
                  <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-white/85">
                    Core
                  </span>
                )}
              </div>
              <div
                className={cn(
                  "text-[16px] sm:text-[17px] font-semibold tracking-[-0.01em] keep-all",
                  n.highlight
                    ? "text-white"
                    : dark
                    ? "text-white"
                    : "text-[var(--color-ink)]",
                )}
              >
                {n.label}
              </div>
              {n.note && (
                <div
                  className={cn(
                    "mt-2 text-[12px] leading-relaxed",
                    n.highlight
                      ? "text-white/80"
                      : dark
                      ? "text-white/55"
                      : "text-[var(--color-ink-2)]",
                  )}
                >
                  {n.note}
                </div>
              )}

              {/* arrow between nodes (desktop) */}
              {i < nodes.length - 1 && (
                <span
                  aria-hidden
                  className={cn(
                    "hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-[14px]",
                    dark ? "text-white/40" : "text-[var(--color-ink-3)]",
                  )}
                >
                  ›
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

/**
 * Compact vertical flow — Operations / Conversation flow에 사용.
 */
export function FlowChain({
  steps,
  tone = "light",
  variant = "row",
  className,
}: {
  steps: ReactNode[];
  tone?: "light" | "dark";
  variant?: "row" | "column";
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <div
      className={cn(
        variant === "row"
          ? "flex flex-wrap items-stretch gap-2"
          : "flex flex-col gap-2",
        className,
      )}
    >
      {steps.map((s, i) => (
        <div
          key={i}
          className={cn(
            "flex items-center gap-2",
            variant === "row" ? "flex-1 min-w-[140px]" : "",
          )}
        >
          <div
            className={cn(
              "flex-1 rounded-xl border px-4 py-3 text-[13px] font-semibold keep-all",
              dark
                ? "bg-[#15151a] border-white/10 text-white"
                : "bg-white border-[var(--color-line)] text-[var(--color-ink)]",
            )}
          >
            <span
              className={cn(
                "mr-2 text-[10px] font-bold tracking-[0.18em] uppercase",
                dark ? "text-white/45" : "text-[var(--color-ink-3)]",
              )}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            {s}
          </div>
          {i < steps.length - 1 && (
            <span
              aria-hidden
              className={cn(
                "shrink-0 text-[14px]",
                dark ? "text-white/40" : "text-[var(--color-ink-3)]",
              )}
            >
              {variant === "row" ? "›" : "↓"}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
