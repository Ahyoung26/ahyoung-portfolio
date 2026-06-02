import { Section, Eyebrow, Body } from "@/components/primitives";
import { careerSummary } from "@/data/portfolio";
import { cn } from "@/lib/cn";

/**
 * PAGE 03 — PROJECT SUMMARY
 *
 * 프로젝트 소개 영역이며, PAGE 04~10 Case Study Slide 구조를 사용하지 않는다.
 */
export function ProjectOverview() {
  const summary = careerSummary.projectSummary;

  return (
    <Section id="project-summary" tone="default">
      <div className="grid gap-7 lg:h-full lg:max-h-[100vh] lg:grid-rows-[auto_minmax(0,1fr)_auto]">
        <header>
          <Eyebrow>PROJECT SUMMARY</Eyebrow>
          <h2 className="mt-4 max-w-4xl text-[38px] font-bold leading-[1.08] tracking-[-0.04em] keep-all text-balance sm:text-[44px] md:text-[56px] lg:text-[68px]">
            Interactive Avatar 서비스 구축
          </h2>
          <Body className="mt-5 max-w-3xl text-[16px] sm:text-[18px] lg:text-[21px]">
            Avatar 생성부터 운영까지 대화형 AI 서비스를 서비스 관점에서 설계했습니다.
          </Body>
        </header>

        <div className="grid min-h-0 gap-5 lg:grid-cols-[1.05fr_1fr_1fr]">
          <ProjectInfoBlock
            title="프로젝트 배경"
            items={[
              "Chatbot 중심의 제한적인 대화 경험",
              "자연스러운 상호작용에 대한 사용자 요구 증가",
              "서비스 품질을 판단할 기준 부재",
            ]}
            primary
          />
          <ProjectInfoBlock
            title="수행 범위"
            items={[
              "Avatar 생성 경험 설계",
              "실시간 대화 경험 설계",
              "서비스 평가 기준 수립",
              "운영 프로세스 구축",
              "End-to-End 서비스 구조 설계",
            ]}
          />
          <ProjectInfoBlock title="주요 산출물" items={summary.outputs} />
        </div>

        <footer className="border-t border-[var(--color-line)] pt-5">
          <div className="grid gap-3 lg:grid-cols-[180px_1fr] lg:items-center">
            <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]">
              Project Summary
            </div>
            <p className="text-[20px] font-bold leading-[1.35] tracking-[-0.02em] keep-all sm:text-[24px] lg:text-[28px]">
              {summary.oneLiner}
            </p>
          </div>
        </footer>
      </div>
    </Section>
  );
}

function ProjectInfoBlock({
  title,
  items,
  primary = false,
}: {
  title: string;
  items: string[];
  primary?: boolean;
}) {
  return (
    <section
      className={cn(
        "min-h-0 border-t pt-4",
        primary
          ? "border-[var(--color-ink)]"
          : "border-[var(--color-line)]",
      )}
    >
      <h3 className="text-[20px] font-bold tracking-[-0.02em] keep-all sm:text-[24px]">
        {title}
      </h3>
      <ul className="mt-3 grid gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="text-[15px] leading-[1.55] text-[var(--color-ink-2)] keep-all sm:text-[16px]"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
