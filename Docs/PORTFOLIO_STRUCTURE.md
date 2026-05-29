# PORTFOLIO_STRUCTURE.md
# Portfolio Structure Guide v3

---

## Portfolio Type

- Problem-solving case study portfolio
- Visual-first, editorial documentation style
- AI product service planning archive

Reference tone: OpenAI Docs + Linear + UX Case Study

NOT:
- Visual design showcase
- Startup landing page
- Feature list

---

## Page Map (20 Pages)

| Page | ID   | Section Label             | Level     | Key Visual                          |
|------|------|---------------------------|-----------|-------------------------------------|
| 1    | p1   | About Me                  | Hero      | Artifact stack                      |
| 2    | p2   | Problem Solving           | Standard  | 6-step process diagram + 3 cards    |
| 3    | p3   | Core Strength             | Alt       | Strength summary + artifact stack   |
| 4    | p4   | Project 01 Overview       | Standard  | Browser mockup + funnel + metrics   |
| 5    | p5   | 문제 정의 (DARK)           | Problem   | AS-IS mockup + chart + journey SVG  |
| 6    | p6   | Insight & Hypothesis      | Insight   | Before/After journey + callout      |
| 7    | p7   | Solution Design           | Standard  | Improved browser mockup + flow      |
| 8    | p8   | Result                    | Alt       | 3 before/after metric cards         |
| 9    | p9   | Reflection                | Standard  | Exp flow + editorial quote          |
| 10   | p10  | Project 02 Overview       | Standard  | Conversation UI + state cards       |
| 11   | p11  | 문제 정의 (DARK)           | Problem   | Pain point map + dead-end diagram   |
| 12   | p12  | Insight & Solution        | Insight   | Criteria wheel SVG + callout        |
| 13   | p13  | AI Workflow               | Standard  | Workflow SVG + 4 component cards    |
| 14   | p14  | Operational Design        | Alt       | Ops flow + quality checklist        |
| 15   | p15  | Reflection                | Standard  | Conversation loop + editorial quote |
| 16   | p16  | Supporting: 현대/제네시스  | Alt       | Purchase funnel + policy table      |
| 17   | p17  | Supporting: 알라모        | Standard  | Reservation flow SVG + policy       |
| 18   | p18  | Working Process           | Alt       | Process SVG + 6 step cards          |
| 19   | p19  | Philosophy                | Standard  | Editorial quote block               |
| 20   | p20  | Contact                   | Alt       | Contact card + intro note           |

---

## Section Component (Universal)

Every section:

```
[SECTION LABEL]    ← 11px / uppercase / accent
[TITLE]            ← 36–42px / bold / concise (max 2 lines)
[SUBTITLE]         ← 17px / muted / 1 line
──────────────────
[VISUAL AREA]      ← 60–70% weight
  - browser-mock / sample-panel / artifact-stack
  - funnel-card / bar-chart / criteria-wheel
  - conversation-ui / state-grid / quality-table
  - loop-diagram / workflow SVG / process SVG
──────────────────
[CONTENT AREA]     ← 30–40% weight
  - cb-insight / cb-list / editorial-quote
  - max 3–4 bullet items
```

---

## Section Depth Levels

| Level      | Class          | Background          | Usage                           |
|------------|----------------|---------------------|---------------------------------|
| Hero       | `--intro`      | `#FFFFFF`           | P1 opening                      |
| Standard   | (none)         | `#FFFFFF`           | Most content pages              |
| Alt        | `--alt`        | `#F8F9FA`           | Alternating / strength / ops    |
| Problem    | `--problem`    | `#0D0D0F` dark      | P5, P11 (max contrast)          |
| Insight    | `--insight`    | accent 4% tint      | P6, P12 (after problem)         |

---

## Sample Visual / Image Slot Rules

Every section must have at least 1 sample visual. Rules:

1. Use semantic wrapper with `data-slot` attribute for replaceable visuals
2. Sample must look complete — realistic labels, values, charts, UI blocks
3. NEVER use bracket-notation text (`[이미지 삽입]`, etc.)

Slot components:
- `.browser-mock` — product page screenshots
- `.sample-panel` — charts / dashboards / data
- `.artifact-stack` — overlapping planning artifacts
- `.conversation-ui` — chat / avatar UI
- `.quality-table` — QA / policy checklist
- `.funnel-card` / `.bar-chart` — data visualization
- `.criteria-wheel-svg-wrap` — multi-criteria radial

---

## Project Story Arc

Each project follows:

```
1. Problem Evidence    ← browser mockup + chart
2. Problem Definition  ← dark section, journey diagram
3. Insight / Hypothesis← insight tint, before/after
4. Solution Design     ← improved mockup + flow
5. Result / Metrics    ← before/after metric cards
6. Reflection          ← editorial quote + exp flow
```

---

## Typography Rules

- Title: max 2 lines, strong, word-break: keep-all
- Subtitle: 1 sentence, muted
- Content bullets: max 4 items
- No long prose paragraphs
- Keywords: `.em-accent` or `<strong>`
