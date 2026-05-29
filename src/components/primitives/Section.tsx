import { type ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Highlight } from "./Text";

type Tone = "default" | "alt" | "dark" | "insight";

const toneClass: Record<Tone, string> = {
  default: "bg-[var(--color-bg)] text-[var(--color-ink)]",
  alt: "bg-[var(--color-bg-alt)] text-[var(--color-ink)]",
  dark: "bg-[var(--color-bg-dark)] text-white",
  insight:
    "bg-[var(--color-bg-insight)] text-[var(--color-ink)] border-y border-[var(--color-accent-m)]",
};

export function Section({
  id,
  tone = "default",
  className,
  containerClassName,
  children,
  printPage = true,
}: {
  id?: string;
  tone?: Tone;
  className?: string;
  /** extra classes on the inner (slide-inner) wrapper */
  containerClassName?: string;
  /** @deprecated kept for API compat; width handled by .slide-inner */
  size?: "lg" | "xl" | "full";
  children: ReactNode;
  printPage?: boolean;
}) {
  return (
    <section
      id={id}
      data-tone={tone}
      className={cn(
        "portfolio-slide",
        toneClass[tone],
        printPage && "print-page",
        className,
      )}
    >
      <div className={cn("slide-inner", containerClassName)}>{children}</div>
    </section>
  );
}

/**
 * Section header — Title → Visual → Insight 순서를 위한 상단부.
 * - eyebrow (label): 작은 라벨
 * - title: 큰 타이틀
 * - subtitle (optional): 한 줄 부제
 */
export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
  size = "section",
  tone = "default",
  className,
  meta,
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  size?: "hero" | "section" | "project";
  tone?: Tone;
  className?: string;
  meta?: ReactNode;
}) {
  const titleSize =
    size === "hero"
      ? "text-[44px] sm:text-[56px] lg:text-[72px] leading-[1.05]"
      : size === "project"
      ? "text-[32px] sm:text-[42px] lg:text-[52px] leading-[1.1]"
      : "text-[28px] sm:text-[36px] lg:text-[44px] leading-[1.15]";
  const eyebrowColor =
    tone === "dark"
      ? "text-white/60"
      : tone === "insight"
      ? "text-[var(--color-accent)]"
      : "text-[var(--color-accent)]";
  const subtitleColor =
    tone === "dark"
      ? "text-white/70"
      : "text-[var(--color-ink-2)]";
  return (
    <header
      className={cn(
        align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-4xl",
        className,
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "mb-5 text-[11px] font-bold uppercase tracking-[0.2em]",
            eyebrowColor,
          )}
        >
          {eyebrow}
        </div>
      )}
      <h2
        className={cn(
          "font-bold tracking-[-0.02em] keep-all text-balance",
          titleSize,
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-5 text-[16px] sm:text-[17px] lg:text-[18px] leading-[1.65] keep-all",
            subtitleColor,
            align === "center" ? "max-w-2xl mx-auto" : "max-w-2xl",
          )}
        >
          {typeof subtitle === "string" ? (
            <Highlight tone={tone === "dark" ? "dark" : "default"}>
              {subtitle}
            </Highlight>
          ) : (
            subtitle
          )}
        </p>
      )}
      {meta && <div className="mt-7">{meta}</div>}
    </header>
  );
}

export function SectionDivider({
  className,
  tone = "default",
}: {
  className?: string;
  tone?: Tone;
}) {
  const color =
    tone === "dark"
      ? "border-white/10"
      : "border-[var(--color-line)]";
  return <hr className={cn("my-12 lg:my-16 border-t", color, className)} />;
}
