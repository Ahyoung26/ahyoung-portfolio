import {
  Section,
  Eyebrow,
  ImageSlot,
  Highlight,
} from "@/components/primitives";
import { projectSlides, type ProjectSlideData } from "@/data/portfolio";
import { cn } from "@/lib/cn";

/**
 * COMPONENT_GUIDE 기준 공통 프로젝트 장표.
 *
 * 모든 프로젝트 장표는 동일한 정보 구조를 따른다.
 * Hero → Key Point Section → Insight Section → Visual Section
 *
 * VISUAL_GUIDE 기준으로 Visual Section을 가장 큰 영역(60~70%)으로 둔다.
 */
export function ProjectSlides() {
  return (
    <>
      {projectSlides.map((slide, index) => (
        <ProjectSlide
          key={slide.id}
          slide={slide}
          index={index}
          previous={projectSlides[index - 1]}
          next={projectSlides[index + 1]}
        />
      ))}
    </>
  );
}

function ProjectSlide({
  slide,
  index,
  previous,
  next,
}: {
  slide: ProjectSlideData;
  index: number;
  previous?: ProjectSlideData;
  next?: ProjectSlideData;
}) {
  const dark = slide.tone === "dark";
  const compactTitle = slide.title.length > 18;

  return (
    <Section
      id={slide.id}
      tone={slide.tone ?? "default"}
      containerClassName="grid gap-6 lg:h-full lg:max-h-[100vh] lg:grid-rows-[minmax(0,1fr)_auto_auto] lg:gap-4"
    >
      <div className="grid min-h-0 gap-8 lg:grid-cols-[0.56fr_1fr] lg:items-center">
        {/* Left Content 35~40% */}
        <div className="min-w-0">
          <Eyebrow tone={dark ? "white" : "accent"}>{slide.label}</Eyebrow>

          <h2
            className={cn(
              "clamp-2 mt-4 max-w-[640px] font-bold leading-[1.08] tracking-[-0.04em] keep-all text-balance",
              compactTitle
                ? "text-[36px] sm:text-[42px] lg:text-[56px]"
                : "text-[40px] sm:text-[44px] lg:text-[64px]",
              dark ? "text-white" : "text-[var(--color-ink)]",
            )}
          >
            <Highlight tone={dark ? "dark" : "default"}>
              {slide.title}
            </Highlight>
          </h2>

          <p
            className={cn(
              "clamp-2 mt-4 max-w-[520px] text-[16px] leading-[1.6] keep-all sm:text-[18px] lg:text-[21px]",
              dark ? "text-white/65" : "text-[var(--color-ink-2)]",
            )}
          >
            <Highlight tone={dark ? "dark" : "default"}>
              {slide.description}
            </Highlight>
          </p>

          <ul
            className={cn(
              "mt-6 grid gap-y-4 border-t pt-5 md:grid-cols-3 md:gap-y-0",
              dark ? "border-white/10" : "border-[var(--color-line)]",
            )}
          >
            {slide.keyPoints.slice(0, 3).map((point, pointIndex) => (
              <li
                key={point.title}
                className={cn(
                  "min-w-0 md:px-4 md:first:pl-0",
                  pointIndex > 0 &&
                    (dark
                      ? "md:border-l md:border-white/10"
                      : "md:border-l md:border-[var(--color-line)]"),
                )}
              >
                <div
                  className={cn(
                    "text-[16px] font-bold tracking-[-0.02em] keep-all lg:text-[20px]",
                    dark ? "text-white" : "text-[var(--color-ink)]",
                  )}
                >
                  {point.title}
                </div>
                <div
                  className={cn(
                    "mt-1.5 text-[14px] leading-[1.5] keep-all lg:text-[16px]",
                    dark ? "text-white/50" : "text-[var(--color-ink-2)]",
                  )}
                >
                  {point.items.join(" · ")}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Visual 60~65% */}
        <div className="min-h-[260px] md:min-h-[320px] lg:h-full lg:min-h-0">
          <ImageSlot
            slot={slide.visual.slot}
            ratio="auto"
            tone={dark ? "dark" : "light"}
            className="h-full rounded-[28px]"
          >
            <ArtifactPlaceholder visual={slide.visual} dark={dark} />
          </ImageSlot>
        </div>
      </div>

      {/* Bottom Insight Bar: full-width conclusion */}
      <div
        className={cn(
          "flex items-center border-t px-1 py-3",
          dark ? "border-white/10" : "border-[var(--color-line)]",
        )}
      >
        <div className="grid w-full gap-2 sm:grid-cols-[96px_1fr] sm:items-center sm:gap-4">
          <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]">
            Insight
          </div>
          <p
            className={cn(
              "text-[16px] font-semibold leading-[1.45] tracking-[-0.01em] sm:text-[18px] lg:text-[21px]",
              dark ? "text-white" : "text-[var(--color-ink)]",
            )}
          >
            {slide.insight}
          </p>
        </div>
      </div>

      <SlidePagination
        dark={dark}
        index={index}
        current={slide}
        previous={previous}
        next={next}
      />
    </Section>
  );
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
      className={cn(
        "relative flex h-full w-full flex-col justify-between overflow-hidden p-5 sm:p-7 lg:p-10",
        dark
          ? "bg-[#0f0f12] text-white"
          : "bg-white text-[var(--color-ink)]",
      )}
    >
      <div className="relative flex items-start justify-between gap-6">
        <div>
          <div
            className={cn(
              "text-[11px] font-bold uppercase tracking-[0.22em]",
              dark ? "text-white/45" : "text-[var(--color-ink-3)]",
            )}
          >
            Artifact Label
          </div>
          <h3 className="mt-2 max-w-xl text-[24px] font-bold leading-[1.1] tracking-[-0.03em] sm:text-[32px] lg:text-[40px]">
            {visual.title}
          </h3>
        </div>
      </div>

      <div className="relative grid flex-1 place-items-center py-5 text-center lg:py-8">
        <div
          className={cn(
            "grid h-full min-h-[170px] w-full place-items-center rounded-2xl border sm:min-h-[220px] lg:min-h-[280px]",
            dark
              ? "border-white/10 bg-white/[0.03]"
              : "border-[var(--color-line)] bg-[var(--color-bg-alt)]",
          )}
        >
          <div
            className={cn(
              "flex h-16 w-16 items-center justify-center rounded-2xl border sm:h-20 sm:w-20",
              dark
                ? "border-white/15 text-white/45"
                : "border-[var(--color-line)] text-[var(--color-ink-3)]",
            )}
          >
            <span className="text-[13px] font-bold uppercase tracking-[0.18em]">
              Image Slot
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function SlidePagination({
  dark,
  index,
  current,
  previous,
  next,
}: {
  dark: boolean;
  index: number;
  current: ProjectSlideData;
  previous?: ProjectSlideData;
  next?: ProjectSlideData;
}) {
  const currentPage = current.label.match(/PAGE\s+(\d+)/)?.[1] ?? String(index + 3).padStart(2, "0");
  const totalPage = "10";

  return (
    <nav
      aria-label="Slide navigation"
      className={cn(
        "flex flex-wrap items-center justify-between gap-3 pb-1 text-[12px] sm:h-12 sm:flex-nowrap sm:pb-0",
        dark ? "text-white/45" : "text-[var(--color-ink-3)]",
      )}
    >
      <a
        href={previous ? `#${previous.id}` : "#project-summary"}
        className={cn(
          "inline-flex items-center gap-2 rounded-xl border px-3 py-2 transition-colors",
          dark
            ? "border-white/10 hover:bg-white/[0.04]"
            : "border-[var(--color-line)] hover:bg-[var(--color-bg-alt)]",
        )}
      >
        <span className="text-[18px] leading-none">←</span>
        <span className="hidden sm:inline">
          {previous ? previous.label.replace("PAGE ", "") : "03 · Project Summary"}
        </span>
      </a>

      <div className="order-first flex w-full items-center justify-center gap-3 sm:order-none sm:w-auto">
          <span className={cn("num font-semibold", dark ? "text-white/45" : "text-[var(--color-ink-3)]")}>
          {currentPage}
        </span>
        <span className={cn(dark ? "text-white/30" : "text-[var(--color-line-2)]")}>
          /
        </span>
        <span className="num">{totalPage}</span>
      </div>

      <a
        href={next ? `#${next.id}` : "#supporting"}
        className={cn(
          "inline-flex items-center gap-2 rounded-xl border px-3 py-2 transition-colors",
          dark
            ? "border-white/10 hover:bg-white/[0.04]"
            : "border-[var(--color-line)] hover:bg-[var(--color-bg-alt)]",
        )}
      >
        <span className="hidden sm:inline">
          {next ? next.label.replace("PAGE ", "") : "Supporting"}
        </span>
        <span className="text-[18px] leading-none">→</span>
      </a>
    </nav>
  );
}
