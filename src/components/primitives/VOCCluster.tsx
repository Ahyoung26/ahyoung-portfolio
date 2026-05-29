import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type VOCItem = {
  cluster: string;
  mentions: number;
  sample: string;
};

/**
 * VOC Cluster — 사용자 피드백을 클러스터 단위로 시각화.
 * Bar 그래프 형태로 mentions 비교 + 대표 샘플 인용.
 */
export function VOCCluster({
  items,
  tone = "light",
  className,
}: {
  items: VOCItem[];
  tone?: "light" | "dark";
  className?: string;
}) {
  const dark = tone === "dark";
  const max = Math.max(...items.map((i) => i.mentions));
  return (
    <div
      className={cn(
        "rounded-2xl border overflow-hidden",
        dark
          ? "bg-[#0f0f12] border-white/10"
          : "bg-white border-[var(--color-line)]",
        className,
      )}
    >
      <div
        className={cn(
          "flex items-center justify-between border-b px-6 py-4 text-[11px] font-bold uppercase tracking-[0.16em]",
          dark
            ? "border-white/10 text-white/60"
            : "border-[var(--color-line)] text-[var(--color-ink-3)]",
        )}
      >
        <span>VOC Cluster</span>
        <span>n = {items.reduce((s, i) => s + i.mentions, 0)}</span>
      </div>
      <ul className="divide-y">
        {items.map((it, i) => {
          const pct = Math.round((it.mentions / max) * 100);
          return (
            <li
              key={i}
              className={cn(
                "px-6 py-5",
                dark
                  ? "divide-white/10 hover:bg-white/[0.02]"
                  : "divide-[var(--color-line)] hover:bg-[var(--color-bg-alt)]",
              )}
            >
              <div className="flex items-baseline justify-between gap-4">
                <div
                  className={cn(
                    "text-[15px] font-semibold tracking-[-0.01em] keep-all",
                    dark ? "text-white" : "text-[var(--color-ink)]",
                  )}
                >
                  <span className="num mr-3 text-[11px] font-bold tracking-[0.16em] uppercase opacity-60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {it.cluster}
                </div>
                <div
                  className={cn(
                    "shrink-0 num text-[14px] font-bold",
                    dark ? "text-white/80" : "text-[var(--color-ink-2)]",
                  )}
                >
                  {it.mentions}
                </div>
              </div>
              <div
                className={cn(
                  "mt-3 h-1.5 w-full rounded-full overflow-hidden",
                  dark ? "bg-white/10" : "bg-[var(--color-bg-alt)]",
                )}
              >
                <div
                  className="h-full rounded-full bg-[var(--color-accent)]"
                  style={{ width: `${pct}%` }}
                />
              </div>
              <div
                className={cn(
                  "mt-3 text-[13px] italic keep-all",
                  dark ? "text-white/55" : "text-[var(--color-ink-3)]",
                )}
              >
                “{it.sample}”
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function FeedbackQuotes({
  items,
  tone = "light",
  className,
}: {
  items: ReactNode[];
  tone?: "light" | "dark";
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <ul className={cn("grid gap-3 sm:grid-cols-2", className)}>
      {items.map((q, i) => (
        <li
          key={i}
          className={cn(
            "rounded-xl border px-5 py-4 text-[14px] leading-[1.65] keep-all",
            dark
              ? "bg-[#15151a] border-white/10 text-white/80"
              : "bg-white border-[var(--color-line)] text-[var(--color-ink-2)]",
          )}
        >
          <span
            aria-hidden
            className={cn(
              "mr-2 inline-block text-[18px] leading-none align-text-top",
              dark ? "text-white/40" : "text-[var(--color-ink-3)]",
            )}
          >
            ❝
          </span>
          {q}
        </li>
      ))}
    </ul>
  );
}
