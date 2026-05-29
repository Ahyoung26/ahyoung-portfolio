import { type ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Container({
  children,
  className,
  size = "lg",
}: {
  children: ReactNode;
  className?: string;
  size?: "lg" | "xl" | "full";
}) {
  const max =
    size === "full"
      ? "max-w-none"
      : size === "xl"
      ? "max-w-[1320px]"
      : "max-w-[1200px]";
  return (
    <div className={cn("mx-auto w-full px-6 sm:px-10 lg:px-16", max, className)}>
      {children}
    </div>
  );
}
