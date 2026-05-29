import {
  Section,
  Eyebrow,
  KPIBlock,
  InsightText,
  Body,
} from "@/components/primitives";
import { about } from "@/data/portfolio";
import { cn } from "@/lib/cn";

/**
 * Cover     — Title + KPI
 * About 01  — 핵심 역량 + 툴
 * About 02  — 경력 요약 + 핵심 메시지
 *
 * 한 장표 = 한 화면. 각 슬라이드는 최대 3요소.
 */
export function About() {
  return (
    <>
      <Cover />
      <AboutStrength />
      <AboutCareer />
    </>
  );
}

/* ============ COVER ============ */
function Cover() {
  return (
    <Section id="about" tone="default">
      {/* Level 5 · Caption */}
      <Eyebrow>{about.label}</Eyebrow>

      {/* Level 1 · Hero Title (64px+ / 700 / lh 1.05) */}
      <h1 className="mt-5 text-[40px] sm:text-[56px] lg:text-[68px] font-bold leading-[1.05] tracking-[-0.03em] text-balance keep-all max-w-4xl">
        AI 서비스를{" "}
        <span className="text-[var(--color-accent)]">실제로 작동</span>하게
        만드는 기획자
      </h1>

      {/* Level 2 · Insight (positioning) */}
      <InsightText className="mt-6">
        기능을 정의하는 기획자보다,{" "}
        <span className="text-[var(--color-accent)]">
          문제를 정의하고 검증 가능한 구조로 해결하는 기획자
        </span>
        .
      </InsightText>

      {/* KPI — 숫자 + 설명 */}
      <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-line)] md:grid-cols-4">
        {about.metrics.map((m, i) => (
          <div key={i} className="bg-white p-6">
            <KPIBlock value={m.value} label={m.label} size="md" tone="accent" />
          </div>
        ))}
      </div>

      <div className="no-print mt-10 hidden md:flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-ink-3)]">
        <span className="h-px w-10 bg-[var(--color-line-2)]" />
        Scroll to explore
      </div>
    </Section>
  );
}

/* ============ ABOUT 01 — 핵심 역량 + 툴 ============ */
function AboutStrength() {
  return (
    <Section id="about-strength" tone="alt">
      <Eyebrow>About · Core Capability</Eyebrow>
      <h2 className="mt-4 text-[28px] sm:text-[38px] lg:text-[44px] font-bold tracking-[-0.025em] leading-[1.12] keep-all text-balance max-w-3xl">
        문제 정의 → 설계 → 검증 → 운영까지{" "}
        <span className="text-[var(--color-accent)]">수행하는 4가지 역량</span>
      </h2>

      {/* Level 4 · Body — 의미 단위 분리 + 자동 키워드 강조 */}
      <Body className="mt-5 max-w-3xl">
        사용자 경험에서 시작해 AI 서비스 기획 · 운영 구조 설계 · 품질 검증 체계까지
        수행하며, 기술과 사용자를 연결하는 일을 해왔습니다.
      </Body>

      <ul className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {about.strengths.map((s, i) => (
          <li
            key={i}
            className="rounded-2xl border border-[var(--color-line)] bg-white p-5"
          >
            <div className="num text-[11px] font-bold tracking-[0.16em] text-[var(--color-accent)] uppercase">
              {String(i + 1).padStart(2, "0")} · {s.label}
            </div>
            <h3 className="mt-2 text-[18px] font-bold tracking-[-0.01em] keep-all">
              {s.title}
            </h3>
            <ul className="mt-3 space-y-1 text-[12px] text-[var(--color-ink-2)]">
              {s.items.map((it, j) => (
                <li key={j} className="flex gap-1.5 keep-all">
                  <span className="text-[var(--color-accent)]">·</span>
                  {it}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-wrap items-center gap-2">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-ink-3)] mr-2">
          Tools
        </span>
        {about.tools.map((t) => (
          <span
            key={t}
            className="rounded-full border border-[var(--color-line)] bg-white px-3 py-1 text-[12px] font-medium text-[var(--color-ink-2)]"
          >
            {t}
          </span>
        ))}
      </div>
    </Section>
  );
}

/* ============ ABOUT 02 — 경력 요약 + 핵심 메시지 ============ */
function AboutCareer() {
  return (
    <Section id="about-career" tone="default">
      <Eyebrow>About · Career</Eyebrow>
      <h2 className="mt-4 text-[28px] sm:text-[38px] lg:text-[44px] font-bold tracking-[-0.025em] leading-[1.12] keep-all text-balance max-w-3xl">
        B2C 웹 · B2B 운영 · AI 서비스까지{" "}
        <span className="text-[var(--color-accent)]">13년의 기획 경험</span>
      </h2>

      <ol className="mt-8 grid gap-4 md:grid-cols-3">
        {about.career.map((c, i) => (
          <li
            key={i}
            className={cn(
              "rounded-2xl border bg-white p-5",
              i === 0
                ? "border-[var(--color-accent-m)] ring-1 ring-[var(--color-accent-m)]"
                : "border-[var(--color-line)]",
            )}
          >
            <div
              className={cn(
                "num text-[12px] font-bold tracking-[0.06em]",
                i === 0
                  ? "text-[var(--color-accent)]"
                  : "text-[var(--color-ink-3)]",
              )}
            >
              {c.period}
            </div>
            <div className="mt-1.5 text-[17px] font-bold tracking-[-0.01em]">
              {c.company}
            </div>
            <div className="text-[12px] font-medium text-[var(--color-ink-3)]">
              {c.role}
            </div>
            <ul className="mt-3 space-y-1 text-[12px] text-[var(--color-ink-2)]">
              {c.items.slice(0, 3).map((it, j) => (
                <li key={j} className="flex gap-1.5 keep-all">
                  <span className="text-[var(--color-accent)]">·</span>
                  {it}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <div className="mt-7 rounded-2xl border border-[var(--color-line)] bg-[var(--color-bg-alt)] px-6 py-6">
        <Eyebrow>Key Message</Eyebrow>
        <InsightText className="mt-3">
          문제 정의 → 서비스 설계 → 검증 → 런칭 → 운영까지 이어지는{" "}
          <span className="text-[var(--color-accent)]">전체 흐름</span>을
          기획합니다.
        </InsightText>
      </div>
    </Section>
  );
}
