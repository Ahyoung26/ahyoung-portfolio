import {
  Section,
  Eyebrow,
  Highlight,
} from "@/components/primitives";
import { projectSlides, type ProjectSlideData } from "@/data/portfolio";
import { cn } from "@/lib/cn";

/**
 * TYPE B — 프로젝트 상세 장표 (PAGE 04~10)
 *
 * 100vh Flex hierarchy:
 * 1. Hero (flex-shrink: 0) — title always visible
 * 2. Main Grid 35:65 (flex: 1, overflow hidden)
 * 3. Footer: Insight pinned to bottom (flex-shrink: 0)
 */
export function ProjectSlides() {
  return (
    <>
      {projectSlides.map((slide) => (
        <ProjectSlide
          key={slide.id}
          slide={slide}
        />
      ))}
    </>
  );
}

function ProjectSlide({
  slide,
}: {
  slide: ProjectSlideData;
}) {
  const dark = slide.tone === "dark";
  const compactTitle = slide.title.length > 18;

  return (
    <Section
      id={slide.id}
      tone={slide.tone ?? "default"}
      containerClassName="type-b-slide"
    >
      {/* 2. Hero — full width, never shrinks */}
      <header className="type-b-hero">
        <Eyebrow tone={dark ? "white" : "accent"}>{slide.label}</Eyebrow>

        <h2
          className={cn(
            "clamp-2 mt-3 max-w-4xl font-bold leading-[1.3] tracking-[-0.03em] text-[var(--color-text-primary)] keep-all text-balance",
            compactTitle
              ? "text-[28px] sm:text-[34px] lg:text-[48px]"
              : "text-[32px] sm:text-[38px] lg:text-[52px]",
            dark && "text-white",
          )}
        >
          <Highlight tone={dark ? "dark" : "default"}>
            {slide.title}
          </Highlight>
        </h2>

        <p
          className={cn(
            "clamp-2 mt-4 max-w-3xl text-[15px] leading-[1.55] keep-all sm:text-[16px] lg:text-[18px]",
            dark ? "text-white/65" : "text-[var(--color-text-secondary)]",
          )}
        >
          <Highlight tone={dark ? "dark" : "default"}>
            {slide.description}
          </Highlight>
        </p>
      </header>

      {/* 3. Main Content Grid — flex: 1 */}
      <div className="type-b-body main-content-grid">
        <div className="type-b-left">
          <div className="type-b-main-content main-content">
            {slide.keyPoints.map((point) => (
              <section key={point.title} className="min-w-0">
                <h3
                  className={cn(
                    "font-semibold tracking-[-0.02em] keep-all",
                    point.title === "핵심 질문"
                      ? "text-[var(--color-primary-accent)]"
                      : dark
                        ? "text-white"
                        : "text-[var(--color-text-primary)]",
                  )}
                >
                  {point.title}
                </h3>
                <ul className="mt-1 grid gap-1">
                  {point.items.map((item) => (
                    <li
                      key={item}
                      className={cn(
                        "keep-all",
                        dark ? "text-white/55" : "text-[var(--color-text-secondary)]",
                      )}
                    >
                      <KeyPointItem text={item} dark={dark} />
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>

        <div className="type-b-visual">
          <ArtifactPlaceholder visual={slide.visual} dark={dark} />
        </div>
      </div>

      {/* 4. Footer — Insight pinned to bottom */}
      <div className="type-b-footer">
        <div
          className={cn(
            "type-b-insight border-t pt-4",
            dark ? "border-white/10" : "border-[var(--color-border-divider)]",
          )}
        >
          <div className="grid grid-cols-[4px_1fr] items-center gap-3">
            <span className="min-h-8 w-1 self-stretch bg-[var(--color-primary-accent)]" />
            <div className="space-y-2">
              {slide.insightLead && (
                <p
                  className={cn(
                    "text-[15px] font-medium leading-[1.45] tracking-[-0.02em] sm:text-[16px] lg:text-[18px]",
                    dark ? "text-white/75" : "text-[var(--color-text-secondary)]",
                  )}
                >
                  {slide.insightLead}
                </p>
              )}
              <p
                className={cn(
                  "text-[17px] font-bold leading-[1.35] tracking-[-0.02em] sm:text-[20px] lg:text-[24px]",
                  dark ? "text-white" : "text-[var(--color-text-primary)]",
                )}
              >
                <InsightHighlight text={slide.insight} dark={dark} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function KeyPointItem({ text, dark }: { text: string; dark: boolean }) {
  const isQuestion = text.includes("?") || text.endsWith("있는가");
  if (isQuestion) {
    return (
      <strong
        className={cn(
          "font-semibold",
          dark ? "text-white" : "text-[var(--color-primary-accent)]",
        )}
      >
        {text}
      </strong>
    );
  }
  return <span>{text}</span>;
}

function InsightHighlight({ text, dark }: { text: string; dark: boolean }) {
  return <Highlight tone={dark ? "dark" : "default"}>{text}</Highlight>;
}

function ArtifactPlaceholder({
  visual,
  dark,
}: {
  visual: ProjectSlideData["visual"];
  dark: boolean;
}) {
  return (
    <div
      data-slot={visual.slot}
      className={cn(
        "relative flex h-full min-h-0 w-full flex-col justify-between overflow-hidden p-4 sm:p-5 lg:p-8",
        dark
          ? "bg-[var(--color-background-dark)] text-white"
          : "bg-[var(--color-background-pure)] text-[var(--color-ink)]",
      )}
    >
      <div>
        <div
          className={cn(
            "text-[10px] font-bold uppercase tracking-[0.22em]",
            dark ? "text-white/45" : "text-[var(--color-ink-3)]",
          )}
        >
          Artifact Label
        </div>
        <h3 className="mt-1.5 text-[18px] font-bold leading-[1.15] tracking-[-0.03em] sm:text-[22px] lg:text-[28px]">
          {visual.title}
        </h3>
      </div>

      <div className="flex flex-1 items-end pb-1">
        <div className="max-w-2xl">
          <div
            className={cn(
              "text-[10px] font-bold uppercase tracking-[0.18em]",
              dark ? "text-white/35" : "text-[var(--color-ink-3)]",
            )}
          >
            Actual Artifact Area
          </div>
          <p
            className={cn(
              "mt-1.5 text-[14px] font-semibold leading-[1.5] tracking-[-0.01em] keep-all sm:text-[15px]",
              dark ? "text-white/65" : "text-[var(--color-text-secondary)]",
            )}
          >
            {visual.type}
          </p>
        </div>
      </div>
    </div>
  );
}
