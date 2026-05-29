import { Section, Eyebrow } from "@/components/primitives";
import { about } from "@/data/portfolio";

/**
 * CLOSING — Contact section.
 */
export function Closing() {
  return (
    <Section id="contact" tone="dark" size="xl" printPage={false}>
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end">
        <div>
          <Eyebrow tone="white">Let’s Talk</Eyebrow>
          <h2 className="mt-5 text-[36px] sm:text-[48px] lg:text-[60px] font-bold leading-[1.06] tracking-[-0.025em] text-white text-balance keep-all">
            AI 서비스 기획에 대해{" "}
            <span className="text-[var(--color-accent)]">이야기 나누고 싶다면</span>
          </h2>
          <p className="mt-6 max-w-xl text-[15px] sm:text-[17px] leading-[1.7] text-white/65 keep-all">
            Interactive AI · Conversational UX · AI Workflow · Operational
            Design 분야에서의 문제 정의와 해결 사례를 공유합니다.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 lg:p-8 backdrop-blur-sm">
          <ul className="divide-y divide-white/10">
            <li className="flex items-baseline justify-between py-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/45">
                Email
              </span>
              <a
                href={`mailto:${about.contact.email}`}
                className="font-mono text-[14px] sm:text-[15px] font-semibold text-white hover:text-[var(--color-accent)] transition-colors"
              >
                {about.contact.email}
              </a>
            </li>
            <li className="flex items-baseline justify-between py-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/45">
                Tel
              </span>
              <span className="font-mono text-[14px] sm:text-[15px] font-semibold text-white">
                {about.contact.tel}
              </span>
            </li>
            <li className="flex items-baseline justify-between py-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/45">
                Location
              </span>
              <span className="text-[14px] sm:text-[15px] font-semibold text-white">
                {about.contact.location}
              </span>
            </li>
          </ul>
          <div className="mt-6 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/65">
              Open to opportunities
            </span>
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col items-center gap-2 border-t border-white/10 pt-6 text-center">
        <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/40">
          © 2026 Ahyoung Kim · AI Service Planner Portfolio
        </span>
        <span className="text-[10px] font-mono text-white/25">
          Built with React · Tailwind v4 · Pretendard · Designed for PDF Export
        </span>
      </div>
    </Section>
  );
}
