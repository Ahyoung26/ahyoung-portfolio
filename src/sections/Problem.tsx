import { Section, Eyebrow, ImageSlot, Pill } from "@/components/primitives";
import { problem } from "@/data/portfolio";

/**
 * PAGE 03 — PROBLEM (Problem Slide, DARK)
 * 상단 큰 타이틀 → 중앙 Before 화면 → 하단 피드백/핵심 질문.
 * 한 화면에 맞도록 2-column 구성.
 */
export function Problem() {
  return (
    <Section id="problem" tone="dark" size="xl">
      <Eyebrow tone="white">{problem.label}</Eyebrow>
      <h2 className="mt-5 text-[32px] sm:text-[44px] lg:text-[56px] font-bold leading-[1.08] tracking-[-0.025em] text-white text-balance keep-all whitespace-pre-line">
        {problem.title}
      </h2>

      <div className="mt-7 grid gap-7 lg:grid-cols-[1.25fr_1fr] lg:items-center">
        {/* LEFT — Before screen */}
        <ImageSlot
          slot="before-screen"
          ratio="16/9"
          tone="dark"
          caption="Before · 기존 Avatar — 응답 재생 중심의 일방향 출력"
          badge="AS-IS"
        >
          <BeforeScreenMock />
        </ImageSlot>

        {/* RIGHT — Feedback + Core Question */}
        <div className="flex flex-col gap-5">
          <div>
            <Eyebrow tone="white">User Feedback</Eyebrow>
            <ul className="mt-3 grid gap-2">
              {problem.feedback.map((q, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5"
                >
                  <span className="num shrink-0 text-[10px] font-bold uppercase tracking-[0.16em] text-white/35 mt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[14px] font-medium text-white/85 keep-all">
                    “{q}”
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border-2 border-[var(--color-accent)] bg-[var(--color-accent)]/10 px-5 py-6">
            <Eyebrow tone="white">Core Question</Eyebrow>
            <p className="mt-3 text-[20px] sm:text-[26px] font-bold tracking-[-0.02em] leading-[1.25] text-white keep-all text-balance">
              {problem.coreQuestion}
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {problem.outputs.map((o) => (
                <Pill key={o} tone="dark">
                  {o}
                </Pill>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function BeforeScreenMock() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#0a0a0c]">
      <div className="grid h-full grid-cols-[1.2fr_1fr] gap-0">
        <div className="relative flex items-center justify-center bg-[#13131a] border-r border-white/5">
          <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.16em] text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-red-400 animate-pulse" />
            Static · Pre-rendered
          </div>
          <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 text-[10px] font-semibold tracking-[0.16em] uppercase">
            Avatar
          </div>
          <div className="absolute bottom-5 left-5 right-5">
            <div className="h-1 w-full overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-2/5 bg-white/40" />
            </div>
            <div className="mt-2 text-[10px] text-white/40">waiting · 2.4s</div>
          </div>
        </div>

        <div className="flex flex-col p-4 gap-2 text-[11px] overflow-hidden">
          <div className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/40 mb-1">
            Response Log
          </div>
          {[
            { who: "User", text: "오늘 이용 가능한가요?" },
            { who: "Avatar", text: "...", silent: true },
            { who: "Avatar", text: "준비된 응답 #247 재생", canned: true },
            { who: "User", text: "그게 아니라 시간을..." },
            { who: "Avatar", text: "응답 매칭 실패", error: true },
          ].map((m, i) => (
            <div
              key={i}
              className={
                m.error
                  ? "rounded-md border border-red-500/30 bg-red-500/10 px-3 py-2 text-red-300"
                  : m.silent
                  ? "rounded-md border border-white/5 bg-white/[0.02] px-3 py-2 text-white/30 italic"
                  : m.canned
                  ? "rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-white/60"
                  : "rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-white/85"
              }
            >
              <span className="font-bold text-white/50 mr-2">{m.who}:</span>
              {m.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
