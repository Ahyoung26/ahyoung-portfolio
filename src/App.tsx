import { Nav } from "@/components/primitives";
import { About } from "@/sections/About";
import { ProjectHero } from "@/sections/ProjectHero";
import { Problem } from "@/sections/Problem";
import { UserAnalysis } from "@/sections/UserAnalysis";
import { Hypothesis } from "@/sections/Hypothesis";
import { ServiceDesign } from "@/sections/ServiceDesign";
import { Artifacts } from "@/sections/Artifacts";
import { Validation } from "@/sections/Validation";
import { Launch } from "@/sections/Launch";
import { Result } from "@/sections/Result";
import { Reflection } from "@/sections/Reflection";
import { Supporting } from "@/sections/Supporting";
import { Closing } from "@/sections/Closing";

/**
 * AI Service Planner Portfolio
 *
 * Structure (CONTENT_GUIDE.md):
 *  P01  About / Hero
 *  P02  Project Overview (Interactive Avatar)
 *  P03  Problem (DARK)
 *  P04  User Analysis (VOC Cluster + Insight)
 *  P05  Hypothesis (Insight Hero)
 *  P06  Service Design (Large Process Diagram)
 *  P07  Artifact 01 — Quality Framework
 *  P08  Artifact 02 — Validation System
 *  P09  Validation Cases (Table)
 *  P10  Launch & Operation
 *  P11  Result (Before/After + KPI)
 *  P12  Reflection (Quote Hero)
 *  ---  Supporting Projects
 *  ---  Contact
 */
export default function App() {
  return (
    <main className="bg-[var(--color-bg)] text-[var(--color-ink)]">
      <Nav />
      <About />
      <ProjectHero />
      <Problem />
      <UserAnalysis />
      <Hypothesis />
      <ServiceDesign />
      <Artifacts />
      <Validation />
      <Launch />
      <Result />
      <Reflection />
      <Supporting />
      <Closing />
    </main>
  );
}
