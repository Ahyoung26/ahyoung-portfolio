import {
  ArtifactImage,
  Section,
  Eyebrow,
  Highlight,
} from "@/components/primitives";
import { projectSlides, type ProjectSlideData } from "@/data/portfolio";
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

/**
 * TYPE B — 프로젝트 상세 장표 (PAGE 04~09)
 *
 * Structure: Hero → Content Grid → Bottom Insight
 */
export function ProjectSlides() {
  return (
    <>
      {projectSlides.map((slide) => (
        <ProjectSlide key={slide.id} slide={slide} />
      ))}
    </>
  );
}

function ProjectSlide({ slide }: { slide: ProjectSlideData }) {
  const isChapter = slide.tone === "chapter" || slide.tone === "dark";
  const isDark = isChapter;

  return (
    <Section
      id={slide.id}
      tone={slide.tone ?? "default"}
      containerClassName="type-b-slide"
    >
      <header className="type-b-hero">
        <Eyebrow tone={isDark ? "chapter" : "accent"}>{slide.label}</Eyebrow>
        <h2
          className={cn(
            "type-hero-b clamp-3 mt-3 max-w-4xl keep-all text-balance",
            isDark ? "text-white" : "text-[var(--color-text-primary)]",
          )}
        >
          <Highlight tone={isDark ? "dark" : "default"}>{slide.title}</Highlight>
        </h2>
        <p
          className={cn(
            "type-b-hero-description type-desc clamp-3 keep-all",
            isDark ? "text-white/70" : "text-[var(--color-text-secondary)]",
          )}
        >
          {slide.description}
        </p>
      </header>

      <div className="type-b-body main-content-grid">
        <div className="type-b-left">
          <div className="type-b-main-content main-content min-h-0 flex-1">
            {slide.keyPoints.slice(0, 3).map((point) => (
              <section key={point.title} className="min-w-0">
                <h3
                  className={cn(
                    "type-section-title keep-all",
                    isDark ? "text-white" : "text-[var(--color-text-primary)]",
                  )}
                >
                  {point.title}
                </h3>
                <ul className="mt-1 grid gap-1">
                  {point.items.slice(0, 3).map((item) => (
                    <li
                      key={item}
                      className={cn(
                        "type-body clamp-2 keep-all",
                        isDark ? "text-white/70" : "text-[var(--color-text-secondary)]",
                      )}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>

        <div className="type-b-visual">
          <ArtifactFrame slot={slide.visual.slot} dark={isDark}>
            <ArtifactImage pageLabel={slide.label} alt={`${slide.title} artifact`}>
              <ArtifactContent visual={slide.visual} dark={isDark} />
            </ArtifactImage>
          </ArtifactFrame>
        </div>
      </div>

      <footer
        className={cn(
          "type-b-insight",
          isDark ? "border-white/15" : "border-[var(--color-border-divider)]",
        )}
      >
        <div className="grid grid-cols-[4px_1fr] items-start gap-4">
          <span className="min-h-10 w-1 self-stretch bg-[var(--color-primary-accent)]" />
          <div>
            {slide.insightLead && (
              <p
                className={cn(
                  "insight-lead clamp-2",
                  isDark ? "text-white/70" : "text-[var(--color-text-secondary)]",
                )}
              >
                {slide.insightLead}
              </p>
            )}
            <p
              className={cn(
                "insight-main clamp-2",
                isDark ? "text-white" : "text-[var(--color-text-primary)]",
              )}
            >
              <InsightHighlight text={slide.insight} dark={isDark} />
            </p>
          </div>
        </div>
      </footer>
    </Section>
  );
}

function InsightHighlight({ text, dark }: { text: string; dark: boolean }) {
  const keywords = [
    "대화 연결성",
    "서비스 관점",
    "확장 가능한 서비스 기반",
    "품질을 관리할 수 있는 기반",
    "운영 체계와 품질 관리 구조",
    "사용자 경험을 설계하는 방식",
    "개선 우선순위",
  ];
  const keyword = keywords.find((word) => text.includes(word));

  if (!keyword) return <>{text}</>;

  const [before, after] = text.split(keyword);
  return (
    <>
      {before}
      <strong className={cn("font-bold", dark ? "text-white" : "text-[var(--color-primary-accent)]")}>
        {keyword}
      </strong>
      {after}
    </>
  );
}

function ArtifactFrame({
  slot,
  children,
  dark,
}: {
  slot: string;
  children: ReactNode;
  dark: boolean;
}) {
  return (
    <div
      data-slot={slot}
      className={cn(
        "artifact-frame relative flex h-full min-h-0 w-full overflow-hidden",
        dark
          ? "bg-white/[0.06] text-white"
          : "bg-[var(--color-bg-alt)] text-[var(--color-ink)]",
      )}
    >
      {children}
    </div>
  );
}

function ArtifactContent({
  visual,
  dark,
}: {
  visual: ProjectSlideData["visual"];
  dark: boolean;
}) {
  if (visual.slot === "voc-cluster") return <VocArtifact dark={dark} />;
  if (visual.slot === "hypothesis-sheet") return <HypothesisArtifact dark={dark} />;
  if (visual.slot === "workflow-diagram") return <WorkflowArtifact dark={dark} />;
  if (visual.slot === "service-framework") return <FrameworkArtifact dark={dark} />;
  if (visual.slot === "project-summary") return <DashboardArtifact dark={dark} />;
  if (visual.slot === "lessons-learned") return <ReflectionArtifact dark={dark} />;
  return <GenericArtifact title={visual.title} items={visual.items} dark={dark} />;
}

function ArtifactHeader({
  label,
  title,
  dark,
}: {
  label: string;
  title: string;
  dark: boolean;
}) {
  return (
    <div>
      <p className={cn("text-[10px] font-medium uppercase tracking-[0.18em]", dark ? "text-white/45" : "text-[var(--color-ink-3)]")}>
        {label}
      </p>
      <h3 className="mt-1 text-[20px] font-bold leading-[1.2] tracking-[-0.02em] sm:text-[24px]">
        {title}
      </h3>
    </div>
  );
}

function VocArtifact({ dark }: { dark: boolean }) {
  const clusters = [
    { label: "응답 지연", value: 42 },
    { label: "대화 연결성", value: 28 },
    { label: "Avatar 자연스러움", value: 18 },
    { label: "기타", value: 12 },
  ];

  return (
    <div className="artifact-content">
      <ArtifactHeader label="VOC Affinity Map" title="Pain Point Cluster" dark={dark} />
      <div className="artifact-bars">
        {clusters.map((cluster) => (
          <div key={cluster.label} className="artifact-bar-row">
            <div className="flex items-center justify-between gap-3 text-[12px] font-medium">
              <span>{cluster.label}</span>
              <span className={dark ? "text-white/55" : "text-[var(--color-text-secondary)]"}>
                {cluster.value}%
              </span>
            </div>
            <div className={cn("mt-2 h-2 overflow-hidden rounded-full", dark ? "bg-white/10" : "bg-white")}>
              <div className="h-full rounded-full bg-[var(--color-primary-accent)]" style={{ width: `${cluster.value}%` }} />
            </div>
          </div>
        ))}
      </div>
      <div className="artifact-chip-row">
        {["Waiting", "Flow Break", "Naturalness"].map((chip) => (
          <span key={chip} className="artifact-chip">
            {chip}
          </span>
        ))}
      </div>
    </div>
  );
}

function HypothesisArtifact({ dark }: { dark: boolean }) {
  return (
    <div className="artifact-content">
      <ArtifactHeader label="Hypothesis Flow" title="Latency UX Test Plan" dark={dark} />
      <div className="artifact-steps">
        {["관찰", "가설", "검증"].map((step, index) => (
          <div key={step} className="artifact-step">
            <span className="artifact-step-index">0{index + 1}</span>
            <strong>{step}</strong>
            <p>{["Waiting 이탈", "상태 피드백", "프로토타입 테스트"][index]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function WorkflowArtifact({ dark }: { dark: boolean }) {
  const steps = ["생성", "대화", "상태", "운영"];
  return (
    <div className="artifact-content">
      <ArtifactHeader label="Workflow Diagram" title="End-to-End Service Flow" dark={dark} />
      <div className="artifact-flow">
        {steps.map((step, index) => (
          <div key={step} className="artifact-flow-node">
            <span>0{index + 1}</span>
            <strong>{step}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

function FrameworkArtifact({ dark }: { dark: boolean }) {
  const rows = ["응답 속도", "대화 연결성", "Avatar 자연스러움"];
  return (
    <div className="artifact-content">
      <ArtifactHeader label="Quality Framework" title="QA Matrix" dark={dark} />
      <div className="artifact-matrix">
        {rows.map((row) => (
          <div key={row} className="artifact-matrix-row">
            <span>{row}</span>
            <span>기준 정의</span>
            <span>점수화</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function DashboardArtifact({ dark }: { dark: boolean }) {
  return (
    <div className="artifact-content">
      <ArtifactHeader label="Performance Dashboard" title="Operation Metrics" dark={dark} />
      <div className="artifact-metric-grid">
        {["PoC", "Latency", "QA Issue", "Stability"].map((metric) => (
          <div key={metric} className="artifact-metric">
            <strong>{metric}</strong>
            <span>{metric === "Latency" ? "XX%" : "Tracking"}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ReflectionArtifact({ dark }: { dark: boolean }) {
  return (
    <div className="artifact-content">
      <ArtifactHeader label="Lessons Learned" title="Planning Reflection Map" dark={dark} />
      <div className="artifact-reflection">
        {["경험", "문제 정의", "운영"].map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </div>
  );
}

function GenericArtifact({
  title,
  items,
  dark,
}: {
  title: string;
  items: string[];
  dark: boolean;
}) {
  return (
    <div className="artifact-content">
      <ArtifactHeader label="Artifact" title={title} dark={dark} />
      <div className="artifact-chip-row">
        {items.map((item) => (
          <span key={item} className="artifact-chip">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
