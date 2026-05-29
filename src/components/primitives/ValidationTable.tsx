import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type ValidationCase = {
  no: string;
  hypothesis: ReactNode;
  experiment: ReactNode;
  result: ReactNode;
  insight: ReactNode;
  verdict?: "Confirm" | "Reject" | "Partial" | string;
};

/**
 * Validation Table — Hypothesis / Experiment / Result / Insight 비교형.
 * Editorial table style.
 */
export function ValidationTable({
  cases,
  className,
}: {
  cases: ValidationCase[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-3xl border border-[var(--color-line)] bg-white",
        className,
      )}
    >
      <div className="hidden lg:grid grid-cols-[60px_1.4fr_1fr_1fr_1.2fr_120px] gap-4 border-b border-[var(--color-line)] bg-[var(--color-bg-alt)] px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-ink-3)]">
        <div>No.</div>
        <div>Hypothesis</div>
        <div>Experiment</div>
        <div>Result</div>
        <div>Insight</div>
        <div className="text-right">Verdict</div>
      </div>
      <ul>
        {cases.map((c, i) => (
          <li
            key={i}
            className={cn(
              "grid gap-4 border-b last:border-b-0 border-[var(--color-line)] px-6 py-7",
              "lg:grid-cols-[60px_1.4fr_1fr_1fr_1.2fr_120px] lg:items-start",
            )}
          >
            <div className="num text-[28px] sm:text-[32px] font-bold tracking-[-0.04em] text-[var(--color-accent)]">
              {c.no}
            </div>

            <div className="lg:pr-4">
              <Label>Hypothesis</Label>
              <p className="mt-1 text-[15px] sm:text-[16px] font-bold leading-[1.45] keep-all">
                {c.hypothesis}
              </p>
            </div>
            <div className="lg:pr-4 lg:border-l lg:border-[var(--color-line)] lg:pl-4">
              <Label>Experiment</Label>
              <p className="mt-1 text-[14px] leading-[1.55] text-[var(--color-ink-2)] keep-all">
                {c.experiment}
              </p>
            </div>
            <div className="lg:pr-4 lg:border-l lg:border-[var(--color-line)] lg:pl-4">
              <Label>Result</Label>
              <p className="mt-1 text-[14px] leading-[1.55] text-[var(--color-ink)] font-semibold keep-all">
                {c.result}
              </p>
            </div>
            <div className="lg:border-l lg:border-[var(--color-line)] lg:pl-4">
              <Label>Insight</Label>
              <p className="mt-1 text-[14px] leading-[1.55] text-[var(--color-ink-2)] keep-all">
                {c.insight}
              </p>
            </div>
            <div className="lg:text-right">
              <span
                className={cn(
                  "inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em]",
                  c.verdict === "Confirm"
                    ? "bg-[var(--color-bg-insight)] text-[var(--color-accent)] border-[var(--color-accent-m)]"
                    : c.verdict === "Reject"
                    ? "bg-[#fff1f0] text-[#b42318] border-[#f8c5c0]"
                    : "bg-[var(--color-bg-alt)] text-[var(--color-ink-2)] border-[var(--color-line)]",
                )}
              >
                {c.verdict ?? "—"}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Label({ children }: { children: ReactNode }) {
  return (
    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-ink-3)]">
      {children}
    </div>
  );
}
