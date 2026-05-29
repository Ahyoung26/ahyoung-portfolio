import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * InsightHero — 가설 / 핵심 인사이트를 1개의 큰 카드로 표현.
 */
export function InsightHero({
  eyebrow,
  statement,
  evidence,
  message,
  className,
}: {
  eyebrow?: ReactNode;
  statement: ReactNode;
  evidence?: ReactNode[] | string[];
  message?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-[var(--color-accent-m)] bg-[var(--color-bg-insight)] px-6 py-10 sm:px-12 sm:py-12 lg:px-16 lg:py-16",
        className,
      )}
    >
      {/* corner accent */}
      <div
        aria-hidden
        className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[var(--color-accent)] opacity-[0.06] blur-3xl"
      />
      {eyebrow && (
        <div className="mb-6 text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--color-accent)]">
          {eyebrow}
        </div>
      )}
      <div className="flex items-start gap-3">
        <div
          aria-hidden
          className="mt-2 h-10 w-1 rounded-full bg-[var(--color-accent)]"
        />
        <h3 className="text-[26px] sm:text-[36px] lg:text-[46px] font-bold tracking-[-0.02em] leading-[1.15] text-[var(--color-ink)] keep-all text-balance">
          {statement}
        </h3>
      </div>

      {evidence && evidence.length > 0 && (
        <ul className="mt-8 grid gap-3 sm:grid-cols-3">
          {evidence.map((e, i) => (
            <li
              key={i}
              className="rounded-2xl border border-[var(--color-line)] bg-white px-5 py-5"
            >
              <div className="mb-3 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                <span className="num">{String(i + 1).padStart(2, "0")}</span>
                Evidence
              </div>
              <div className="text-[14px] leading-[1.6] text-[var(--color-ink-2)] keep-all">
                {e}
              </div>
            </li>
          ))}
        </ul>
      )}

      {message && (
        <p className="mt-7 text-[15px] sm:text-[17px] leading-[1.65] text-[var(--color-ink-2)] keep-all max-w-3xl">
          {message}
        </p>
      )}
    </div>
  );
}
