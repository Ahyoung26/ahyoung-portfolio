import { Nav } from "@/components/primitives";
import { About } from "@/sections/About";
import { ProjectOverview } from "@/sections/ProjectOverview";
import { ProjectSlides } from "@/sections/ProjectSlides";
import { Supporting } from "@/sections/Supporting";
import { Closing } from "@/sections/Closing";

/**
 * AI Service Planner Portfolio
 *
 * Structure (CONTENT_GUIDE.md):
 *  P01  About / Hero
 *  P02  Career Summary
 *  P03  Project Summary
 *  P04~P09 Case Study Slides
 *  P10  Supporting Projects
 *  ---  Contact
 */
export default function App() {
  return (
    <main className="bg-[var(--color-bg)] text-[var(--color-ink)]">
      <Nav />
      <About />
      <ProjectOverview />
      <ProjectSlides />
      <Supporting />
      <Closing />
    </main>
  );
}
