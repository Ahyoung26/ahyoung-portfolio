import {
  Section,
  SectionHeader,
  BeforeAfterStack,
  KPIBlock,
  Eyebrow,
} from "@/components/primitives";
import { result } from "@/data/portfolio";

/**
 * PAGE 11 — RESULT (Result Slide)
 * Headline KPI + Before/After. 없음 → 구축.
 */
export function Result() {
  return (
    <Section id="result" tone="default" size="xl">
      <SectionHeader
        eyebrow={result.label}
        title={<span className="whitespace-pre-line">{result.title}</span>}
        subtitle={result.message}
      />

      {/* Headline KPI — inline row */}
      <div className="mt-8 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-line)]">
        {result.keyMetrics.map((m, i) => (
          <div key={i} className="bg-[var(--color-bg-alt)] p-6 lg:p-7">
            <KPIBlock value={m.value} label={m.label} size="lg" tone="accent" />
          </div>
        ))}
      </div>

      {/* Before / After Stack */}
      <div className="mt-8">
        <div className="mb-4 flex items-baseline justify-between">
          <Eyebrow>Before · After</Eyebrow>
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--color-ink-3)]">
            Structural Change
          </span>
        </div>
        <BeforeAfterStack rows={result.beforeAfter} />
      </div>
    </Section>
  );
}
