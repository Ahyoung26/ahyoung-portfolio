/**
 * Portfolio Data — Interactive AI Experience Portfolio
 *
 * 모든 콘텐츠는 이 파일에서 관리됩니다.
 * 실제 이미지는 컴포넌트의 `data-slot` 영역에 추후 교체 가능합니다.
 */

/* ----------------------------------------------------------------
   ABOUT
   ---------------------------------------------------------------- */
export const about = {
  label: "AI Service Planner Portfolio",
  name: "김아영",
  nameEn: "Ahyoung Kim",
  title: "AI 서비스를\n실제로 작동하게 만드는 기획자",
  description:
    "사용자 경험에서 시작해 AI 서비스 기획, 운영 구조 설계, 품질 검증 체계 구축까지 기술과 사용자를 연결하는 일을 해왔습니다. Interactive Avatar, AI Human, AI Dubbing 프로젝트에서 AI를 단순 기능이 아닌 실제 서비스 경험으로 구현하는 과정에 집중해왔습니다.",
  positioning:
    "기능을 정의하는 기획자보다, 문제를 정의하고 검증 가능한 구조로 해결하는 기획자에 가깝습니다.",
  metrics: [
    { value: "10+", label: "서비스 기획 프로젝트" },
    { value: "3+", label: "AI 서비스 런칭" },
    { value: "7+", label: "년 서비스 기획 경험" },
    { value: "100%", label: "기획 주도 프로젝트" },
  ],
  contact: {
    tel: "010-2700-7678",
    email: "aykim0526@gmail.com",
    location: "경기도 군포시 산본동",
  },
  tools: ["Figma", "Notion", "Jira", "Amplitude", "GA", "Cursor", "Claude", "ChatGPT"],
  career: [
    {
      period: "2022.04 — 현재",
      company: "DeepBrain AI",
      role: "AI Studios 서비스 기획",
      items: [
        "Interactive Avatar 서비스 기획",
        "AI Human 플랫폼 기획",
        "AI Dubbing 서비스 개선",
        "AI Admin Platform 구축",
        "AI SaaS 서비스 운영 구조 설계",
        "NH농협은행 AI 가상인간 프로젝트 PM",
      ],
    },
    {
      period: "2020.02 — 2022.04",
      company: "아이파트너즈",
      role: "서비스 기획",
      items: [
        "현대자동차 웹 서비스 구축",
        "제네시스닷컴 운영",
        "Admin 구조 개선",
        "예약 서비스 UX 개선",
        "글로벌 웹사이트 운영",
      ],
    },
    {
      period: "2013.09 — 2020.02",
      company: "투어마케팅코리아 / 알라모",
      role: "서비스 기획",
      items: [
        "렌터카 예약 플랫폼 구축",
        "예약 및 정산 시스템 설계",
        "Admin 운영 구조 설계",
        "VOC 기반 프로세스 개선",
      ],
    },
  ],
  strengths: [
    {
      label: "Problem Definition",
      title: "문제 정의",
      items: ["사용자 행동 분석", "VOC 분석", "서비스 진단"],
    },
    {
      label: "AI Service Planning",
      title: "AI 서비스 기획",
      items: [
        "Conversational UX",
        "AI Workflow",
        "Prompt Structure",
        "서비스 구조 설계",
      ],
    },
    {
      label: "Operational Design",
      title: "운영 구조 설계",
      items: ["Admin 설계", "정책 정의", "상태값 설계", "운영 프로세스"],
    },
    {
      label: "Validation & Improvement",
      title: "검증 및 개선",
      items: [
        "가설 수립",
        "실험 설계",
        "품질 평가 체계",
        "데이터 기반 개선",
      ],
    },
  ],
  keyMessage:
    "AI 서비스는 기술만으로 완성되지 않습니다. 사용자가 자연스럽게 경험할 수 있는 구조를 설계하고, 지속적으로 개선할 수 있는 운영 체계를 만드는 것이 중요하다고 생각합니다.",
};

/* ----------------------------------------------------------------
   MAIN CASE STUDY · INTERACTIVE AVATAR
   ---------------------------------------------------------------- */
export const project = {
  label: "PROJECT 01 · INTERACTIVE AVATAR",
  title: "자연스러운 대화 경험을 정의하고\n실시간 상호작용 구조를 설계하다",
  subtitle:
    "AI Avatar를 단순 응답 전달 도구가 아닌 실시간 상호작용 서비스로 발전시키기 위한 프로젝트",
  oneLiner:
    "AI의 품질을 정의하고, 측정하고, 검증하고, 실제 서비스 경험으로 구현한 프로젝트",
  meta: {
    project: "Interactive Avatar",
    role: [
      "서비스 기획",
      "Conversational UX 설계",
      "AI Workflow 설계",
      "품질 평가 체계 구축",
      "운영 프로세스 설계",
    ],
    contribution: "기획 주도 (Lead Planner)",
  },
  artifacts: [
    "대화 품질 평가 프레임워크",
    "가설 기반 테스트 체계",
    "Interactive Avatar Workflow",
    "운영 정책 및 QA 프로세스",
    "End-to-End 서비스 구조 설계",
  ],
};

