import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * InsightText — 강조 메시지 전용 타이포그래피.
 *
 * 다음 유형의 문장에 사용한다:
 *  - 개인 철학
 *  - 핵심 가치
 *  - 프로젝트 핵심 인사이트
 *  - 면접관에게 전달하고 싶은 메시지
 *
 * Style (DESIGN_GUIDE · Insight Rule):
 *  - Font Size: 28~36px
 *  - Font Weight: 700
 *  - Line Height: 1.4
 *  - Max Width: 800px
 *  - Accent Color 허용
 */
export function InsightText({
  children,
  as: Tag = "p",
  align = "left",
  tone = "default",
  bar = true,
  size = "quote",
  className,
}: {
  children: ReactNode;
  as?: "p" | "h2" | "h3" | "blockquote";
  align?: "left" | "center";
  tone?: "default" | "dark";
  /** leading accent bar for extra prominence */
  bar?: boolean;
  /** quote = larger (Stripe/Apple-like), base = 28~36 */
  size?: "base" | "quote";
  className?: string;
}) {
  const sizeClass =
    size === "quote"
      ? "text-[30px] sm:text-[40px] lg:text-[48px] leading-[1.25]"
      : "text-[28px] sm:text-[32px] lg:text-[36px] leading-[1.4]";

  if (bar && align !== "center") {
    return (
      <div className={cn("flex items-stretch gap-4 sm:gap-5", className)}>
        <span
          aria-hidden
          className="mt-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]"
        />
        <Tag
          className={cn(
            "max-w-[800px] font-bold tracking-[-0.02em] keep-all text-balance",
            sizeClass,
            tone === "dark" ? "text-white" : "text-[var(--color-ink)]",
          )}
        >
          {children}
        </Tag>
      </div>
    );
  }

  return (
    <Tag
      className={cn(
        "max-w-[800px] font-bold tracking-[-0.02em] keep-all text-balance",
        sizeClass,
        tone === "dark" ? "text-white" : "text-[var(--color-ink)]",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
