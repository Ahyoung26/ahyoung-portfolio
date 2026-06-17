import { useEffect, useMemo, useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";

function getPageNumber(pageLabel: string) {
  const match = pageLabel.match(/PAGE\s*(\d+)/i);
  return match?.[1]?.padStart(2, "0") ?? null;
}

export function ArtifactImage({
  pageLabel,
  alt,
  className,
  children,
}: {
  pageLabel: string;
  alt: string;
  className?: string;
  children: ReactNode;
}) {
  const pageNumber = useMemo(() => getPageNumber(pageLabel), [pageLabel]);
  const src = useMemo(() => {
    if (!pageNumber) return null;

    const meta = import.meta as unknown as { env?: { BASE_URL?: string } };
    const base = meta.env?.BASE_URL || "/";
    const normalizedBase = base.endsWith("/") ? base : `${base}/`;
    return `${normalizedBase}assets/${pageNumber}.png`;
  }, [pageNumber]);
  const [hasImage, setHasImage] = useState(Boolean(src));

  useEffect(() => {
    setHasImage(Boolean(src));
  }, [src]);

  if (!src || !hasImage) return <>{children}</>;

  return (
    <img
      src={src}
      alt={alt}
      className={cn("artifact-image", className)}
      loading="lazy"
      onError={() => setHasImage(false)}
    />
  );
}
