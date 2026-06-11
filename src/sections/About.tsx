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
    <Section id="about" tone="default" containerClassName="type-a-slide">
      <div className="type-a-layout">
        <header className="type-a-hero max-w-6xl">
          <Eyebrow>{about.label}</Eyebrow>
          <h1 className="mt-4 whitespace-pre-line text-[34px] font-bold leading-[1.2] tracking-[-0.03em] keep-all text-balance sm:text-[42px] md:text-[50px] lg:text-[58px]">
            {about.title}
          </h1>
          <Body className="mt-[var(--space-component-gap)] max-w-3xl text-[16px] sm:text-[18px]">
            {about.description}
          </Body>
        </header>

        <div className="type-a-content type-a-about-grid">
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
    <section className="flex min-h-0 flex-col bg-white p-4">
      <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--color-ink-3)]">
        Category
      </div>
      <div className="mt-1 text-[13px] font-semibold text-[var(--color-accent)] keep-all">
        {strength.label}
      </div>

      <div className="mt-4">
        <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--color-ink-3)]">
          Title
        </div>
        <h3 className="mt-2 text-[22px] font-bold leading-[1.18] tracking-[-0.03em] text-[var(--color-text-primary)] keep-all lg:text-[24px]">
          {strength.title}
        </h3>
      </div>

      <div className="mt-4 border-t border-[var(--color-border-divider)] pt-4">
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
    <Section id="career" tone="alt" containerClassName="type-a-slide">
      <div className="type-a-layout">
        <header className="type-a-hero">
          <Eyebrow>{careerSummary.label}</Eyebrow>
          <h2 className="mt-3 max-w-5xl whitespace-pre-line text-[32px] font-bold leading-[1.2] tracking-[-0.03em] keep-all text-balance sm:text-[42px] lg:text-[56px]">
            {careerSummary.title}
          </h2>
          <Body className="mt-4 max-w-3xl text-[16px] sm:text-[18px]">
            {careerSummary.description}
          </Body>
        </header>

        <ol className="type-a-content type-a-career-grid">
          {careerSummary.timeline.map((career, index) => (
            <CareerCard key={career.company} career={career} index={index} />
          ))}
        </ol>

        <footer className="type-a-footer grid gap-3 lg:grid-cols-[1fr_0.82fr] lg:items-start">
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
    <li className="flex min-h-0 flex-col border-t border-[var(--color-border-divider)] pt-4">
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
        <h3 className="mt-2 text-[22px] font-semibold tracking-[-0.02em] text-[var(--color-text-primary)] keep-all lg:text-[24px]">
          {career.company}
        </h3>
      </div>

      <div className="mt-4">
        <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--color-ink-3)]">
          Role
        </div>
        <p className="mt-2 text-[15px] font-semibold text-[var(--color-accent)] keep-all">
          {career.role}
        </p>
      </div>

      <div className="mt-4">
        <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--color-ink-3)]">
          대표 프로젝트
        </div>
        <ul className="mt-2 grid gap-1">
          {career.items.map((item) => (
            <li
              key={item}
              className="text-[15px] font-normal leading-[1.5] text-[var(--color-text-secondary)] keep-all"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto pt-4">
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
