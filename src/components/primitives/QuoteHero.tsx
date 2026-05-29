import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function QuoteHero({
  quote,
  attribution,
  insights,
  closing,
  className,
}: {
  quote: ReactNode;
  attribution?: ReactNode;
  insights?: string[];
  closing?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("text-center", className)}>
      <span className="inline-block text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--color-accent)]">
        Reflection
      </span>
      <blockquote className="mx-auto mt-7 max-w-4xl">
        <p className="text-[30px] sm:text-[44px] lg:text-[56px] font-bold tracking-[-0.025em] leading-[1.18] text-[var(--color-ink)] keep-all text-balance whitespace-pre-line">
          “{quote}”
        </p>
      </blockquote>
      {attribution && (
        <div className="mt-5 text-[13px] font-medium text-[var(--color-ink-3)]">
          — {attribution}
        </div>
      )}

      {insights && insights.length > 0 && (
        <ul className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-3">
          {insights.map((it, i) => (
            <li
              key={i}
              className="rounded-2xl border border-[var(--color-line)] bg-white px-5 py-5 text-left"
            >
              <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                <span className="num">{String(i + 1).padStart(2, "0")}</span>{" "}
                Lesson
              </div>
              <p className="mt-2 text-[14px] font-medium text-[var(--color-ink)] keep-all">
                {it}
              </p>
            </li>
          ))}
        </ul>
      )}

      {closing && (
        <p className="mx-auto mt-8 max-w-3xl text-[14px] sm:text-[15px] leading-[1.7] text-[var(--color-ink-2)] keep-all">
          {closing}
        </p>
      )}
    </div>
  );
}
