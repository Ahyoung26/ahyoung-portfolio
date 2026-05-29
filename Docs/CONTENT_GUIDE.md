# CONTENT_GUIDE.md
# Portfolio Content Guide v3
# 20-Page Structure — Draft Content & Slot Map

---

> All text marked `[DATA SLOT]` should be replaced with real data.
> All visuals marked `data-slot` in the HTML should be replaced with real screenshots/numbers.

---

## PAGE 1 · Intro

**Section Label:** About Me
**Title:** 문제를 구조로 해결하는 서비스 기획자 김아영입니다.
**Subtitle:** 데이터와 사용자 흐름을 기반으로 서비스의 문제를 정의하고, 실제로 운영 가능한 해결 구조를 설계합니다.

**Visual:** Artifact stack (right)
- funnel chart (mini-bars)
- user flow mini-diagram
- admin policy preview table

**Career Timeline:**
- 2022.04 – 현재 · 딥브레인AI · Interactive AI Human 서비스 기획 PL
- 2020.02 – 2022.04 · 아이파트너즈 · 현대/제네시스 UX, Admin 구조 개선
- 2013.09 – 2020.02 · 투어마케팅코리아 · 글로벌 예약 시스템 UX 설계

**Tags:** Conversational AI / Interactive Avatar / AI Workflow / Admin UX / Funnel Optimization / Operational Design / LLM / RAG

---

## PAGE 2 · Problem Solving

**Section Label:** Problem Solving
**Title:** 기능보다 먼저, 사용자의 흐름과 서비스 구조를 봅니다.
**Subtitle:** 서비스 문제는 기능 부족보다 흐름의 단절에서 발생한다고 생각합니다.

**Visual:** 6-step process SVG diagram
- Steps: Problem Discovery → Data Analysis → User Flow Mapping → Hypothesis → Solution Design → Validation
- Hypothesis node: accent fill

**Principles (3 cards):**
1. 데이터에서 시작합니다 — 사용자 행동 데이터와 이탈 패턴에서 서비스 문제를 발견
2. 흐름의 단절을 찾습니다 — 어느 지점에서 경험이 끊기는지 구조적으로 파악
3. 운영까지 함께 설계합니다 — UX 흐름과 운영 정책을 동시에 고려

---

## PAGE 3 · Core Strength

**Section Label:** Core Strength
**Title:** 사용자 경험과 운영 구조를 함께 설계합니다.
**Subtitle:** 문제 정의부터 운영 구조까지 실제로 작동 가능한 서비스를 고민합니다.

**Visual:** Strength summary (left) + artifact stack (right)

**4 Core Strengths:**
1. 데이터 기반 문제 정의 (funnel / event)
2. UX / 서비스 흐름 설계 (journey / CTA)
3. 운영 구조 설계 (state / policy)
4. 인터랙티브 경험 설계 (LLM / avatar)

---

## PROJECT 01 — AI DUBBING

### PAGE 4 · Project Overview

**Section Label:** Main Project 01 · AI Dubbing
**Title:** 다운로드 이후 끊기던 경험을 서비스 탐색 흐름으로 전환
**Subtitle:** AI Dubbing 공유 페이지 퍼널 개선 프로젝트

**Meta:**
- Role: 서비스 기획 / UX 구조 설계
- Contribution: 기획 100%
- Service: AI Studios — Dubbing (딥브레인AI)

**Visual:**
- Browser mockup: AI Dubbing 공유 페이지 AS-IS
  - `data-slot="p4-share-page"`
- Bar chart: Download funnel (5 bars)
- 2 result cards:
  - Project Create +4.0% (`data-slot="metric-after-p4-1"`)
  - Active Users +4.0% (`data-slot="metric-after-p4-2"`)

**Tasks:**
1. 퍼널 분석 — 공유 페이지 유입 → 다운로드 → 이탈 구간 데이터 분석
2. 사용자 흐름 재설계 — 다운로드 이후 서비스 탐색으로 이어지는 구조 설계
3. CTA 구조 개선 — 다운로드 대기 시간 핵심 기능 노출
4. 기능 탐색 흐름 — 회원가입 이후 공유 페이지 연계

### PAGE 5 · 문제 정의 (DARK)

**Section Label:** 문제 정의 · AS-IS 분석
**Title:** 유입은 많았지만, 서비스 사용으로 이어지지 않았습니다.

**Visual (dark section):**
- Left: AS-IS browser mockup (dark) `data-slot="p5-asis-mockup"`
- Right: Download event bar chart (dark style)
- Below: Dead-end user journey SVG diagram
  - Entry → 공유 페이지 → 다운로드 → 종료 (strikethrough)
  - Dotted accent path → 서비스 탐색 ✓ (opportunity)
- 4 metric cards: 다운로드 수 (High) / Session Start (Low) / Signup 전환율 (Very Low) / Project Create (Very Low)

