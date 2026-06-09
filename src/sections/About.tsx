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
        <header className="max-w-6xl">
          <Eyebrow>{about.label}</Eyebrow>
          <h1 className="mt-4 whitespace-pre-line text-[38px] font-bold leading-[1.16] tracking-[-0.03em] keep-all text-balance sm:text-[44px] md:text-[56px] lg:text-[64px]">
            {about.title}
          </h1>
        </header>

        <Body className="mt-[var(--space-component-gap)] max-w-3xl whitespace-pre-line text-[16px] sm:text-[18px] lg:text-[20px]">
          {about.description}
        </Body>

        <div className="mt-[var(--space-section-gap)] grid min-h-0 gap-[var(--space-card-gap)] sm:grid-cols-2 lg:grid-cols-4">
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
    <section className="flex min-h-0 flex-col rounded-2xl border border-[var(--color-border-divider)] bg-white p-5 shadow-[0_10px_30px_rgba(17,24,39,0.03)]">
      <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--color-ink-3)]">
        Category
      </div>
      <div className="mt-1 text-[13px] font-semibold text-[var(--color-accent)] keep-all">
        {strength.label}
      </div>

      <div className="mt-6">
        <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--color-ink-3)]">
          Title
        </div>
        <h3 className="mt-2 text-[24px] font-bold leading-[1.12] tracking-[-0.03em] text-[var(--color-text-primary)] keep-all sm:text-[26px] lg:text-[28px]">
          {strength.title}
        </h3>
      </div>

      <div className="mt-6 border-t border-[var(--color-border-divider)] pt-4">
        <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--color-ink-3)]">
          Task List
        </div>
        <ul className="mt-2 grid gap-1.5">
          {strength.items.map((item) => (
            <li
              key={item}
              className="text-[14px] leading-[1.55] text-[var(--color-text-secondary)] keep-all sm:text-[15px]"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto border-t border-[var(--color-border-divider)] pt-4">
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
    <span className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[var(--color-text-secondary)]">
      <span className="grid h-[18px] w-[18px] place-items-center rounded-sm border border-[var(--color-border-divider)] text-[9px] font-bold text-[var(--color-ink-3)]">
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
        <header>
          <Eyebrow>{careerSummary.label}</Eyebrow>
          <h2 className="mt-3 max-w-5xl whitespace-pre-line text-[32px] font-bold leading-[1.18] tracking-[-0.03em] keep-all text-balance sm:text-[42px] lg:text-[56px]">
            {careerSummary.title}
          </h2>
          <Body className="mt-4 max-w-3xl whitespace-pre-line text-[16px] sm:text-[18px] lg:text-[20px]">
            {careerSummary.description}
          </Body>
        </header>

        <ol className="mt-8 grid min-h-0 border-y border-[var(--color-border-divider)] lg:mt-10">
          {careerSummary.timeline.map((career, index) => (
            <CareerCard key={career.company} career={career} index={index} />
          ))}
        </ol>

        <footer className="mt-5 grid gap-3 lg:grid-cols-[1fr_0.82fr] lg:items-start">
          <div className="flex flex-wrap gap-2">
            {careerSummary.experienceSummary.map((exp: string) => (
              <span
                key={exp}
                className="rounded-full border border-[var(--color-border-divider)] bg-white px-3 py-1 text-[12px] font-medium text-[var(--color-text-secondary)]"
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
    <li className="grid min-h-0 gap-4 border-b border-[var(--color-border-divider)] py-4 last:border-b-0 lg:grid-cols-[0.16fr_0.22fr_0.18fr_0.28fr_0.16fr] lg:items-start">
      <div className="flex items-center justify-between gap-4 lg:block">
        <span className="num text-[12px] font-semibold text-[var(--color-ink-3)]">
          0{index + 1}
        </span>
        <div className="num text-[12px] font-semibold tracking-[0.02em] text-[var(--color-ink-3)] lg:mt-4">
          {career.period}
        </div>
      </div>

      <div>
        <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--color-ink-3)]">
          Company
        </div>
        <h3 className="mt-2 text-[24px] font-semibold tracking-[-0.02em] text-[var(--color-text-primary)] keep-all">
          {career.company}
        </h3>
      </div>

      <div>
        <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--color-ink-3)]">
          Role
        </div>
        <p className="mt-2 text-[15px] font-semibold text-[var(--color-accent)] keep-all">
          {career.role}
        </p>
      </div>

      <div>
        <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--color-ink-3)]">
          대표 프로젝트
        </div>
        <ul className="mt-2 grid gap-1">
          {career.items.map((item) => (
            <li
              key={item}
              className="text-[16px] font-normal leading-[1.6] text-[var(--color-text-secondary)] keep-all"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div>
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
