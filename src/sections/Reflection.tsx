import { Section, QuoteHero } from "@/components/primitives";
import { reflection } from "@/data/portfolio";

/**
 * PAGE 12 — REFLECTION
 * 중앙 정렬 Quote Section.
 */
export function Reflection() {
  return (
    <Section id="reflection" tone="default" size="xl">
      <QuoteHero
        quote={reflection.quote}
        attribution="AI Service Planner · Ahyoung Kim"
        insights={reflection.insights}
        closing={reflection.closing}
      />
    </Section>
  );
}
