import { Section, Eyebrow, Body } from "@/components/primitives";
import { about, careerSummary } from "@/data/portfolio";

/**
 * PAGE 01 — ABOUT ME (나는 어떤 기획자인가 - 5초 인상 페이지)
 * PAGE 02 — CAREER SUMMARY (어떤 경험을 해왔는가 - 커리어 타임라인 중심 페이지)
 */
export function About() {
  return (
    <>
      <AboutMe />
      <CareerSummary />
    </>
  );
}

/* ==========================================
   PAGE 01: ABOUT ME (나는 어떤 기획자인가)
   ========================================== */
function AboutMe() {
  return (
    <Section id="about" tone="default">
      <div className="grid h-full max-h-[100vh] grid-rows-[auto_auto_minmax(0,1fr)]">
        <header>
          <Eyebrow>{about.label}</Eyebrow>
          <h1 className="mt-4 max-w-5xl text-[44px] font-bold leading-[1.08] tracking-[-0.04em] keep-all text-balance sm:text-[60px] lg:text-[76px]">
            문제를 정의하고
            <br />
            서비스로 검증하는 기획자
          </h1>
        </header>

        <Body className="mt-5 max-w-2xl text-[18px] sm:text-[22px]">
          사용자 문제를 발견하고, 서비스 구조를 설계하며, 데이터와 검증을 통해 개선합니다.
        </Body>

        <div className="mt-10 grid min-h-0 gap-4 sm:grid-cols-2">
          {about.strengths.map((strength) => (
            <StrengthBlock key={strength.label} strength={strength} />
          ))}
        </div>
      </div>
    </Section>
  );
}

function StrengthBlock({
  strength,
}: {
  strength: {
    label: string;
    title: string;
    items: string[];
    tools?: string[];
  };
}) {
  return (
    <section className="flex min-h-0 flex-col justify-between rounded-2xl border border-[var(--color-line)] bg-white p-6">
      <div>
        <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-ink-3)]">
          {strength.label}
        </div>
        <h3 className="mt-2 text-[24px] font-bold tracking-[-0.03em] keep-all sm:text-[30px]">
          {strength.title}
        </h3>
        <ul className="mt-4 grid gap-2">
          {strength.items.map((item) => (
            <li
              key={item}
              className="text-[15px] leading-[1.45] text-[var(--color-ink-2)] keep-all sm:text-[16px]"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-5 border-t border-[var(--color-line)] pt-3">
        <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--color-ink-3)]">
          Tools
        </div>
        <div className="mt-2 flex flex-wrap gap-x-2 gap-y-1 text-[12px] font-medium text-[var(--color-ink-2)]">
          {strength.tools?.map((tool) => <span key={tool}>{tool}</span>)}
        </div>
      </div>
    </section>
  );
}

/* ==========================================
   PAGE 02: CAREER SUMMARY (어떤 경험을 해왔는가)
   ========================================== */
function CareerSummary() {
  return (
    <Section id="career" tone="alt">
      <div className="grid h-full max-h-[100vh] grid-rows-[auto_minmax(0,1fr)_auto]">
        <header className="grid gap-5 lg:grid-cols-[0.55fr_1fr] lg:items-end">
          <div>
            <Eyebrow>{careerSummary.label}</Eyebrow>
            <h2 className="mt-3 max-w-3xl text-[30px] font-bold leading-[1.12] tracking-[-0.03em] keep-all text-balance sm:text-[40px] lg:text-[48px]">
              {careerSummary.title}
            </h2>
          </div>
          <Body className="max-w-2xl text-[16px] sm:text-[19px]">
            {careerSummary.description}
          </Body>
        </header>

        <ol className="mt-8 grid min-h-0 gap-4 md:grid-cols-3">
          {careerSummary.timeline.map((career, index) => (
            <CareerCard key={career.company} career={career} index={index} />
          ))}
        </ol>

        <footer className="mt-6 grid gap-4 border-t border-[var(--color-line)] pt-4 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div className="flex flex-wrap gap-2">
            {careerSummary.experienceSummary.map((exp: string) => (
              <span
                key={exp}
                className="rounded-full border border-[var(--color-line)] bg-white px-3 py-1 text-[12px] font-medium text-[var(--color-ink-2)]"
              >
                {exp}
              </span>
            ))}
          </div>
          <p className="text-[14px] leading-[1.65] text-[var(--color-ink-2)] keep-all lg:text-right">
            {careerSummary.keyMessage}
          </p>
        </footer>
      </div>
    </Section>
  );
}

function CareerCard({
  career,
  index,
}: {
  career: {
    period: string;
    company: string;
    role: string;
    items: string[];
  };
  index: number;
}) {
  return (
    <li className="flex min-h-0 flex-col rounded-2xl border border-[var(--color-line)] bg-white p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="num text-[12px] font-semibold tracking-[0.02em] text-[var(--color-ink-3)]">
            {career.period}
          </div>
          <h3 className="mt-2 text-[22px] font-bold tracking-[-0.03em] keep-all">
            {career.company}
          </h3>
          <div className="mt-1 text-[13px] font-semibold text-[var(--color-accent)]">
            {career.role}
          </div>
        </div>
        <span className="num text-[12px] font-semibold text-[var(--color-ink-3)]">
          0{index + 1}
        </span>
      </div>

      <div className="mt-5 border-t border-[var(--color-line)] pt-4">
        <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--color-ink-3)]">
          대표 프로젝트
        </div>
        <ul className="mt-2 grid gap-1.5">
          {career.items.map((item) => (
            <li
              key={item}
              className="text-[14px] leading-[1.45] text-[var(--color-ink-2)] keep-all"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto border-t border-[var(--color-line)] pt-4">
        <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--color-ink-3)]">
          핵심 역할
        </div>
        <p className="mt-2 text-[14px] leading-[1.5] text-[var(--color-ink)] keep-all">
          {career.role === "AI 서비스 기획"
            ? "AI SaaS 서비스 구조 설계와 운영 기반 구축"
            : "서비스 운영 구조 설계와 정책/프로세스 개선"}
        </p>
      </div>
    </li>
  );
}
