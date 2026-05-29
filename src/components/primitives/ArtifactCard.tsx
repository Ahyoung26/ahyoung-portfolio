import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { ImageSlot } from "./ImageSlot";
import { Eyebrow } from "./Eyebrow";

/**
 * Artifact Card — 산출물 이미지가 카드의 70% 이상.
 * Layout: image (large) → title → purpose → result.
 */
export function ArtifactCard({
  eyebrow,
  title,
  purpose,
  result,
  outputs,
  imageSlot,
  imageRatio = "16/9",
  imageContent,
  imageCaption,
  imageBadge,
  layout = "stacked",
  tone = "default",
  className,
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  purpose?: ReactNode;
  result?: ReactNode;
  outputs?: string[];
  imageSlot: string;
  imageRatio?: "16/9" | "4/3" | "3/2" | "21/9";
  imageContent?: ReactNode;
  imageCaption?: ReactNode;
  imageBadge?: ReactNode;
  layout?: "stacked" | "split";
  tone?: "default" | "alt";
  className?: string;
}) {
  const card =
    tone === "alt"
      ? "bg-white border-[var(--color-line)]"
      : "bg-white border-[var(--color-line)]";

  if (layout === "split") {
    return (
      <article
        className={cn(
          "grid gap-8 rounded-3xl border p-5 lg:p-8 lg:grid-cols-[1.4fr_1fr]",
          card,
          className,
        )}
      >
        <ImageSlot
          slot={imageSlot}
          ratio={imageRatio}
          caption={imageCaption}
          badge={imageBadge}
        >
          {imageContent}
        </ImageSlot>
        <div className="flex flex-col">
          {eyebrow && <Eyebrow className="mb-3">{eyebrow}</Eyebrow>}
          <h3 className="text-[24px] sm:text-[28px] lg:text-[32px] font-bold tracking-[-0.02em] leading-[1.2] keep-all">
            {title}
          </h3>
          {purpose && (
            <p className="mt-4 text-[15px] leading-[1.7] text-[var(--color-ink-2)] keep-all">
              {purpose}
            </p>
          )}
          {result && (
            <div className="mt-6 rounded-xl bg-[var(--color-bg-insight)] px-4 py-3 border border-[var(--color-accent-m)]">
              <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                Result
              </div>
              <div className="mt-1 text-[14px] font-semibold text-[var(--color-ink)] keep-all">
                {result}
              </div>
            </div>
          )}
          {outputs && outputs.length > 0 && (
            <div className="mt-auto pt-6">
              <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--color-ink-3)] mb-3">
                Outputs
              </div>
              <ul className="flex flex-wrap gap-2">
                {outputs.map((o, i) => (
                  <li
                    key={i}
                    className="rounded-full border border-[var(--color-line)] bg-[var(--color-bg-alt)] px-3 py-1 text-[12px] font-medium text-[var(--color-ink-2)]"
                  >
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </article>
    );
  }

  return (
    <article
      className={cn(
        "flex flex-col rounded-3xl border overflow-hidden",
        card,
        className,
      )}
    >
      <ImageSlot
        slot={imageSlot}
        ratio={imageRatio}
        caption={imageCaption}
        badge={imageBadge}
        className="rounded-none border-x-0 border-t-0"
      >
        {imageContent}
      </ImageSlot>
      <div className="p-6 lg:p-8">
        {eyebrow && <Eyebrow className="mb-3">{eyebrow}</Eyebrow>}
        <h3 className="text-[22px] sm:text-[26px] font-bold tracking-[-0.02em] leading-[1.2] keep-all">
          {title}
        </h3>
        {purpose && (
          <p className="mt-3 text-[14px] leading-[1.7] text-[var(--color-ink-2)] keep-all">
            {purpose}
          </p>
        )}
        {result && (
          <div className="mt-5 rounded-xl bg-[var(--color-bg-insight)] px-4 py-3 border border-[var(--color-accent-m)]">
            <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--color-accent)]">
              Result
            </div>
            <div className="mt-1 text-[13px] font-semibold text-[var(--color-ink)] keep-all">
              {result}
            </div>
          </div>
        )}
        {outputs && outputs.length > 0 && (
          <ul className="mt-5 flex flex-wrap gap-2">
            {outputs.map((o, i) => (
              <li
                key={i}
                className="rounded-full border border-[var(--color-line)] bg-[var(--color-bg-alt)] px-3 py-1 text-[12px] font-medium text-[var(--color-ink-2)]"
              >
                {o}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
