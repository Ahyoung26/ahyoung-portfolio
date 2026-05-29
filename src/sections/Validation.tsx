import {
  Section,
  SectionHeader,
  ValidationTable,
  Eyebrow,
} from "@/components/primitives";
import { validation } from "@/data/portfolio";

/**
 * PAGE 09 — VALIDATION
 * 가설 / 실험 / 결과 / 인사이트 비교형 테이블.
 */
export function Validation() {
  return (
    <Section id="validation" tone="default" size="xl">
      <SectionHeader
        eyebrow={validation.label}
        title={
          <span className="whitespace-pre-line">{validation.title}</span>
        }
        subtitle="‘추정 기반 논의’를 ‘데이터 기반 인사이트’로 전환한 3가지 실험 사례"
      />

      <div className="mt-8 lg:mt-10">
        <ValidationTable cases={validation.cases} />
      </div>

      {/* Bottom insight band — compact */}
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {[
          {
            title: "Reject도 의미 있음",
            desc: "모두 reject 되었지만 원인 영역을 좁힐 수 있었다.",
          },
          {
            title: "다중 요인",
            desc: "스트리밍 · 동기화 · 원본 품질이 함께 작용.",
          },
          {
            title: "기준 없는 개선의 위험",
            desc: "검증 체계 없으면 ‘개선’이 ‘재추정’으로 회귀.",
          },
        ].map((c, i) => (
          <div
            key={i}
            className="rounded-xl border border-[var(--color-line)] bg-[var(--color-bg-alt)] px-4 py-3"
          >
            <Eyebrow>{`Insight 0${i + 1}`}</Eyebrow>
            <h4 className="mt-1.5 text-[14px] font-bold tracking-[-0.01em] keep-all">
              {c.title}
            </h4>
            <p className="mt-1 text-[12px] leading-[1.5] text-[var(--color-ink-2)] keep-all">
              {c.desc}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
