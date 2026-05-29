import { Section, InsightHero } from "@/components/primitives";
import { hypothesis } from "@/data/portfolio";

/**
 * PAGE 05 — HYPOTHESIS
 * 큰 인사이트 카드 1개 (단순 텍스트 섹션 금지)
 */
export function Hypothesis() {
  return (
    <Section id="hypothesis" tone="insight" size="xl">
      <InsightHero
        eyebrow={hypothesis.label}
        statement={
          <span>
            자연스러운 대화는{" "}
            <span className="text-[var(--color-accent)]">정확도</span>가 아니라{" "}
            <span className="text-[var(--color-accent)]">‘연결성’</span>에서
            결정될 수 있다
          </span>
        }
        evidence={hypothesis.evidence}
        message={hypothesis.message}
      />
    </Section>
  );
}
