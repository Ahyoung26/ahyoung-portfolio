# DESIGN_SYSTEM.md
# Interactive AI Portfolio — Design System v3

---

## Core Philosophy

> "This planner defines problems, designs user flows, and builds operational structures inside real AI products."

Style reference: OpenAI Docs + Linear + Editorial UX Case Study

---

## Color System

### Tokens

| Token          | Value                    | Usage                                 |
|----------------|--------------------------|---------------------------------------|
| `--bg`         | `#FFFFFF`                | Default background                    |
| `--bg-alt`     | `#F8F9FA`                | Alt sections, card backgrounds        |
| `--bg-dark`    | `#0D0D0F`                | Problem sections (max contrast)       |
| `--bg-insight` | `rgba(79,70,229,0.04)`   | Insight / hypothesis sections         |
| `--text`       | `#0F0F11`                | Primary body text                     |
| `--text-2`     | `#555555`                | Secondary descriptions                |
| `--text-3`     | `#9CA3AF`                | Muted labels, captions                |
| `--border`     | `#E5E7EB`                | Default borders                       |
| `--border-2`   | `#D1D5DB`                | Stronger borders                      |
| `--accent`     | `#4F46E5`                | Labels, interactive, emphasis         |
| `--accent-dk`  | `#4338CA`                | Accent on text (readable)             |
| `--accent-l`   | `rgba(79,70,229,0.06)`   | Insight card backgrounds              |
| `--accent-m`   | `rgba(79,70,229,0.16)`   | Insight borders                       |

### Ratio Rule
- **Neutral**: 80% (white / light gray)
- **Gray hierarchy**: 15%
- **`#4F46E5` accent**: 5% max

### Where to use accent
- Section labels (`.ps-label`)
- Insight callout borders + backgrounds
- Key metric highlight (`.result-value`, `.rcmp-after`)
- Active node in diagrams
- CTA buttons in sample UI

### Where NOT to use accent
- Gradient backgrounds
- Colorful section fills
- Neon / glow effects
- Large text blocks

---

## Typography

| Use               | Size (desktop)  | Weight | Tracking   |
|-------------------|-----------------|--------|------------|
| Hero Title        | 52–56px         | 700    | −0.04em    |
| Section Title     | 36–40px         | 700    | −0.03em    |
| Project Title     | 28–32px         | 700    | −0.025em   |
| Body              | 17px            | 400    | 0          |
| Caption / Label   | 11–13px         | 400–600| +0.01em    |

- Line height: headings 1.1–1.2 / body 1.75–1.85
- Font: `Pretendard Variable`, `Inter`, `system-ui`
- `word-break: keep-all` on all Korean text

---

## Layout System

- Max width: `1200px`
- Reading width: `820px`
- Section padding: `96px` vertical
- Container padding: `56px` horizontal
- Grid gap: `14–22px`

---

## Section Levels

| Level    | Class        | Background     | When                        |
|----------|--------------|----------------|-----------------------------|
| Hero     | `--intro`    | `#FFFFFF`      | P1 only                     |
| Alt      | `--alt`      | `#F8F9FA`      | Every other section         |
| Problem  | `--problem`  | `#0D0D0F`      | Problem definition pages    |
| Insight  | `--insight`  | accent 4%      | Insight / hypothesis pages  |

---

## Card System

All cards:
- Background: `#FFFFFF` or `#F8F9FA`
- Border: `1px solid #E5E7EB`
- Border radius: `10–16px`
- Box shadow: max `0 1px 4px rgba(0,0,0,0.04)`

NEVER:
- Glassmorphism
- Heavy shadow
- Floating / levitating effect

---

## Sample Visual System

Use sample visuals that look like real portfolio artifacts. Every section must have at least 1.

### Components

| Component               | Class                     | Use For                             |
|-------------------------|---------------------------|-------------------------------------|
| Browser screenshot mock | `.browser-mock`           | Product page / UI screen            |
| Sample chart panel      | `.sample-panel`           | Data chart / dashboard card         |
| Planning artifact stack | `.artifact-stack`         | Overlapping planning docs           |
| Bar chart               | `.bar-chart`              | Download / event / funnel data      |
| Funnel comparison       | `.funnel-card`            | Before/After funnel                 |
| Metric card             | `.result-card` `.result-cmp` | Key result numbers               |
| Conversation UI         | `.conversation-ui`        | Avatar / chat session mock          |
| State cards             | `.state-card`             | Listening / Thinking / Speaking     |
| Criteria wheel          | `.criteria-wheel-svg-wrap`| Natural conversation 5 criteria     |
| Workflow diagram        | SVG in `.workflow-wrap`   | AI processing pipeline              |
| Quality checklist       | `.quality-table`          | QA / ops policy table               |
| Conversation loop       | `.loop-diagram`           | Listen → Understand → Respond loop  |
| Journey comparison      | `.journey-compare`        | Before/After user journey           |
| Process diagram         | SVG in `.process-diagram-wrap` | 6-step planning process        |

### Replaceable Image Slot Rule

Add `data-slot` on any sample visual that will later be replaced:

```html
<div class="browser-mock" data-slot="p4-share-page">
  <!-- sample visual now / real screenshot later -->
</div>
<p class="rcmp-after" data-slot="metric-after-1">+4.0%</p>
```

The wrapper keeps layout/sizing stable. Only the inner visual changes.

---

## PDF Export Rules

- Vertical layout only — no horizontal scroll
- `page-break-inside: avoid` on each section
- No sticky / animated elements
- All SVGs must fit within section width
- Dark sections print acceptably in grayscale
