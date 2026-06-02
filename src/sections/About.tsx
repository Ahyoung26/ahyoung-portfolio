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
      <div className="grid gap-0 lg:h-full lg:max-h-[100vh] lg:grid-rows-[auto_auto_minmax(0,1fr)]">
        <header className="max-w-5xl">
          <Eyebrow>{about.label}</Eyebrow>
          <h1 className="mt-4 whitespace-pre-line text-[38px] font-bold leading-[1.08] tracking-[-0.04em] keep-all text-balance sm:text-[44px] md:text-[56px] lg:text-[64px]">
            {about.title}
          </h1>
        </header>

        <Body className="mt-4 max-w-3xl text-[16px] sm:text-[18px] lg:text-[20px]">
          {about.description}
        </Body>

        <div className="mt-7 grid min-h-0 gap-3 lg:mt-8 lg:grid-rows-4">
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
    <section className="grid min-h-0 gap-4 rounded-2xl border border-[var(--color-line)] bg-white p-4 sm:p-5 lg:grid-cols-[0.85fr_1.1fr_1.55fr] lg:items-center">
      <div>
        <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--color-ink-3)]">
          Category
        </div>
        <div className="mt-1 text-[13px] font-semibold text-[var(--color-accent)] keep-all">
          {strength.label}
        </div>
        <div className="mt-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--color-ink-3)]">
          Title
        </div>
        <h3 className="mt-1 text-[24px] font-bold tracking-[-0.03em] keep-all sm:text-[28px] lg:text-[30px]">
          {strength.title}
        </h3>
      </div>

      <div className="border-t border-[var(--color-line)] pt-4 lg:border-l lg:border-t-0 lg:py-1 lg:pl-5">
        <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--color-ink-3)]">
          Task List
        </div>
        <ul className="mt-2 grid gap-1.5">
          {strength.items.map((item) => (
            <li
              key={item}
              className="text-[14px] leading-[1.45] text-[var(--color-ink-2)] keep-all sm:text-[15px]"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-[var(--color-line)] pt-4 lg:border-l lg:border-t-0 lg:py-1 lg:pl-5">
        <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--color-ink-3)]">
          Tool List
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          {strength.tools?.map((tool) => <ToolChip key={tool} tool={tool} />)}
        </div>
      </div>
    </section>
  );
}

function ToolChip({ tool }: { tool: string }) {
  const initials = tool
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2);

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-line)] bg-[var(--color-bg-alt)] px-2.5 py-1 text-[12px] font-medium text-[var(--color-ink-2)]">
      <span className="grid h-5 w-5 place-items-center rounded-full border border-[var(--color-line-2)] text-[10px] font-bold text-[var(--color-ink-3)]">
        {initials}
      </span>
      {tool}
    </span>
  );
}

/* ==========================================
   PAGE 02: CAREER SUMMARY (어떤 경험을 해왔는가)
   ========================================== */
function CareerSummary() {
  return (
    <Section id="career" tone="alt">
      <div className="grid gap-0 lg:h-full lg:max-h-[100vh] lg:grid-rows-[auto_minmax(0,1fr)_auto]">
        <header className="grid gap-4 lg:grid-cols-[0.62fr_1fr] lg:items-end">
          <div>
            <Eyebrow>{careerSummary.label}</Eyebrow>
            <h2 className="mt-3 max-w-3xl whitespace-pre-line text-[30px] font-bold leading-[1.12] tracking-[-0.03em] keep-all text-balance sm:text-[36px] lg:text-[42px]">
              {careerSummary.title}
            </h2>
          </div>
          <Body className="max-w-2xl text-[16px] sm:text-[17px] lg:text-[18px]">
            {careerSummary.description}
          </Body>
        </header>

        <ol className="mt-8 grid min-h-0 gap-4 md:grid-cols-3">
          {careerSummary.timeline.map((career, index) => (
            <CareerCard key={career.company} career={career} index={index} />
          ))}
        </ol>

        <footer className="mt-5 grid gap-3 border-t border-[var(--color-line)] pt-4 lg:grid-cols-[1fr_0.82fr] lg:items-start">
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
          <p className="text-[13px] leading-[1.55] text-[var(--color-ink-3)] keep-all lg:text-right">
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
    roleSummary?: string;
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
              className="text-[14px] leading-[1.42] text-[var(--color-ink-2)] keep-all"
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
          {career.roleSummary}
        </p>
      </div>
    </li>
  );
}
