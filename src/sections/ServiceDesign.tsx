import {
  Section,
  SectionHeader,
  BigDiagram,
  FlowChain,
  Eyebrow,
  InsightText,
} from "@/components/primitives";
import { serviceDesign } from "@/data/portfolio";

/**
 * PAGE 06a — SERVICE DESIGN · Lifecycle (Large Process Diagram slide)
 * PAGE 06b — SERVICE DESIGN · Conversation & Operation flows
 */
export function ServiceDesign() {
  return (
    <>
      <ServiceLifecycle />
      <ServiceFlows />
    </>
  );
}

function ServiceLifecycle() {
  return (
    <Section id="service-design" tone="default" size="xl">
      <SectionHeader
        eyebrow={serviceDesign.label}
        title={
          <span className="whitespace-pre-line">{serviceDesign.title}</span>
        }
        subtitle={serviceDesign.description}
      />

      <div className="mt-7 lg:mt-8">
        <div className="mb-4 flex items-baseline justify-between">
          <Eyebrow>Service Lifecycle</Eyebrow>
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--color-ink-3)]">
            End-to-End · 7 Stages
          </span>
        </div>
        <BigDiagram nodes={serviceDesign.lifecycle} />
      </div>

      <InsightText className="mt-7">
        대화 UX만 설계한 것이 아니라, 서비스{" "}
        <span className="text-[var(--color-accent)]">
          생성부터 운영까지 전체 라이프사이클
        </span>
        을 설계했습니다.
      </InsightText>
    </Section>
  );
}

function ServiceFlows() {
  return (
    <Section id="service-flows" tone="alt" size="xl">
      <SectionHeader
        eyebrow="SERVICE DESIGN · FLOWS"
        title={
          <>
            대화 1턴과 운영 루프를{" "}
            <span className="text-[var(--color-accent)]">구조로 정의</span>
            했습니다
          </>
        }
        subtitle="실시간 대화 처리 흐름과 지속적인 품질 개선 루프를 분리해 설계"
      />

      <div className="mt-7 lg:mt-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-[var(--color-line)] bg-white p-6 lg:p-8">
          <div className="flex items-center justify-between mb-4">
            <Eyebrow>Conversation Flow</Eyebrow>
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--color-ink-3)]">
              Per turn · &lt; 3s
            </span>
          </div>
          <h3 className="text-[20px] sm:text-[24px] font-bold tracking-[-0.015em] keep-all mb-5">
            대화 1턴 — 7단계 처리 흐름
          </h3>
          <FlowChain steps={serviceDesign.conversationFlow} variant="column" />
        </div>

        <div className="rounded-3xl border border-[var(--color-ink)] bg-[var(--color-ink)] text-white p-6 lg:p-8">
          <div className="flex items-center justify-between mb-4">
            <Eyebrow tone="white">Operation Flow</Eyebrow>
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/50">
              Continuous Loop
            </span>
          </div>
          <h3 className="text-[20px] sm:text-[24px] font-bold tracking-[-0.015em] keep-all mb-5">
            운영 — 5단계 품질 개선 루프
          </h3>
          <FlowChain
            steps={serviceDesign.operationFlow}
            variant="column"
            tone="dark"
          />
        </div>
      </div>
    </Section>
  );
}