**Key message:** 공유 페이지가 '서비스 진입로'가 아니라 '종착지'처럼 작동하고 있었습니다.

### PAGE 6 · Insight / Hypothesis (INSIGHT TINT)

**Section Label:** Insight & Hypothesis
**Title:** 다운로드 이후에도 서비스 가치를 경험할 수 있어야 한다고 판단했습니다.

**Visual:**
- Before/After journey comparison (2 columns)
  - Before: 외부 유입 → 공유 페이지 → 다운로드 → 종료
  - After: 유입 → 시청 → 다운로드 + 기능 노출 → 기능 탐색 → 회원가입 → 프로젝트 생성
- Insight callout: "다운로드 대기 시간은 서비스 가치를 자연스럽게 전달할 수 있는 구간입니다."

### PAGE 7 · Solution Design

**Section Label:** Solution Design
**Title:** 다운로드 이후의 흐름을 서비스 경험으로 재설계

**Visual:**
- Improved browser mockup (TO-BE) with mock-cta-section `data-slot="p7-improved-page"`
- 4 solution flow items:
  1. 다운로드 대기 시간 활용
  2. AI Dubbing CTA 추가
  3. 파일 맥락 기반 기능 추천
  4. 회원가입 이후 연계

### PAGE 8 · Result

**Section Label:** Result
**Title:** 기능 탐색과 프로젝트 생성 행동이 증가했습니다.

**Visual:** 3 result-cmp cards (middle: accent)
- Project Create: [DATA SLOT] `data-slot="metric-after-1"`
- Active Users: [DATA SLOT] `data-slot="metric-after-2"`
- Feature Explore: [DATA SLOT] `data-slot="metric-after-3"`

### PAGE 9 · Reflection

**Section Label:** Reflection
**Title:** 사용자가 서비스 가치를 경험할 수 있는 흐름이 중요하다고 느꼈습니다.

**Visual:**
- exp-flow (4 steps, 2 accent): 외부 유입 → 대기 중 기능 노출 → 가치 인식 → 가입·생성
- Editorial quote `data-slot="reflection-quote"`:
  "이후에는 '사용자 행동이 자연스럽게 이어지는 흐름'을 중심으로 서비스를 바라보게 되었습니다."

---

## PROJECT 02 — INTERACTIVE AVATAR

### PAGE 10 · Project Overview

**Section Label:** Main Project 02 · Interactive Avatar
**Title:** AI Avatar를 실시간 상호작용 경험으로 확장

**Meta:**
- Role: UX 구조 설계 / AI Workflow / 운영 정책 / 품질 기준
- Contribution: 기획 100%
- Service: Interactive AI Human (딥브레인AI)

**Visual:**
- Conversation UI mockup `data-slot="p10-avatar-ui"` (sample conversation turns)
- State grid: Listening / Thinking (active) / Speaking

### PAGE 11 · 문제 정의 (DARK)

**Section Label:** 문제 정의
**Title:** 기존 Avatar 경험은 '시청하는 콘텐츠'에 가까웠습니다.

**Visual:**
- Pain point map (5 cards):
  1. 응답 지연
  2. 부자연스러운 음성
  3. 어색한 립싱크
  4. 대화 문맥 단절
  5. 품질 기준 부재
- Conversation dead-end SVG diagram

**Key message:** 기존 Avatar는 chatbot 연결 기반의 제한적 role-play 형태였고, 자연스러운 대화 경험이 없었습니다.

### PAGE 12 · Insight / Solution Direction (INSIGHT TINT)

**Section Label:** Insight & Solution Direction
**Title:** 중요한 것은 생성 자체보다, 자연스럽게 대화를 이어가는 경험이었습니다.

**Visual:**
- Criteria wheel SVG (natural conversation criteria)
  - Center: Perceived Naturalness
  - 5 nodes: Response Timing / Continuity / Waiting UX / Lip Sync / Trustworthy Interaction
- Insight callout: "사용자는 모델 정확도보다 자연스러운 interaction continuity에 더 민감했다."

### PAGE 13 · AI Workflow

**Section Label:** AI Workflow Design
**Title:** 실시간 상호작용을 위한 AI Workflow 구조 설계

**Visual:**
- Large SVG workflow:
  User Input → Intent Analysis → LLM (accent) → Optional RAG (dotted) → Response Generation → Avatar Speech → Lip Sync → Feedback → [loop back]
- 4 workflow cards:
  1. 의도 분석 (Intent)
  2. 응답 생성 (LLM + RAG)
  3. 음성 합성 (Avatar Speech)
  4. 대화 연속 (Feedback Loop)

### PAGE 14 · Operational Design

**Section Label:** Operational Design
**Title:** 운영 가능한 Interactive AI 구조 설계

