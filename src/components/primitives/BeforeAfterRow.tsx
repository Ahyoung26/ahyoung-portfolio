import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type BeforeAfter = {
  topic: ReactNode;
  before: ReactNode;
  after: ReactNode;
  delta?: ReactNode;
};

/**
 * Big Before/After KPI rows — RESULT 섹션 전용.
 * 한 줄에 큰 비교 (없음 → 구축 식).
 */
export function BeforeAfterStack({
  rows,
  className,
}: {
  rows: BeforeAfter[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-3xl border border-[var(--color-line)] bg-white",
        className,
      )}
    >
      <div className="grid grid-cols-12 border-b border-[var(--color-line)] bg-[var(--color-bg-alt)] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-ink-3)]">
        <div className="col-span-3">Topic</div>
        <div className="col-span-4">Before</div>
        <div className="col-span-4">After</div>
        <div className="col-span-1 text-right">Δ</div>
      </div>
      <ul>
        {rows.map((row, i) => (
          <li
            key={i}
            className="grid grid-cols-12 items-center gap-4 border-b last:border-b-0 border-[var(--color-line)] px-5 py-4 lg:py-5"
          >
            <div className="col-span-3">
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-ink-3)] mb-1">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="text-[16px] sm:text-[18px] font-bold tracking-[-0.01em] keep-all">
                {row.topic}
              </div>
            </div>
            <div className="col-span-4">
              <div className="rounded-xl border border-dashed border-[var(--color-line-2)] bg-[var(--color-bg-alt)] px-4 py-3 text-[14px] sm:text-[15px] font-medium text-[var(--color-ink-2)] keep-all line-through decoration-[var(--color-ink-3)]/40 decoration-[1px]">
                {row.before}
              </div>
            </div>
            <div className="col-span-4">
              <div className="rounded-xl border border-[var(--color-accent-m)] bg-[var(--color-bg-insight)] px-4 py-3 text-[14px] sm:text-[15px] font-bold text-[var(--color-ink)] keep-all">
                {row.after}
              </div>
            </div>
            <div className="col-span-1 text-right">
              <span className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
                {row.delta ?? "→"}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
