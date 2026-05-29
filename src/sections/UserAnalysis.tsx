import {
  Section,
  SectionHeader,
  Eyebrow,
  VOCCluster,
  InsightText,
} from "@/components/primitives";
import { userAnalysis } from "@/data/portfolio";

/**
 * PAGE 04 — USER ANALYSIS
 * VOC Cluster + Insight Card (텍스트 나열 금지).
 */
export function UserAnalysis() {
  return (
    <Section id="user-analysis" tone="default" size="xl">
      <SectionHeader
        eyebrow={userAnalysis.label}
        title={
          <span className="whitespace-pre-line">{userAnalysis.title}</span>
        }
        subtitle="‘답변 내용’보다 ‘상호작용 과정에서 체감하는 경험’에 더 민감하게 반응"
      />

      <div className="mt-8 lg:mt-10 grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_1fr]">
        {/* VOC Cluster bar chart */}
        <VOCCluster items={userAnalysis.vocClusters} />

        {/* Methods + Insight Card */}
        <div className="flex flex-col gap-5">
          {/* Methods card */}
          <div className="rounded-2xl border border-[var(--color-line)] bg-white p-6">
            <Eyebrow>Research Methods</Eyebrow>
            <ul className="mt-4 grid grid-cols-1 gap-2.5">
              {userAnalysis.methods.map((m, i) => (
                <li
                  key={i}
                  className="flex items-center justify-between border-b last:border-b-0 border-[var(--color-line)] pb-2.5 last:pb-0"
                >
                  <span className="text-[14px] font-medium text-[var(--color-ink)] keep-all">
                    {m}
                  </span>
                  <span className="num text-[10px] font-bold tracking-[0.18em] uppercase text-[var(--color-ink-3)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Big Insight Card */}
          <div className="rounded-3xl border-2 border-[var(--color-ink)] bg-[var(--color-ink)] text-white p-7 lg:p-8">
            <Eyebrow tone="white">Insight</Eyebrow>
            <p className="mt-5 text-[20px] sm:text-[24px] font-bold leading-[1.4] tracking-[-0.015em] keep-all">
              {userAnalysis.insight}
            </p>
          </div>
        </div>
      </div>

      {/* Key message — full-width pull quote */}
      <div className="mt-8 lg:mt-10 border-t border-[var(--color-line)] pt-8">
        <div className="grid gap-6 lg:grid-cols-[180px_1fr] lg:gap-12">
          <Eyebrow>Key Message</Eyebrow>
          <InsightText>
            문제는 <span className="text-[var(--color-accent)]">AI 성능</span>{" "}
            자체가 아니라, 사용자가 체감하는{" "}
            <span className="text-[var(--color-accent)]">상호작용 경험</span>에
            있을 수 있다.
          </InsightText>
        </div>
      </div>
    </Section>
  );
}
