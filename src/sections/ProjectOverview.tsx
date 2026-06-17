import { ArtifactImage, Section, Eyebrow, Body } from "@/components/primitives";
import { careerSummary } from "@/data/portfolio";

/**
 * PAGE 03 — PROJECT SUMMARY (Type A · Chapter)
 * Challenge / Approach / My Role — Insight Bar 없음
 */
export function ProjectOverview() {
  const summary = careerSummary.projectSummary;
  const rows = [
    { title: "Challenge", items: summary.challenge },
    { title: "Approach", items: summary.approach },
    { title: "My Role", items: summary.role },
  ];

  return (
    <Section id="project-summary" tone="chapter" containerClassName="type-a-slide">
      <div className="type-a-layout">
        <header className="type-a-hero">
          <Eyebrow tone="chapter">PROJECT SUMMARY</Eyebrow>
          <h2 className="type-hero-a mt-4 max-w-4xl keep-all text-balance">
            Interactive Avatar 서비스 구축
          </h2>
          <Body className="type-desc mt-5 max-w-3xl clamp-2 text-white/80">
            {summary.context}
          </Body>
        </header>

        <div className="type-a-content">
          <div className="project-overview-artifact chapter-surface">
            <ArtifactImage pageLabel="PAGE 03" alt="Interactive Avatar project overview artifact">
              <div className="type-a-summary-grid">
                {rows.map((row) => (
                  <ProjectSummaryRow key={row.title} title={row.title} items={row.items} />
                ))}
              </div>
            </ArtifactImage>
          </div>
        </div>
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
      <h3 className="type-section-title text-white keep-all">{title}</h3>
      <ul className="mt-3 grid gap-[var(--space-list-gap)]">
        {items.map((item) => (
          <li key={item} className="type-body text-white/75 keep-all">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
