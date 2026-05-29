import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * ImageSlot — 실제 이미지 교체 가능한 placeholder.
 * - data-slot 으로 식별
 * - 안에 sample visual을 children으로 채울 수 있음
 * - 이미지 / 산출물 / 다이어그램 모두 이 컴포넌트로 감싸 일관된 frame 제공
 */
export function ImageSlot({
  slot,
  ratio = "4/3",
  tone = "light",
  caption,
  badge,
  className,
  children,
}: {
  slot: string;
  ratio?: "16/9" | "4/3" | "3/2" | "1/1" | "21/9" | "auto";
  tone?: "light" | "dark";
  caption?: ReactNode;
  badge?: ReactNode;
  className?: string;
  children?: ReactNode;
}) {
  const aspect =
    ratio === "auto"
      ? ""
      : ratio === "16/9"
      ? "aspect-[16/9]"
      : ratio === "21/9"
      ? "aspect-[21/9]"
      : ratio === "3/2"
      ? "aspect-[3/2]"
      : ratio === "1/1"
      ? "aspect-square"
      : "aspect-[4/3]";

  const bg =
    tone === "dark"
      ? "bg-[#0f0f12] text-white/90 border-white/10"
      : "bg-white text-[var(--color-ink)] border-[var(--color-line)]";

  return (
    <figure
      data-slot={slot}
      className={cn(
        "image-slot relative w-full overflow-hidden rounded-2xl border",
        tone === "dark" && "image-slot--dark",
        bg,
        className,
      )}
    >
      <div className={cn("relative", aspect)}>
        <div className="absolute inset-0 flex items-stretch justify-stretch">
          {children}
        </div>
      </div>

      {(badge || caption) && (
        <figcaption
          className={cn(
            "flex items-center justify-between gap-4 border-t px-5 py-3 text-[12px] font-medium",
            tone === "dark"
              ? "border-white/10 text-white/60 bg-black/20"
              : "border-[var(--color-line)] text-[var(--color-ink-3)] bg-white",
          )}
        >
          <span className="truncate">{caption}</span>
          {badge && (
            <span
              className={cn(
                "shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em]",
                tone === "dark"
                  ? "border-white/15 text-white/70"
                  : "border-[var(--color-line)] text-[var(--color-ink-2)]",
              )}
            >
              {badge}
            </span>
          )}
        </figcaption>
      )}
    </figure>
  );
}