/* ----------------------------------------------------------------
   PROBLEM
   ---------------------------------------------------------------- */
export const problem = {
  label: "PROBLEM",
  title: "기존 Avatar는\n대화보다 ‘재생’에 가까웠습니다",
  context:
    "기존 Avatar 서비스는 Chatbot 응답을 전달하는 구조였지만, 사용자는 실제 사람과 대화한다고 느끼기보다 준비된 응답을 재생하는 경험으로 인식하고 있었습니다.",
  feedback: [
    "응답이 늦어 답답하다",
    "대화가 끊긴다",
    "립싱크가 어색하다",
    "사람과 대화하는 느낌이 부족하다",
    "기다리는 시간이 길게 느껴진다",
  ],
  coreQuestion: "사용자가 ‘자연스럽다’고 느끼는 대화는 무엇인가?",
  outputs: ["VOC 분석 문서", "요구사항 정리", "문제 정의 문서"],
};

/* ----------------------------------------------------------------
   USER ANALYSIS
   ---------------------------------------------------------------- */
export const userAnalysis = {
  label: "USER ANALYSIS",
  title: "사용자는 정확도보다\n경험의 ‘연결성’에 더 민감했습니다",
  methods: [
    "고객 인터뷰",
    "VOC 분석",
    "내부 테스트",
    "고객 데모 피드백",
    "영업 조직 피드백",
  ],
  vocClusters: [
    {
      cluster: "응답 속도",
      mentions: 28,
      sample: "응답이 늦어서 사람이 아닌 시스템처럼 느껴졌다",
    },
    {
      cluster: "대화 연결성",
      mentions: 24,
      sample: "흐름이 끊겨서 다음 말을 어떻게 이어야 할지 모르겠다",
    },
    {
      cluster: "기다리는 경험",
      mentions: 19,
      sample: "기다리는 시간이 멈춘 것처럼 느껴진다",
    },
    {
      cluster: "립싱크",
      mentions: 16,
      sample: "입과 음성이 맞지 않아 어색했다",
    },
    {
      cluster: "신뢰감",
      mentions: 12,
      sample: "사람과 대화하고 있다는 느낌이 부족했다",
    },
  ],
  insight:
    "초기에는 답변 정확도가 가장 중요할 것이라 가정했지만, 실제 사용자는 ‘답변 내용’보다 ‘상호작용 과정에서 체감하는 경험’에 더 민감하게 반응했습니다.",
  keyMessage:
    "문제는 AI 성능 자체가 아니라, 사용자가 체감하는 상호작용 경험에 있을 수 있다.",
};

/* ----------------------------------------------------------------
   HYPOTHESIS
   ---------------------------------------------------------------- */
export const hypothesis = {
  label: "HYPOTHESIS",
  title: "자연스러운 대화는 정확도가 아니라\n‘연결성’에서 결정될 수 있다",
  hypothesis:
    "사용자는 정답보다 끊기지 않는 상호작용 경험에서 더 높은 만족도를 느낄 수 있다.",
  evidence: [
    "VOC의 80% 이상이 정확도가 아닌 ‘응답 속도 / 대화 연결성 / 대기 경험 / 립싱크’에 집중",
    "데모 환경에서 정답률보다 응답 흐름 결손 시 만족도가 더 크게 하락",
    "정답이 부정확하더라도 자연스럽게 이어지면 신뢰가 유지되는 경향 관찰",
  ],
  message:
    "AI 품질은 정답률만으로 판단할 수 없으며, 사용자가 체감하는 ‘경험 품질’을 함께 측정해야 한다.",
};

/* ----------------------------------------------------------------
   SERVICE DESIGN — full lifecycle process
   ---------------------------------------------------------------- */
