import { Section, ArtifactCard, Eyebrow } from "@/components/primitives";
import { artifactQuality, artifactValidation } from "@/data/portfolio";

/**
 * PAGE 07 — ARTIFACT 01: Quality Framework (one slide)
 * PAGE 08 — ARTIFACT 02: Validation System (one slide)
 *
 * Artifact Slide: 산출물 이미지가 화면의 60% 이상.
 */
export function Artifacts() {
  return (
    <>
      <ArtifactQuality />
      <ArtifactValidation />
    </>
  );
}

function ArtifactQuality() {
  return (
    <Section id="artifacts" tone="alt" size="xl">
      <div className="mb-8 flex items-baseline justify-between">
        <Eyebrow>Artifacts · Key Deliverables</Eyebrow>
        <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--color-ink-3)]">
          01 / 02
        </span>
      </div>
      <ArtifactCard
        eyebrow={artifactQuality.label}
        title={
          <span className="whitespace-pre-line">{artifactQuality.title}</span>
        }
        purpose={artifactQuality.description}
        result={artifactQuality.result}
        outputs={artifactQuality.outputs}
        imageSlot={artifactQuality.imageSlot}
        imageRatio="16/9"
        imageCaption="대화 품질 평가 프레임워크 v1.2"
        imageBadge="Sample"
        layout="split"
        imageContent={
          <QualityFrameworkVisual criteria={artifactQuality.criteria} />
        }
      />
    </Section>
  );
}

function ArtifactValidation() {
  return (
    <Section id="artifact-validation" tone="default" size="xl">
      <div className="mb-8 flex items-baseline justify-between">
        <Eyebrow>Artifacts · Key Deliverables</Eyebrow>
        <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--color-ink-3)]">
          02 / 02
        </span>
      </div>
      <ArtifactCard
        eyebrow={artifactValidation.label}
        title={
          <span className="whitespace-pre-line">
            {artifactValidation.title}
          </span>
        }
        purpose={artifactValidation.description}
        result={artifactValidation.result}
        outputs={artifactValidation.outputs}
        imageSlot={artifactValidation.imageSlot}
        imageRatio="16/9"
        imageCaption="가설 → 실험 → 검증 노션 테스트 시트"
        imageBadge="Sample"
        layout="split"
        imageContent={<ValidationSheetVisual flow={artifactValidation.flow} />}
      />
    </Section>
  );
}

/* === Sample visual: Quality Framework as a radial criteria card === */
function QualityFrameworkVisual({
  criteria,
}: {
  criteria: { title: string; desc: string }[];
}) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-white via-[var(--color-bg-alt)] to-[var(--color-bg-insight)] p-5">
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between border-b border-[var(--color-line)] pb-3 mb-4">
          <div>
            <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--color-accent)]">
              Quality Framework
            </div>
            <div className="text-[14px] font-bold mt-0.5">
              Interactive Avatar
            </div>
          </div>
          <div className="text-[10px] font-mono text-[var(--color-ink-3)]">
            v1.2 · 5 criteria
          </div>
        </div>
        <ul className="grid flex-1 grid-cols-1 gap-2.5 sm:grid-cols-2">
          {criteria.map((c, i) => (
            <li
              key={i}
              className="rounded-lg border border-[var(--color-line)] bg-white px-3 py-2.5"
            >
              <div className="flex items-baseline justify-between mb-1">
                <span className="num text-[10px] font-bold tracking-[0.16em] uppercase text-[var(--color-accent)]">
                  C-{String(i + 1).padStart(2, "0")}
                </span>
                <span className="num text-[10px] text-[var(--color-ink-3)]">
                  weight · 1.0
                </span>
              </div>
              <div className="text-[12px] font-bold tracking-[-0.01em] keep-all">
                {c.title}
              </div>
              <div className="mt-1 text-[10px] leading-[1.5] text-[var(--color-ink-3)] keep-all">
                {c.desc}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* === Sample visual: Validation flow with table-style sheet === */
function ValidationSheetVisual({ flow }: { flow: string[] }) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-white p-5">
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between border-b border-[var(--color-line)] pb-3 mb-4">
          <div>
            <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--color-accent)]">
              Validation Sheet
            </div>
            <div className="text-[14px] font-bold mt-0.5">
              Notion Test Tracking
            </div>
          </div>
          <div className="text-[10px] font-mono text-[var(--color-ink-3)]">
            12 cases · in review
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 mb-4">
          {flow.map((s, i) => (
            <div key={i} className="flex items-center gap-1.5">
              <span className="rounded-md border border-[var(--color-line)] bg-[var(--color-bg-alt)] px-2 py-1 text-[10px] font-semibold text-[var(--color-ink-2)]">
                {s}
              </span>
              {i < flow.length - 1 && (
                <span className="text-[var(--color-ink-3)] text-[10px]">›</span>
              )}
            </div>
          ))}
        </div>

        <div className="flex-1 overflow-hidden rounded-lg border border-[var(--color-line)]">
          <div className="grid grid-cols-[40px_1.4fr_0.8fr_60px] gap-3 border-b border-[var(--color-line)] bg-[var(--color-bg-alt)] px-3 py-2 text-[9px] font-bold uppercase tracking-[0.16em] text-[var(--color-ink-3)]">
            <div>No</div>
            <div>Hypothesis</div>
            <div>Result</div>
            <div className="text-right">State</div>
          </div>
          {[
            { n: "01", h: "패킷 손실이 립싱크 저하 원인", r: "단독 원인 아님", s: "Reject" },
            { n: "02", h: "SDK ≡ Streaming 품질", r: "SDK 우세", s: "Reject" },
            { n: "03", h: "Avatar 품질 동일", r: "편차 존재", s: "Reject" },
            { n: "04", h: "응답 지연이 만족도 영향", r: "강한 상관", s: "Confirm" },
          ].map((r) => (
            <div
              key={r.n}
              className="grid grid-cols-[40px_1.4fr_0.8fr_60px] items-center gap-3 border-b last:border-b-0 border-[var(--color-line)] px-3 py-2 text-[10px]"
            >
              <span className="num font-bold text-[var(--color-accent)]">
                {r.n}
              </span>
              <span className="font-semibold text-[var(--color-ink)] truncate">
                {r.h}
              </span>
              <span className="text-[var(--color-ink-2)] truncate">{r.r}</span>
              <span
                className={
                  "text-right font-bold uppercase tracking-[0.12em] text-[9px] " +
                  (r.s === "Confirm"
                    ? "text-[var(--color-accent)]"
                    : "text-[var(--color-ink-3)]")
                }
              >
                {r.s}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
