import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

const NAV = [
  { id: "about", label: "About" },
  { id: "project", label: "Project" },
  { id: "problem", label: "Problem" },
  { id: "user-analysis", label: "User" },
  { id: "service-design", label: "Service" },
  { id: "artifacts", label: "Artifacts" },
  { id: "validation", label: "Validation" },
  { id: "result", label: "Result" },
  { id: "supporting", label: "Supporting" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("about");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV.map((n) => n.id);
    const observers: IntersectionObserver[] = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting) setActive(id);
          }
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <header
      className={cn(
        "no-print fixed inset-x-0 top-0 z-50 transition-[background,backdrop-filter,border-color]",
        scrolled
          ? "bg-white/85 backdrop-blur-md border-b border-[var(--color-line)]"
          : "bg-transparent border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-14 w-full max-w-[1320px] items-center justify-between px-6 sm:px-10 lg:px-16">
        <a
          href="#about"
          className="flex items-center gap-3 text-[12px] font-bold tracking-[-0.01em]"
        >
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-[var(--color-ink)] text-[10px] font-bold text-white">
            AK
          </span>
          <span className="hidden sm:inline">Ahyoung Kim</span>
          <span className="hidden sm:inline text-[var(--color-ink-3)]">
            · AI Service Planner
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={cn(
                "rounded-full px-3 py-1.5 text-[12px] font-medium transition-colors",
                active === n.id
                  ? "bg-[var(--color-ink)] text-white"
                  : "text-[var(--color-ink-2)] hover:bg-[var(--color-bg-alt)]",
              )}
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded-full bg-[var(--color-accent)] px-4 py-1.5 text-[12px] font-bold tracking-[-0.01em] text-white hover:bg-[var(--color-accent-dk)] transition-colors"
        >
          Contact
        </a>
      </div>
    </header>
  );
}
