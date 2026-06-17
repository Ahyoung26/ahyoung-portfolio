import { Section, Eyebrow } from "@/components/primitives";
import { supportingProjects } from "@/data/portfolio";

/**
 * PAGE 10 — 주요 서비스 구축 경험 (Type A · Standard)
 */
export function Supporting() {
  return (
    <Section id="supporting" tone="alt" containerClassName="type-a-slide">
      <div className="type-a-layout">
        <header className="type-a-hero">
          <Eyebrow>{supportingProjects.label}</Eyebrow>
          <h2 className="type-hero-a mt-4 max-w-4xl keep-all text-balance">
            {supportingProjects.title}
          </h2>
          <p className="type-desc mt-5 max-w-3xl clamp-2 text-[var(--color-text-secondary)]">
            {supportingProjects.description}
          </p>
        </header>

        <ul className="type-a-content type-a-summary-grid">
          {supportingProjects.items.map((p) => (
            <li
              key={p.title}
              className="min-h-0 border-t border-[var(--color-border-divider)] pt-5"
            >
              <h3 className="type-section-title text-[var(--color-text-primary)] keep-all">
                {p.title}
              </h3>
              <ul className="mt-3 grid gap-[var(--space-list-gap)]">
                {p.highlights.map((item) => (
                  <li
                    key={item}
                    className="type-body text-[var(--color-text-secondary)] keep-all"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