**Visual:**
- Ops flow SVG (vertical): Session Start → Conversation Generation → Quality Validation → Tracking → Admin
- Quality checklist table (6 rows):
  - Response Timing / Continuity / Waiting UX / Lip Sync / Voice Quality / Trust / Fallback

### PAGE 15 · Reflection

**Section Label:** Reflection
**Title:** AI 경험은 기술보다 상호작용의 자연스러움이 중요했습니다.

**Visual:**
- Loop diagram: Listen → Understand → Respond → Continue
- Editorial quote `data-slot="p15-reflection-quote"`:
  "AI 서비스에서 중요한 것은 모델 자체보다, 사용자가 얼마나 자연스럽게 상호작용을 이어갈 수 있는가입니다."

---

## SUPPORTING PROJECTS

### PAGE 16 · 현대자동차 / 제네시스

**Section Label:** Supporting Project · 현대자동차 / 제네시스
**Title:** 복잡한 구매 흐름을 전환 중심 UX로 재구성

**Visual:**
- Funnel comparison: AS-IS vs TO-BE (4 stages: 랜딩 / 견적 / 시승 신청 / 완료)
- Admin policy table (4 rows): 견적 요청 / 시승 신청 / 상담 로그 / 오류 처리

### PAGE 17 · 알라모 렌터카

**Section Label:** Supporting Project · 알라모 렌터카
**Title:** 예약 → 결제 → 정산까지 연결되는 운영 구조 설계

**Visual:**
- SVG flow: 예약 → 결제 → 바우처 발행 (accent) → 현장 픽업 → 정산 → Admin
- Policy table (3 rows): 모바일 예약 UX / B2B 선결제 / 정산 구조

---

## PAGE 18 · Working Process

**Section Label:** Working Process
**Title:** 문제를 구조화하고, 실제 운영 가능한 흐름으로 연결합니다.

**Visual:**
- Large 6-step SVG (same as P2)
- Process grid (6 cards, step 4 accent):
  1. Problem Discovery — 현상 파악 & 가설 수립
  2. Data Analysis — 행동 데이터 분석
  3. User Flow Map — 사용자 여정 분석
  4. Hypothesis — 문제 정의 & 근거 (ACCENT)
  5. Solution Design — UX / 운영 구조 설계
  6. Validation — 검증 & 반복 개선

---

## PAGE 19 · Philosophy

**Section Label:** Philosophy
**Title:** 서비스는 기능보다 흐름 안에서 경험된다고 생각합니다.

**Visual:** Centered editorial quote block
- Quote `data-slot="philosophy-main-quote"`:
  "서비스를 기능 모음이 아니라 사용자와 운영 환경 안에서 하나의 흐름으로 작동하는 구조로 봅니다."
- Sub `data-slot="philosophy-sub-text"`:
  "데이터에서 문제를 발견하고, 사용자 여정에서 단절을 찾고, 운영 가능한 구조로 해결하는 과정을 반복합니다."

---

## PAGE 20 · Contact

**Section Label:** Contact
**Title:** 감사합니다.
**Subtitle:** 함께 고민하고, 실제로 작동하는 서비스를 만들고 싶습니다.

**Visual:**
- Contact card:
  - Name: 김아영
  - Title: 서비스 기획자 · 딥브레인AI
  - Email `data-slot="contact-email"`: ay.kim@email.com
  - Notion `data-slot="contact-notion"`: notion.so/ay-portfolio
  - LinkedIn `data-slot="contact-linkedin"`: linkedin.com/in/ay-kim
- Contact note:
  - Headline `data-slot="contact-headline"`: 문제를 구조로 해결하는 기획을 합니다.
  - Body `data-slot="contact-body"`: [실제 소개 문구로 교체]

---

## DATA SLOT SUMMARY

| Slot ID                    | Page | Type    | Current Value            |
|----------------------------|------|---------|--------------------------|
| p4-share-page              | P4   | image   | browser-mock sample       |
| p5-asis-mockup             | P5   | image   | browser-mock sample       |
| metric-after-1             | P8   | metric  | +4.0%                    |
| metric-after-2             | P8   | metric  | +4.0%                    |
| metric-after-3             | P8   | metric  | +4.0%                    |
| reflection-quote           | P9   | text    | sample quote             |
| p10-avatar-ui              | P10  | image   | conversation-ui sample    |
| p15-reflection-quote       | P15  | text    | sample quote             |
| philosophy-main-quote      | P19  | text    | sample quote             |
| philosophy-sub-text        | P19  | text    | sample text              |
| contact-email              | P20  | data    | ay.kim@email.com         |
| contact-notion             | P20  | data    | notion.so/ay-portfolio   |
| contact-linkedin           | P20  | data    | linkedin.com/in/ay-kim   |
| contact-headline           | P20  | text    | sample headline          |
| contact-body               | P20  | text    | sample body              |
