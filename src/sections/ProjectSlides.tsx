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
      containerClassName="grid h-full max-h-[100vh] grid-rows-[minmax(0,1fr)_auto_auto] gap-4"
    >
      <div className="grid min-h-0 items-center gap-8 lg:grid-cols-[0.56fr_1fr]">
        {/* Left Content 35~40% */}
        <div className="min-w-0">
          <Eyebrow tone={dark ? "white" : "accent"}>{slide.label}</Eyebrow>

          <h2
            className={cn(
              "clamp-2 mt-4 max-w-[640px] font-bold leading-[1.08] tracking-[-0.04em] keep-all text-balance",
              compactTitle
                ? "text-[38px] sm:text-[48px] lg:text-[56px]"
                : "text-[42px] sm:text-[56px] lg:text-[64px]",
              dark ? "text-white" : "text-[var(--color-ink)]",
            )}
          >
            <Highlight tone={dark ? "dark" : "default"}>
              {slide.title}
            </Highlight>
          </h2>

          <p
            className={cn(
              "clamp-2 mt-4 max-w-[520px] text-[18px] leading-[1.55] keep-all sm:text-[21px]",
              dark ? "text-white/65" : "text-[var(--color-ink-2)]",
            )}
          >
            <Highlight tone={dark ? "dark" : "default"}>
              {slide.description}
            </Highlight>
          </p>

          <ul
            className={cn(
              "mt-6 grid gap-y-4 border-t pt-5 sm:grid-cols-3 sm:gap-y-0",
              dark ? "border-white/10" : "border-[var(--color-line)]",
            )}
          >
            {slide.keyPoints.slice(0, 3).map((point, pointIndex) => (
              <li
                key={point.title}
                className={cn(
                  "min-w-0 px-4 first:pl-0",
                  pointIndex > 0 &&
                    (dark
                      ? "sm:border-l sm:border-white/10"
                      : "sm:border-l sm:border-[var(--color-line)]"),
                )}
              >
                <div
                  className={cn(
                    "text-[17px] font-bold tracking-[-0.02em] keep-all lg:text-[20px]",
                    dark ? "text-white" : "text-[var(--color-ink)]",
                  )}
                >
                  {point.title}
                </div>
                <div
                  className={cn(
                    "mt-2 text-[14px] leading-[1.5] keep-all lg:text-[16px]",
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
        <div className="h-full min-h-[360px] lg:min-h-0">
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
        <div className="grid w-full grid-cols-[96px_1fr] items-center gap-4">
          <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]">
            Insight
          </div>
          <p
            className={cn(
              "truncate text-[17px] font-semibold leading-[1.35] tracking-[-0.01em] sm:text-[19px] lg:text-[21px]",
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
        "relative flex h-full w-full flex-col justify-between overflow-hidden p-8 lg:p-10",
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
          <h3 className="mt-3 max-w-xl text-[30px] font-bold leading-[1.08] tracking-[-0.03em] sm:text-[40px]">
            {visual.title}
          </h3>
        </div>
      </div>

      <div className="relative grid flex-1 place-items-center py-8 text-center">
        <div
          className={cn(
            "grid h-full min-h-[280px] w-full place-items-center rounded-2xl border",
            dark
              ? "border-white/10 bg-white/[0.03]"
              : "border-[var(--color-line)] bg-[var(--color-bg-alt)]",
          )}
        >
          <div
            className={cn(
              "flex h-20 w-20 items-center justify-center rounded-2xl border",
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
        "flex h-12 items-center justify-between text-[12px]",
        dark ? "text-white/45" : "text-[var(--color-ink-3)]",
      )}
    >
      <a
        href={previous ? `#${previous.id}` : "#project-summary"}
        className={cn(
          "inline-flex items-center gap-3 rounded-xl border px-3 py-2 transition-colors",
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

      <div className="flex items-center gap-3">
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
          "inline-flex items-center gap-3 rounded-xl border px-3 py-2 transition-colors",
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
