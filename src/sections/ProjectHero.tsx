import { Section, Eyebrow, ImageSlot, Pill, Body } from "@/components/primitives";
import { project } from "@/data/portfolio";

/**
 * PAGE 02 — PROJECT OVERVIEW (Hero Slide · Interactive Avatar)
 * 좌: 타이틀 + 메타 / 우: 대형 hero visual + 한 줄 요약.
 */
export function ProjectHero() {
  return (
    <Section id="project" tone="alt" size="xl">
      <div className="grid gap-10 lg:grid-cols-[1fr_minmax(0,1.3fr)] lg:gap-16 lg:items-center">
        {/* LEFT — Title + Meta */}
        <div>
          <Eyebrow>{project.label}</Eyebrow>
          <h2 className="mt-5 text-[32px] sm:text-[44px] lg:text-[52px] font-bold leading-[1.1] tracking-[-0.025em] text-balance keep-all whitespace-pre-line">
            {project.title}
          </h2>
          <Body className="mt-5 max-w-md">{project.subtitle}</Body>

          <dl className="mt-8 space-y-4 text-[14px]">
            <div className="grid grid-cols-[100px_1fr] gap-4 border-t border-[var(--color-line)] pt-4">
              <dt className="text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--color-ink-3)]">
                Role
              </dt>
              <dd>
                <ul className="flex flex-wrap gap-1.5">
                  {project.meta.role.map((r) => (
                    <li
                      key={r}
                      className="rounded-md border border-[var(--color-line)] bg-white px-2.5 py-1 text-[12px] font-medium text-[var(--color-ink-2)]"
                    >
                      {r}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
            <div className="grid grid-cols-[100px_1fr] gap-4 border-t border-[var(--color-line)] pt-4 items-center">
              <dt className="text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--color-ink-3)]">
                Contribution
              </dt>
              <dd>
                <Pill tone="accent">{project.meta.contribution}</Pill>
              </dd>
            </div>
            <div className="grid grid-cols-[100px_1fr] gap-4 border-t border-[var(--color-line)] pt-4">
              <dt className="text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--color-ink-3)]">
                Outputs
              </dt>
              <dd>
                <ul className="space-y-1 text-[13px] font-medium text-[var(--color-ink-2)]">
                  {project.artifacts.slice(0, 4).map((a) => (
                    <li key={a} className="flex gap-2 keep-all">
                      <span className="text-[var(--color-accent)]">·</span>
                      {a}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
        </div>

        {/* RIGHT — Hero Visual + one-liner */}
        <div className="flex flex-col gap-5">
          <ImageSlot
            slot="project-hero"
            ratio="16/9"
            tone="dark"
            caption="Interactive Avatar — Conversational AI Service"
            badge="Hero Visual"
          >
            <ProjectHeroVisual />
          </ImageSlot>

          <div className="rounded-2xl border-2 border-[var(--color-ink)] bg-white px-6 py-6 sm:px-8">
            <Eyebrow tone="muted">In one line</Eyebrow>
            <p className="mt-3 text-[18px] sm:text-[24px] font-bold tracking-[-0.02em] leading-[1.35] keep-all">
              AI의 품질을{" "}
              <span className="text-[var(--color-accent)]">정의·측정·검증</span>
              하고, 실제 서비스 경험으로{" "}
              <span className="text-[var(--color-accent)]">구현</span>한 프로젝트
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

function ProjectHeroVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-[#0d0d0f] via-[#13131a] to-[#1a1530]">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {[1, 2, 3].map((r) => (
            <div
              key={r}
              className="absolute inset-0 rounded-full border border-[var(--color-accent)]/40"
              style={{
                transform: `scale(${1 + r * 0.5})`,
                opacity: 0.5 - r * 0.12,
              }}
            />
          ))}
          <div className="relative h-28 w-28 sm:h-36 sm:w-36 rounded-full border-2 border-white/10 bg-gradient-to-br from-[var(--color-accent)] to-[#7c3aed] flex items-center justify-center shadow-[0_0_60px_rgba(79,70,229,0.45)]">
            <span className="text-white/95 text-[13px] font-bold tracking-[0.18em] uppercase">
              AI Avatar
            </span>
          </div>
        </div>
      </div>

      <div className="absolute top-5 left-5 flex items-center gap-2 rounded-full bg-white/8 backdrop-blur-sm px-3 py-1 text-[10px] font-bold tracking-[0.18em] text-white/90 uppercase border border-white/10">
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
        Conversational
      </div>
      <div className="absolute top-5 right-5 rounded-full bg-white/8 backdrop-blur-sm px-3 py-1 text-[10px] font-bold tracking-[0.18em] text-white/90 uppercase border border-white/10">
        Real-time · LLM · Lip Sync
      </div>

      <div className="absolute bottom-5 left-5 right-5 grid grid-cols-7 gap-1.5">
        {["Create", "Voice", "Train", "QA", "Deploy", "Talk", "Operate"].map(
          (s, i) => (
            <div
              key={s}
              className="rounded-md border border-white/10 bg-white/5 px-2 py-1.5 text-center text-[9px] font-bold uppercase tracking-[0.12em] text-white/70"
              style={{ opacity: 0.45 + i * 0.085 }}
            >
              {s}
            </div>
          ),
        )}
      </div>
    </div>
  );
}
