import {
  Section,
  SectionHeader,
  ImageSlot,
  BigDiagram,
  Eyebrow,
  Pill,
} from "@/components/primitives";
import { launch } from "@/data/portfolio";

/**
 * PAGE 10a — LAUNCH · Operational Loop (diagram slide)
 * PAGE 10b — LAUNCH · Applied + Monitoring (slide)
 */
export function Launch() {
  return (
    <>
      <LaunchLoop />
      <LaunchApplied />
    </>
  );
}

function LaunchLoop() {
  return (
    <Section id="launch" tone="alt" size="xl">
      <SectionHeader
        eyebrow={launch.label}
        title={<span className="whitespace-pre-line">{launch.title}</span>}
        subtitle="품질 정의와 검증에서 끝나지 않고, 실제 운영 체계로 반영"
      />

      <div className="mt-7 lg:mt-8">
        <div className="mb-4 flex items-baseline justify-between">
          <Eyebrow>Operational Loop</Eyebrow>
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--color-ink-3)]">
            5-Step Quality Loop
          </span>
        </div>
        <BigDiagram
          nodes={launch.ops.map((o, i) => ({
            stage: `OP ${String(i + 1).padStart(2, "0")}`,
            label: o.step,
            note: o.desc,
            highlight: i === 3,
          }))}
        />
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {launch.outputs.map((o) => (
          <Pill key={o} tone="outline">
            {o}
          </Pill>
        ))}
      </div>
    </Section>
  );
}

function LaunchApplied() {
  return (
    <Section id="launch-applied" tone="default" size="xl">
      <SectionHeader
        eyebrow="LAUNCH · APPLIED TO SERVICE"
        title={
          <>
            품질 기준이 실제{" "}
            <span className="text-[var(--color-accent)]">UX와 운영</span>에
            반영되었습니다
          </>
        }
        subtitle="정의 → 검증으로 끝나지 않고, 서비스 화면과 운영 대시보드로 연결"
      />

      <div className="mt-7 lg:mt-8 grid gap-7 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <ul className="space-y-3">
          {launch.applied.map((a, i) => (
            <li
              key={i}
              className="rounded-xl border border-[var(--color-line)] bg-white px-5 py-4"
            >
              <div className="flex items-start gap-4">
                <span className="num shrink-0 text-[12px] font-bold tracking-[0.16em] text-[var(--color-accent)] uppercase mt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-[14px] sm:text-[15px] leading-[1.6] text-[var(--color-ink)] font-medium keep-all">
                  {a}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <ImageSlot
          slot={launch.imageSlot}
          ratio="3/2"
          tone="dark"
          caption="Operational Monitoring · Quality Dashboard"
          badge="Sample Admin"
        >
          <MonitoringDashboard />
        </ImageSlot>
      </div>
    </Section>
  );
}

function MonitoringDashboard() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#0a0a0c]">
      <div className="flex items-center justify-between border-b border-white/5 bg-white/[0.02] px-4 py-2">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-emerald-400" />
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/70">
            Monitoring · Live
          </span>
        </div>
        <div className="flex items-center gap-3 text-[10px] text-white/40 font-mono">
          <span>SLO 99.4%</span>
          <span>·</span>
          <span>p95 1.4s</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 p-4">
        {[
          { label: "First Token", value: "0.42s", trend: "↓ 12%" },
          { label: "Continuity", value: "94.6%", trend: "↑ 6%" },
          { label: "Lip Sync OK", value: "97.1%", trend: "↑ 3%" },
        ].map((k, i) => (
          <div
            key={i}
            className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-2.5"
          >
            <div className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/50">
              {k.label}
            </div>
            <div className="mt-1 num text-[18px] font-bold text-white">
              {k.value}
            </div>
            <div className="num text-[9px] text-emerald-400 font-mono mt-0.5">
              {k.trend}
            </div>
          </div>
        ))}
      </div>

      <div className="px-4 pb-4">
        <div className="flex items-baseline justify-between mb-2">
          <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/50">
            Quality Score (24h)
          </span>
          <span className="num text-[9px] font-mono text-white/40">
            now · 92.4
          </span>
        </div>
        <svg viewBox="0 0 300 80" className="w-full h-auto">
          <path
            d="M0,55 L20,52 L40,58 L60,48 L80,42 L100,38 L120,45 L140,32 L160,28 L180,30 L200,22 L220,18 L240,20 L260,15 L280,12 L300,10"
            fill="none"
            stroke="#4F46E5"
            strokeWidth="2"
          />
          <path
            d="M0,55 L20,52 L40,58 L60,48 L80,42 L100,38 L120,45 L140,32 L160,28 L180,30 L200,22 L220,18 L240,20 L260,15 L280,12 L300,10 L300,80 L0,80 Z"
            fill="url(#gradient)"
            opacity="0.3"
          />
          <defs>
            <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#4F46E5" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="px-4 pb-4">
        <div className="flex items-baseline justify-between mb-2">
          <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/50">
            Issue Queue · Triage
          </span>
          <span className="num text-[9px] font-mono text-white/40">7 open</span>
        </div>
        <ul className="space-y-1.5">
          {[
            { p: "P1", t: "립싱크 mismatch · streaming layer", s: "QA" },
            { p: "P2", t: "응답 지연 평균 +0.4s", s: "Triage" },
            { p: "P3", t: "fallback 발화 누락", s: "Open" },
          ].map((it, i) => (
            <li
              key={i}
              className="flex items-center justify-between rounded border border-white/10 bg-white/[0.02] px-3 py-1.5 text-[10px]"
            >
              <div className="flex items-center gap-2">
                <span
                  className={
                    "rounded font-bold tracking-[0.12em] px-1.5 py-0.5 text-[9px] uppercase " +
                    (it.p === "P1"
                      ? "bg-red-500/20 text-red-300"
                      : it.p === "P2"
                      ? "bg-amber-500/20 text-amber-300"
                      : "bg-white/10 text-white/60")
                  }
                >
                  {it.p}
                </span>
                <span className="text-white/85">{it.t}</span>
              </div>
              <span className="text-[9px] text-white/40 font-mono uppercase">
                {it.s}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
