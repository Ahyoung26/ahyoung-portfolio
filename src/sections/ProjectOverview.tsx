import { Section, Eyebrow, Body } from "@/components/primitives";
import { careerSummary } from "@/data/portfolio";

/**
 * PAGE 03 — PROJECT SUMMARY
 *
 * 프로젝트 소개 영역이며, PAGE 04~10 Case Study Slide 구조를 사용하지 않는다.
 */
export function ProjectOverview() {
  const summary = careerSummary.projectSummary;
  const rows = [
    { title: "프로젝트 배경", items: summary.background },
    { title: "수행 범위", items: summary.scope },
    { title: "프로젝트 역할", items: summary.role },
  ];

  return (
    <Section id="project-summary" tone="default">
      <div className="grid gap-7 lg:h-full lg:max-h-[100vh] lg:grid-rows-[auto_minmax(0,1fr)_auto]">
        <header>
          <Eyebrow>PROJECT SUMMARY</Eyebrow>
          <h2 className="mt-4 max-w-4xl text-[38px] font-bold leading-[1.18] tracking-[-0.03em] keep-all text-balance sm:text-[44px] md:text-[56px] lg:text-[64px]">
            Interactive Avatar 서비스 구축
          </h2>
          <Body className="mt-5 max-w-3xl whitespace-pre-line text-[16px] sm:text-[18px] lg:text-[21px]">
            {summary.context}
          </Body>
        </header>

        <div className="grid min-h-0 gap-[var(--space-component-gap)] sm:grid-cols-2 lg:grid-cols-3">
          {rows.map((row) => (
            <ProjectSummaryRow key={row.title} title={row.title} items={row.items} />
          ))}
        </div>

        <footer className="pt-[var(--space-component-gap)]">
          <div className="grid grid-cols-[4px_1fr] items-center gap-4">
            <span className="min-h-10 w-1 self-stretch bg-[var(--color-primary-accent)]" />
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-primary-accent)]">
                Insight
              </div>
              <p className="mt-2 text-[18px] font-bold leading-[1.4] tracking-[-0.02em] keep-all sm:text-[20px] lg:text-[24px]">
                {summary.insight}
              </p>
              <p className="mt-2 text-[16px] font-semibold leading-[1.45] tracking-[-0.02em] text-[var(--color-primary-accent)] keep-all sm:text-[18px] lg:text-[20px]">
                {summary.oneLiner}
              </p>
            </div>
          </div>
        </footer>
      </div>
    </Section>
  );
}

function ProjectSummaryRow({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <section className="min-h-0">
      <h3 className="text-[18px] font-semibold tracking-[-0.02em] text-[var(--color-text-primary)] keep-all sm:text-[20px]">
        {title}
      </h3>
      <ul className="mt-3 grid gap-[var(--space-list-gap)]">
        {items.map((item) => (
          <li
            key={item}
            className="text-[16px] leading-[1.6] text-[var(--color-text-secondary)] keep-all"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
