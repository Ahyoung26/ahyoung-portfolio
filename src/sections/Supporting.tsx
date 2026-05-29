import {
  Section,
  SectionHeader,
  ImageSlot,
  Eyebrow,
  Pill,
} from "@/components/primitives";
import { supportingProjects } from "@/data/portfolio";

/**
 * SUPPORTING PROJECTS — 압축 카드형 (메인은 Interactive Avatar)
 * 짧고 강하게 — 1줄 타이틀 + KPI + 태그
 */
export function Supporting() {
  return (
    <Section id="supporting" tone="alt" size="xl">
      <SectionHeader
        eyebrow={supportingProjects.label}
        title={
          <span className="whitespace-pre-line">
            {supportingProjects.title}
          </span>
        }
        subtitle="AI · UX · 운영 구조까지 다양한 도메인에서 문제 정의 → 검증 → 운영 까지 수행"
      />

      <ul className="mt-8 grid gap-5 lg:grid-cols-3">
        {supportingProjects.items.map((p, i) => (
          <li
            key={i}
            className="group flex flex-col rounded-2xl border border-[var(--color-line)] bg-white overflow-hidden"
          >
            <ImageSlot
              slot={p.slot}
              ratio="16/9"
              caption={p.label}
              badge={p.year}
              className="rounded-none border-x-0 border-t-0"
            >
              <SupportingMock label={p.label} index={i} />
            </ImageSlot>
            <div className="flex flex-1 flex-col p-5">
              <Eyebrow>{p.label}</Eyebrow>
              <h3 className="mt-2 text-[18px] sm:text-[20px] font-bold tracking-[-0.015em] leading-[1.3] keep-all">
                {p.title}
              </h3>

              {/* mini KPI */}
              <div className="mt-4 grid grid-cols-2 gap-3">
                {p.kpis.map((k, j) => (
                  <div
                    key={j}
                    className="rounded-lg border border-[var(--color-line)] bg-[var(--color-bg-alt)] px-3 py-2"
                  >
                    <div className="num text-[18px] font-bold tracking-[-0.02em] text-[var(--color-accent)] leading-none">
                      {k.value}
                    </div>
                    <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--color-ink-3)]">
                      {k.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-4 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <Pill key={t} tone="outline">
                    {t}
                  </Pill>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}

/* === Sample visual per supporting project === */
function SupportingMock({ label, index }: { label: string; index: number }) {
  if (label.includes("DUBBING")) return <DubbingShareMock />;
  if (label.includes("HYUNDAI")) return <HyundaiFunnelMock />;
  return <AlamoReservationMock index={index} />;
}

function DubbingShareMock() {
  return (
    <div className="relative h-full w-full bg-gradient-to-br from-[#0a0a0c] via-[#15151a] to-[#1a1530] p-4 overflow-hidden">
      <div className="rounded-lg border border-white/10 bg-white/[0.03] overflow-hidden">
        {/* browser bar */}
        <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-white/30" />
          <span className="h-2 w-2 rounded-full bg-white/30" />
          <span className="h-2 w-2 rounded-full bg-white/30" />
          <span className="ml-2 text-[9px] font-mono text-white/40">
            aistudios.com/share/...
          </span>
        </div>
        <div className="p-3 space-y-2">
          {/* video block */}
          <div className="aspect-video rounded bg-gradient-to-br from-[var(--color-accent)]/40 to-purple-500/30 border border-white/10 flex items-center justify-center">
            <div className="h-8 w-8 rounded-full bg-white/15 flex items-center justify-center">
              <span className="text-white text-[12px]">▶</span>
            </div>
          </div>
          {/* CTA buttons */}
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded bg-[var(--color-accent)] px-2 py-1.5 text-center text-[9px] font-bold uppercase tracking-[0.12em] text-white">
              Try AI Studios
            </div>
            <div className="rounded border border-white/15 bg-white/5 px-2 py-1.5 text-center text-[9px] font-bold uppercase tracking-[0.12em] text-white/70">
              Download
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-4 right-4 rounded-full border border-white/15 bg-white/10 backdrop-blur px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.16em] text-white/85">
        +4.0% Conv
      </div>
    </div>
  );
}

function HyundaiFunnelMock() {
  const steps = [
    { l: "Visit", v: 100 },
    { l: "Spec", v: 78 },
    { l: "Quote", v: 54 },
    { l: "Test", v: 28 },
    { l: "Buy", v: 14 },
  ];
  return (
    <div className="relative h-full w-full bg-white p-5">
      <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--color-ink-3)] mb-3">
        Purchase Funnel
      </div>
      <div className="space-y-1.5">
        {steps.map((s, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="w-12 text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--color-ink-2)]">
              {s.l}
            </span>
            <div
              className="h-6 rounded bg-gradient-to-r from-[var(--color-accent)] to-[#7c3aed]"
              style={{ width: `${s.v}%` }}
            />
            <span className="num text-[10px] font-bold text-[var(--color-ink-2)]">
              {s.v}%
            </span>
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 right-4 rounded border border-[var(--color-line)] bg-[var(--color-bg-alt)] px-2 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-[var(--color-ink-2)]">
        VOC 0건
      </div>
    </div>
  );
}

function AlamoReservationMock({ index: _index }: { index: number }) {
  return (
    <div className="relative h-full w-full bg-white p-4">
      <div className="rounded-lg border border-[var(--color-line)] overflow-hidden">
        <div className="flex items-center justify-between border-b border-[var(--color-line)] bg-[var(--color-bg-alt)] px-3 py-2">
          <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--color-ink-2)]">
            Reservation Admin
          </span>
          <span className="text-[9px] font-mono text-[var(--color-ink-3)]">
            B2B · Voucher
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2 p-3">
          {["Booking", "Voucher", "Settle"].map((s, i) => (
            <div
              key={i}
              className={
                "rounded border px-2 py-2 " +
                (i === 1
                  ? "border-[var(--color-accent)] bg-[var(--color-bg-insight)]"
                  : "border-[var(--color-line)] bg-white")
              }
            >
              <div
                className={
                  "text-[9px] font-bold uppercase tracking-[0.14em] " +
                  (i === 1
                    ? "text-[var(--color-accent)]"
                    : "text-[var(--color-ink-3)]")
                }
              >
                {s}
              </div>
              <div className="num mt-1 text-[14px] font-bold tracking-[-0.02em]">
                {[124, 86, 72][i]}
              </div>
            </div>
          ))}
        </div>
        {/* table */}
        <div className="border-t border-[var(--color-line)]">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="grid grid-cols-[1fr_60px_60px] gap-2 border-t first:border-t-0 border-[var(--color-line)] px-3 py-1.5 text-[9px]"
            >
              <span className="font-mono text-[var(--color-ink-2)]">
                BK-2024-00{i}1
              </span>
              <span className="text-[var(--color-ink-3)]">$240</span>
              <span className="text-right text-[var(--color-accent)] font-bold uppercase">
                Paid
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
