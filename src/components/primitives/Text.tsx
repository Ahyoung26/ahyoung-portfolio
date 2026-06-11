import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/* ----------------------------------------------------------------
   Auto-highlight keywords (Level 3 · Keyword Highlight)
   ---------------------------------------------------------------- */
const KEYWORDS = [
  // longest first matters for regex alternation — sorted at build time
  "대화형 AI 서비스 기획",
  "AI 기술",
  "사용자 경험",
  "비즈니스 가치",
  "생성형 AI 서비스",
  "서비스 구축",
  "서비스 운영",
  "운영 체계",
  "서비스 경험",
  "AI SaaS",
  "글로벌 플랫폼",
  "Interactive Avatar",
  "AI 서비스 기획",
  "운영 구조 설계",
  "품질 검증 체계",
  "Conversational UX",
  "AI Avatar",
  "데이터 기반",
  "문제 정의",
  "서비스 설계",
  "검증 체계",
  "운영 구조",
  "운영 정책",
  "품질 검증",
  "Service Workflow",
  "Quality Framework",
  "User Flow",
  "Workflow",
  "Framework",
  "Latency",
  "대화가 자연스럽게 이어지는 경험",
  "대화 경험의 단절",
  "응답 대기 경험",
  "대화 연결성",
  "Waiting 경험 개선",
  "데이터 기반으로 검증하는 과정",
  "운영 체계 표준화",
  "공통 평가 기준",
  "서비스 경험 중심 관점",
  "사용자 경험을 설계하는 방식",
  "운영 체계와 품질 관리 구조",
  "비즈니스와 사용자를 연결하는 구조를 설계하는 것",
  "체감 Latency",
  "서비스 기획자 김아영",
  "+20%",
  "+15%",
];

function escapeRegExp(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

const sortedKeywords = [...KEYWORDS].sort((a, b) => b.length - a.length);
const keywordRe = new RegExp(
  `(${sortedKeywords.map(escapeRegExp).join("|")})`,
  "gi",
);
const keywordLookup = new Set(KEYWORDS.map((k) => k.toLowerCase()));

/**
 * Highlight — 본문 문자열 안의 핵심 키워드를 자동으로 Accent 강조.
 * Level 3 (Keyword Highlight): font-weight 600~700 + accent color.
 */
export function Highlight({
  children,
  tone = "default",
}: {
  children: string;
  tone?: "default" | "dark";
}) {
  const parts = children.split(keywordRe);
  return (
    <>
      {parts.map((part, i) =>
        part && keywordLookup.has(part.toLowerCase()) ? (
          <strong
            key={i}
            className={cn(
              "highlight",
              tone === "dark"
                ? "text-white"
                : "text-[var(--color-primary-accent)]",
            )}
          >
            {part}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}

/* ----------------------------------------------------------------
   Body (Level 4) — 18px / 400 / line-height 1.8
   ---------------------------------------------------------------- */
export function Body({
  children,
  tone = "default",
  size = "md",
  highlight = true,
  className,
}: {
  children: ReactNode;
  tone?: "default" | "dark";
  size?: "sm" | "md";
  /** auto-highlight keywords when children is a plain string */
  highlight?: boolean;
  className?: string;
}) {
  const content =
    highlight && typeof children === "string" ? (
      <Highlight tone={tone}>{children}</Highlight>
    ) : (
      children
    );
  return (
    <p
      className={cn(
        "font-normal keep-all",
        size === "sm"
          ? "text-[14px] sm:text-[15px] leading-[1.75]"
          : "text-[16px] sm:text-[17px] lg:text-[18px] leading-[1.8]",
        tone === "dark" ? "text-white/70" : "text-[var(--color-ink-2)]",
        className,
      )}
    >
      {content}
    </p>
  );
}

/* ----------------------------------------------------------------
   Caption (Level 5) — 12~14px / Gray
   ---------------------------------------------------------------- */
export function Caption({
  children,
  tone = "default",
  className,
}: {
  children: ReactNode;
  tone?: "default" | "dark";
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-[12px] sm:text-[13px] leading-[1.6] keep-all",
        tone === "dark" ? "text-white/45" : "text-[var(--color-ink-3)]",
        className,
      )}
    >
      {children}
    </p>
  );
}

/* ----------------------------------------------------------------
   KeywordChips — 의미 단위 분리용 작은 accent 칩
   ---------------------------------------------------------------- */
export function KeywordChips({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  return (
    <span className={cn("inline-flex flex-wrap gap-1.5 align-middle", className)}>
      {items.map((it) => (
        <span
          key={it}
          className="rounded-md border border-[var(--color-accent-m)] bg-[var(--color-accent-l)] px-2 py-0.5 text-[13px] font-semibold text-[var(--color-accent)]"
        >
          {it}
        </span>
      ))}
    </span>
  );
}