export const serviceDesign = {
  label: "SERVICE DESIGN",
  title: "대화뿐 아니라\n생성 → 운영까지 전체 경험을 설계했습니다",
  description:
    "Interactive Avatar를 단순 대화 기능이 아닌 ‘생성 → 학습 → 검수 → 배포 → 대화 → 운영’ 까지 이어지는 하나의 서비스로 정의했습니다.",
  /** Large process diagram — full service lifecycle */
  lifecycle: [
    { stage: "01", label: "아바타 생성", note: "사진 / 짧은 영상" },
    { stage: "02", label: "음성 등록", note: "Voice 학습" },
    { stage: "03", label: "학습", note: "모델 트레이닝" },
    { stage: "04", label: "검수", note: "QA · 품질 기준" },
    { stage: "05", label: "배포", note: "Slot 할당 / 환경" },
    { stage: "06", label: "대화", note: "Conversation Loop", highlight: true },
    { stage: "07", label: "운영", note: "Monitoring · 개선" },
  ],
  conversationFlow: [
    "사용자 질문",
    "의도 분석",
    "LLM",
    "응답 생성",
    "음성 생성",
    "립싱크",
    "응답 전달",
  ],
  operationFlow: [
    "품질 모니터링",
    "이슈 분석",
    "개선 요청",
    "재생성",
    "재배포",
  ],
};

/* ----------------------------------------------------------------
   ARTIFACTS — 핵심 산출물 2개
   ---------------------------------------------------------------- */
export const artifactQuality = {
  label: "ARTIFACT 01 · QUALITY FRAMEWORK",
  title: "‘자연스러운 대화’를 정의하기 위한\n품질 평가 프레임워크 수립",
  description:
    "품질을 개선하기 전, 무엇이 좋은 품질인지 정의해야 했습니다. Interactive Avatar 품질 평가 프레임워크를 구축했습니다.",
  criteria: [
    {
      title: "Response Timing",
      desc: "응답 지연 / 첫 발화 도달 시간 기준 정의",
    },
    {
      title: "Conversation Continuity",
      desc: "이전 발화 맥락 유지 · 자연스러운 턴 전환",
    },
    {
      title: "Waiting UX",
      desc: "Listening · Thinking · Speaking 상태 시그널",
    },
    {
      title: "Trustworthy Interaction",
      desc: "오류 / 불확실 응답 시 fallback / 신뢰 회복",
    },
    {
      title: "Lip Sync Quality",
      desc: "음성·영상 동기화 mismatch 임계값 정의",
    },
  ],
  result: "품질 논의를 ‘주관적 의견’이 아닌 ‘공통 기준’ 중심으로 전환",
  outputs: ["품질 기준 문서", "품질 평가 시트"],
  imageSlot: "quality-framework",
};

export const artifactValidation = {
  label: "ARTIFACT 02 · VALIDATION SYSTEM",
  title: "가설 → 실험 → 검증\n품질 검증 프로세스 구축",
  description:
    "품질 이슈를 ‘추정’이 아닌 ‘데이터 기반’으로 해결하기 위해 가설 → 실험 → 검증 프로세스를 구축했습니다.",
  flow: ["문제 발견", "가설 정의", "실험 설계", "검증", "인사이트 도출"],
  result: "품질 개선 우선순위를 정할 수 있는 기반 마련",
  outputs: ["테스트 시트", "검증 문서", "실험 결과 리포트"],
  imageSlot: "test-sheet",
};

/* ----------------------------------------------------------------
   VALIDATION — 3 cases
   ---------------------------------------------------------------- */
export const validation = {
  label: "VALIDATION",
  title: "가설을 검증하며\n품질 저하의 실제 원인을 분석했습니다",
  cases: [
    {
      no: "01",
      hypothesis: "패킷 손실이 립싱크 품질 저하의 원인이다",
      experiment: "LiveKit 부하 테스트 / 동일 환경 비교",
      result: "패킷 손실 단독 원인 아님",
      insight: "스트리밍 레이어가 동기화에 미치는 영향 확인",
      verdict: "Reject",
    },
    {
      no: "02",
      hypothesis: "SDK와 스트리밍 품질은 동일하다",
      experiment: "동일 환경에서 SDK / Streaming 비교",
      result: "SDK 품질이 스트리밍 대비 우세",
      insight: "동기화 구조 차이 / 우선순위 적용 필요",
      verdict: "Reject",
    },
    {
      no: "03",
      hypothesis: "모든 Avatar는 동일한 품질을 가진다",
      experiment: "동일 조건에서 Avatar 별 품질 측정",
      result: "Avatar 별 품질 편차 존재",
      insight: "원본 영상 / 음성 품질이 결과 품질에 큰 영향",
      verdict: "Reject",
    },
  ],
};

/* ----------------------------------------------------------------
   LAUNCH — 운영 체계
   ---------------------------------------------------------------- */
