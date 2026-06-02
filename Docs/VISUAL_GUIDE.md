# VISUAL_GUIDE.md

## Principle

Visual First

Text Supports Visual

---

# Visual Layout

이미지 1개

Visual 영역 전체 사용

첨부 이미지 기준:

* Visual 영역은 우측 60~65%를 차지한다.
* Placeholder는 하나의 큰 산출물 슬롯처럼 보인다.
* 내부에 여러 카드 UI를 반복하지 않는다.
* 중앙에는 산출물 종류와 교체 안내만 간결하게 표시한다.
* Visual 하단 설명은 최소화한다.

---

# Visual Layout (2 Images)

권장

50:50 Split

예시

Workflow | User Flow

Framework | Test Sheet

Before | After

---

# Visual Layout (3 Images 이상)

Carousel 사용

또는

대표 이미지 1개 + Thumbnail

---

# Image Priority

1. Workflow

2. User Flow

3. Quality Framework

4. Test Sheet

5. Prompt Design

6. QA Process

7. Admin Structure

8. Service Architecture

---

# Avoid

스톡 이미지

AI 생성 일러스트

의미 없는 Mockup

과도한 장식

---

# Annotation

필요 시 사용

중요 영역 강조 가능

불필요한 장식 금지

---

# Insight Relation

Insight는 이미지와 연결되어야 한다.

이미지에서 보여주는 내용을

한 문장으로 요약한 것이 Insight여야 한다.

---

# Image Placeholder

실제 이미지가 없을 경우 Placeholder 영역을 유지한다.

규칙:

* 이미지 교체가 가능하도록 `data-slot`을 유지한다.
* Placeholder에는 어떤 산출물이 들어갈지 설명만 노출한다.
* 실제 산출물처럼 오해되는 더미 데이터는 만들지 않는다.
* 의미 없는 차트/카드 반복을 피한다.
* 아이콘은 1개 이하로 사용한다.

Placeholder 예시:

```txt
예시 이미지 영역
QA 가이드, 운영 정책, 이슈 대응 플로우 등 실제 산출물이 들어가는 영역입니다.
```
