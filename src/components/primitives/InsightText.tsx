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
  className,
}: {
  children: ReactNode;
  as?: "p" | "h2" | "h3" | "blockquote";
  align?: "left" | "center";
  tone?: "default" | "dark";
  className?: string;
}) {
  return (
    <Tag
      className={cn(
        "max-w-[800px] font-bold tracking-[-0.015em] keep-all text-balance",
        "text-[28px] sm:text-[32px] lg:text-[36px] leading-[1.4]",
        tone === "dark" ? "text-white" : "text-[var(--color-ink)]",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