export const launch = {
  label: "LAUNCH & OPERATION",
  title: "품질 기준을 서비스에 반영하고\n실제 런칭까지 연결했습니다",
  applied: [
    "응답 지연 UX 개선 (Listening / Thinking 상태 시그널)",
    "대기 경험 개선 (소거 → 명시적 상태 노출)",
    "대화 흐름 최적화 (3턴 문맥 유지 / fallback)",
    "립싱크 품질 개선 (mismatch 기준 적용)",
    "운영 프로세스 구축 (모니터링 + QA 루프)",
  ],
  ops: [
    { step: "Monitoring", desc: "품질 지표 실시간 모니터링" },
    { step: "Feedback", desc: "사용자 피드백 수집 · 라벨링" },
    { step: "Triage", desc: "개선 우선순위 정렬" },
    { step: "QA", desc: "품질 회귀 테스트 / 검증" },
    { step: "Release", desc: "재배포 · 회귀 추적" },
  ],
  outputs: ["운영 정책", "QA 프로세스", "품질 관리 기준"],
  imageSlot: "launch-monitoring",
};

/* ----------------------------------------------------------------
   RESULT — Before / After Big KPI
   ---------------------------------------------------------------- */
export const result = {
  label: "RESULT",
  title: "정성적 논의를\n정량적 개선 체계로 전환했습니다",
  beforeAfter: [
    { topic: "품질 기준", before: "없음", after: "정의 · 수립", delta: "구축" },
    {
      topic: "검증 체계",
      before: "추정 기반",
      after: "가설 · 실험 · 검증",
      delta: "구축",
    },
    {
      topic: "운영 프로세스",
      before: "없음",
      after: "Monitoring · QA",
      delta: "정립",
    },
    {
      topic: "조직 논의",
      before: "‘느낌상 이상하다’",
      after: "기준 기반 개선 논의",
      delta: "전환",
    },
    {
      topic: "런칭 결과",
      before: "—",
      after: "Interactive Avatar 런칭",
      delta: "런칭 완료",
    },
  ],
  keyMetrics: [
    { value: "5", label: "품질 기준 수립" },
    { value: "12+", label: "품질 테스트 수행" },
    { value: "1", label: "서비스 런칭" },
  ],
  message:
    "기존에는 ‘느낌상 이상하다’ 수준의 논의였다면, 이후에는 ‘어떤 요소가 품질에 영향을 주는지’ 기준으로 개선이 가능해졌습니다.",
};

/* ----------------------------------------------------------------
   REFLECTION — closing quote
   ---------------------------------------------------------------- */
export const reflection = {
  label: "REFLECTION",
  quote: "좋은 AI 서비스는\n기술이 아니라 경험에서 완성된다.",
  insights: [
    "품질은 정의되어야 개선할 수 있다",
    "사용자 경험은 정확도보다 ‘연결성’에 영향을 받는다",
    "AI 서비스는 기술과 운영이 함께 설계되어야 한다",
  ],
  closing:
    "저는 AI 기능을 기획한 사람이 아니라, 사용자가 AI를 자연스럽게 경험할 수 있도록 품질 기준을 정의하고 검증 체계를 구축하며 실제 서비스로 런칭한 기획자입니다.",
};

/* ----------------------------------------------------------------
   SUPPORTING PROJECTS — 압축 카드
   ---------------------------------------------------------------- */
export const supportingProjects = {
  label: "SUPPORTING PROJECTS",
  title: "AI · UX · 운영 구조까지\n다양한 프로젝트 경험",
  items: [
    {
      label: "AI DUBBING",
      title: "공유 페이지 퍼널 개선",
      description:
        "다운로드 이후 끊기던 사용자 여정을 서비스 탐색 흐름으로 재설계.",
      kpis: [
        { value: "+4.0%", label: "Project Create" },
        { value: "+4.0%", label: "Active Users" },
      ],
      tags: ["Funnel UX", "Conversion", "Share Page"],
      year: "2024",
      slot: "support-dubbing",
    },
    {
      label: "HYUNDAI · GENESIS",
      title: "차량 구매 전환 퍼널 UX 개선",
      description:
        "복잡한 견적·시승 흐름을 단순화하고 운영 정책과 연결된 UX 구조 설계.",
      kpis: [
        { value: "0건", label: "고객 VOC" },
        { value: "↓", label: "이탈률" },
      ],
      tags: ["B2C", "Admin", "Operational"],
      year: "2021",
      slot: "support-hyundai",
    },
    {
      label: "ALAMO RENT-A-CAR",
      title: "B2B 예약 · 정산 시스템 기획",
      description:
        "모바일 예약 UX와 B2B 선결제·바우처·정산 자동화 시스템 설계.",
      kpis: [
        { value: "+20%", label: "전년 대비 성장" },
        { value: "+15%", label: "B2B 비중" },
      ],
      tags: ["B2B", "Reservation", "Admin"],
      year: "2018–2020",
      slot: "support-alamo",
    },
  ],
};
