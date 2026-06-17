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
    <Section id="about" tone="chapter" containerClassName="type-a-slide">
      <div className="type-a-layout">
        <header className="type-a-hero max-w-6xl">
          <Eyebrow tone="chapter">{about.label}</Eyebrow>
          <h1 className="type-hero-a mt-4 whitespace-pre-line keep-all text-balance">
            {about.title}
          </h1>
          <Body className="type-desc mt-[var(--space-component-gap)] max-w-3xl clamp-2 text-white/80">
            {about.description}
          </Body>
        </header>

        <div className="type-a-content about-content">
          <div className="type-a-about-grid about-strength-grid">
            {about.strengths.map((strength) => (
              <StrengthBlock key={strength.label} strength={strength} />
            ))}
          </div>

          <div className="about-summary">
            {about.summary.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
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
    <section className="about-strength-card chapter-surface flex min-h-0 flex-col rounded-xl">
      <div className="text-[11px] font-medium text-white/65 keep-all">
        {strength.label}
      </div>
      <h3 className="type-section-title mt-2 text-white keep-all">
        {strength.title}
      </h3>
      <ul className="mt-3 grid gap-1">
        {strength.items.map((item) => (
          <li
            key={item}
            className="text-[13px] leading-[1.45] text-white/72 keep-all"
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-auto flex flex-wrap gap-2 pt-3">
        {strength.tools?.map((tool) => <ToolChip key={tool} tool={tool} />)}
      </div>
    </section>
  );
}

function ToolChip({ tool }: { tool: string }) {
  return (
    <span className="tool-icon" title={tool} aria-label={tool}>
      {getToolIcon(tool)}
    </span>
  );
}

function getToolIcon(tool: string) {
  const iconMap: Record<string, string> = {
    Amplitude: "A",
    GA: "G",
    "Google Analytics": "G",
    Notion: "N",
    Figma: "F",
    Cursor: "C",
    ChatGPT: "G",
    Claude: "C",
    Jira: "J",
  };

  return iconMap[tool] ?? tool[0]?.toUpperCase() ?? "?";
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
          <h2 className="type-hero-a mt-3 max-w-5xl keep-all text-balance">
            {careerSummary.title}
          </h2>
          <Body className="type-desc mt-4 max-w-3xl clamp-2">
            {careerSummary.description}
          </Body>
        </header>

        <ol className="type-a-content type-a-career-grid">
          {careerSummary.timeline.map((career, index) => (
            <CareerCard key={career.company} career={career} index={index} />
          ))}
        </ol>
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
    <li className="flex min-h-0 flex-col border-t border-[var(--color-border-divider)] pt-4">
      <div className="flex items-center justify-between gap-3">
        <span className="num text-[12px] font-semibold text-[var(--color-ink-3)]">
          0{index + 1}
        </span>
        <span className="num text-[12px] font-semibold tracking-[0.02em] text-[var(--color-ink-3)]">
          {career.period}
        </span>
      </div>

      <h3 className="type-section-title text-[var(--color-text-primary)] keep-all">
        {career.company}
      </h3>
      <p className="mt-1 text-[14px] font-medium text-[var(--color-primary-accent)] keep-all">
        {career.role}
      </p>

      <ul className="mt-4 grid gap-1.5">
        {career.items.map((item) => (
          <li
            key={item}
            className="type-body text-[var(--color-text-secondary)] keep-all"
          >
            {item}
          </li>
        ))}
      </ul>
    </li>
  );
}
