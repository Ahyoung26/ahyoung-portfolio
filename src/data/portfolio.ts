/**
 * Portfolio Data — Interactive AI Experience Portfolio
 *
 * 모든 콘텐츠는 이 파일에서 관리됩니다.
 * 실제 이미지는 컴포넌트의 `data-slot` 영역에 추후 교체 가능합니다.
 */

/* ----------------------------------------------------------------
   ABOUT (PAGE 01)
   ---------------------------------------------------------------- */
export const about = {
  label: "ABOUT ME",
  name: "김아영",
  nameEn: "Ahyoung Kim",
  // Level 1: Hero Title
  title: "AI 기술을 사용자 경험과\n비즈니스 가치로 연결하는 PM",
  // Level 4: Description (의미 단위 분리 및 축약)
  description:
    "Interactive Avatar, AI Human, AI Studios 등\n\n생성형 AI 서비스의 설계부터 운영까지 경험했습니다.",
  
  // Core Strength (PAGE 01 핵심 역량)
  strengths: [
    {
      label: "문제 정의",
      title: "문제 정의",
      items: ["사용자 행동 분석", "VOC 분석", "요구사항 정의"],
      tools: ["Amplitude", "Google Analytics", "Notion"]
    },
    {
      label: "서비스 설계",
      title: "서비스 설계",
      items: ["서비스 구조 설계", "User Flow 설계", "정책 정의"],
      tools: ["Figma", "Notion", "Jira"]
    },
    {
      label: "운영 체계 구축",
      title: "운영 체계 구축",
      items: ["Admin 설계", "상태값 정의", "운영 프로세스 구축"],
      tools: ["Jira", "Notion", "Figma"]
    },
    {
      label: "가설 검증 및 개선",
      title: "가설 검증 및 개선",
      items: ["가설 수립", "실험 설계", "데이터 기반 개선"],
      tools: ["Amplitude", "Google Analytics", "Cursor", "ChatGPT", "Claude"]
    }
  ],
  
  contact: {
    tel: "010-2700-7678",
    email: "aykim0526@gmail.com",
    location: "경기도 군포시 산본동",
  },
  tools: ["Figma", "Notion", "Jira", "Amplitude", "Google Analytics", "Cursor", "Claude", "ChatGPT"],
  metrics: [
    { value: "10+", label: "서비스 기획 프로젝트" },
    { value: "3+", label: "AI 서비스 런칭" },
    { value: "7+", label: "년 서비스 기획 경험" },
    { value: "100%", label: "기획 주도 프로젝트" },
  ]
};

/* ----------------------------------------------------------------
   CAREER SUMMARY (PAGE 02)
   ---------------------------------------------------------------- */
export const careerSummary = {
  label: "CAREER SUMMARY",
  title: "AI SaaS부터 글로벌 플랫폼까지\n서비스 구축과 운영을 리드해왔습니다.",
  description:
    "신규 서비스 구축부터 대규모 플랫폼 운영까지\n\n서비스 전 주기의 구조 설계를 수행했습니다.",
  
  // Experience Summary (회사 목록보다 먼저 읽혀야 하는 핵심 키워드들)
  experienceSummary: [
    "11년+ 서비스 기획 경험",
    "AI SaaS",
    "B2B Solution",
    "Platform Service",
    "Admin 시스템",
    "Operation Policy"
  ],

  // Career Timeline
  timeline: [
    {
      period: "2022.04 — 현재",
      company: "DeepBrain AI",
      role: "AI 서비스 기획",
      items: [
        "Interactive Avatar",
        "AI Human",
        "AI Dubbing",
        "NH농협은행 AI 가상인간",
        "AI Studios SaaS"
      ],
      roleSummary: "대화형 AI 서비스 구조 설계, 운영 기준 수립, SaaS 기능 개선"
    },
    {
      period: "2020.02 — 2022.04",
      company: "아이파트너즈",
      role: "서비스 기획",
      items: [
        "현대자동차",
        "제네시스 글로벌",
        "Admin 구조 개선",
        "운영 정책 수립"
      ],
      roleSummary: "브랜드 플랫폼 운영 정책과 Admin 구조 개선"
    },
    {
      period: "2013.09 — 2020.02",
      company: "투어마케팅코리아 / 알라모",
      role: "서비스 기획",
      items: [
        "렌터카 예약 플랫폼",
        "정산 시스템",
        "Admin 운영 구조 설계",
        "VOC 기반 개선"
      ],
      roleSummary: "예약/정산 플랫폼의 운영 프로세스와 VOC 기반 개선"
    }
  ],

  keyMessage: "서비스는 출시보다 운영이 중요하다고 생각합니다. 사용자 문제를 발견하고 서비스 구조를 설계하며 운영 가능한 체계로 연결해왔습니다.",

  // Project Summary (Interactive Avatar 메인 프로젝트 개요)
  projectSummary: {
    context:
      "Avatar 생성부터 실시간 대화까지,\n대화형 AI 기술을 실제 서비스 경험으로 연결하기 위한 구조 설계",
    background: [
      "Chatbot 중심 경험의 한계로 차별화된 상호작용 경험 필요",
      "실시간 추론 지연으로 사용자 이탈 발생",
      "서비스 품질을 판단할 공통 기준 부재",
    ],
    scope: [
      "Avatar 생성 및 대화 경험 설계",
      "AI 엔진-클라이언트 인터랙션 구조 정의",
      "품질 평가 Framework 수립",
      "운영 프로세스 및 정책 정의",
    ],
    role: [
      "서비스 기획 리드",
      "품질 기준 정의",
      "운영 체계 설계",
    ],
    insight:
      "대화형 AI의 경쟁력은 모델 성능 자체보다 기술을 사용자 경험으로 전환하는 구조에 있음.",
    oneLiner:
      "기술 중심 관점이 아닌 서비스 경험 중심 관점으로 문제를 재정의함.",
  }
};

/* ----------------------------------------------------------------
   MAIN CASE STUDY · INTERACTIVE AVATAR (PAGE 02 Project Hero용 데이터 호환 유지)
   ---------------------------------------------------------------- */
export const project = {
  label: "PROJECT 01 · INTERACTIVE AVATAR",
  title: "자연스러운 대화 경험을 정의하고\n실시간 상호작용 구조를 설계하다",
  subtitle: "AI Avatar를 단순 응답 전달 도구가 아닌 실시간 상호작용 서비스로 발전시키기 위한 프로젝트",
  oneLiner: "Avatar 생성부터 운영까지 대화형 AI 서비스를 설계한 프로젝트",
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
    "Interactive Avatar Workflow",
    "User Flow",
    "서비스 평가 Framework",
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
    "Chatbot 응답을 전달하는 구조 — 사용자는 ‘대화’가 아닌 ‘재생’으로 인식했다.",
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
    "사용자는 ‘답변 내용’보다 ‘상호작용에서 체감하는 경험’에 더 민감했다.",
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
    "단순 대화 기능이 아닌 ‘생성 → 운영’ 전체를 하나의 서비스로 정의.",
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
  description: "개선보다 먼저 ‘무엇이 좋은 품질인가’를 정의했다.",
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
  description: "품질 이슈를 추정이 아닌 ‘데이터 기반’으로 해결.",
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
  message: "‘느낌상 이상하다’ → ‘무엇이 품질에 영향을 주는가’ 기준으로 전환.",
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
  title: "주요 서비스 구축 경험",
  description:
    "AI SaaS, 글로벌 플랫폼, 모빌리티 서비스까지 다양한 도메인 경험 보유",
  insight:
    "도메인은 달라도 복잡한 문제를 구조화하고 운영 가능한 서비스로 전환하는 과정은 동일함.",
  insightSub:
    "서비스 기획의 본질은 기능 정의가 아니라 비즈니스와 사용자를 연결하는 구조를 설계하는 데 있음.",
  commonRole: [
    "서비스 구조 설계",
    "운영 체계 구축",
    "정책 및 프로세스 정의",
  ],
  items: [
    {
      label: "GENESIS GLOBAL",
      title: "제네시스 글로벌",
      highlights: [
        "차량 견적 및 시승 플랫폼 고도화",
        "글로벌 운영 정책 수립",
        "Admin 구조 개선",
      ],
      kpis: [],
      tags: ["B2C", "Admin", "Global"],
      year: "2020–2022",
      slot: "support-genesis",
    },
    {
      label: "HYUNDAI.COM",
      title: "현대닷컴",
      highlights: [
        "O2O 예약 서비스 개선",
        "운영 기능 모듈화",
        "사용자 여정 최적화",
      ],
      kpis: [],
      tags: ["O2O", "Admin", "UX"],
      year: "2020–2022",
      slot: "support-hyundai",
    },
    {
      label: "ALAMO RENT-A-CAR",
      title: "알라모 렌터카",
      highlights: [
        "예약·정산 플랫폼 구축",
        "Admin 시스템 설계",
        "글로벌 운영 프로세스 구축",
      ],
      kpis: [
        { value: "+20%", label: "전년 대비 성장" },
        { value: "+15%", label: "B2B 비중" },
      ],
      tags: ["B2B", "Reservation", "Admin"],
      year: "2013–2020",
      slot: "support-alamo",
    },
  ],
};

/* ----------------------------------------------------------------
   CASE STUDY SLIDES (CONTENT_GUIDE PAGE 04~10)
   ---------------------------------------------------------------- */
export type ProjectSlideData = {
  id: string;
  label: string;
  title: string;
  description: string;
  keyPoints: {
    title: string;
    items: string[];
  }[];
  insight: string;
  insightLead?: string;
  visual: {
    slot: string;
    title: string;
    type: string;
    items: string[];
  };
  tone?: "default" | "alt" | "dark" | "insight";
};

export const projectSlides: ProjectSlideData[] = [
  {
    id: "problem",
    label: "PAGE 04 · 문제 정의",
    title: "대화형 Avatar 경험 정의",
    description:
      "아바타 생성과 실시간 대화를 하나의 서비스 흐름으로 연결하기 위한 문제 정의",
    keyPoints: [
      {
        title: "문제 상황",
        items: [
          "높은 제작 비용과 긴 구축 기간으로 확장성 제약 존재",
          "AI 추론 지연으로 대화 몰입도 저하",
          "사람과 유사한 상호작용 경험 제공에 한계 존재",
        ],
      },
      {
        title: "사용자 요구",
        items: [
          "누구나 쉽게 생성 가능한 Avatar 경험",
          "자연스럽고 끊김 없는 대화 경험",
          "빠른 응답과 명확한 상태 피드백 제공",
        ],
      },
      {
        title: "핵심 질문",
        items: [
          "기술적 한계를 UX로 보완할 수 있는가",
          "비용과 품질의 균형점을 확보할 수 있는가",
        ],
      },
      {
        title: "주요 고려사항",
        items: ["체감 Latency 최소화", "서비스 확장성 확보", "운영 효율성 고려"],
      },
    ],
    insightLead:
      "사용자는 기능의 복잡함보다 대화가 자연스럽게 이어지는 경험을 더 중요하게 평가함.",
    insight:
      "결국 문제는 기술의 한계가 아니라 기술적 제약을 인지하지 않도록 설계하는 서비스 구조에 있었음.",
    visual: {
      slot: "service-structure",
      title: "서비스 구조도",
      type: "IA · Service Structure · Workflow",
      items: ["IA", "서비스 구조", "Workflow"],
    },
    tone: "default",
  },
  {
    id: "user-analysis",
    label: "PAGE 05 · 사용자 경험 분석",
    title: "VOC 기반 경험 진단",
    description:
      "VOC와 인터뷰를 기반으로 사용자 경험을 저해하는 핵심 요인 도출",
    keyPoints: [
      {
        title: "분석 방법",
        items: [
          "VOC 유형별 클러스터링 수행",
          "고객 인터뷰 및 QA 로그 분석",
          "사용자 행동 패턴 비교 검토",
        ],
      },
      {
        title: "주요 발견",
        items: [
          "사용자는 답변 품질보다 응답 대기 경험에 더 민감하게 반응함",
          "대화 흐름이 끊기는 순간 서비스 신뢰도가 빠르게 하락함",
          "Waiting 구간의 피드백 부재가 주요 이탈 요인으로 확인됨",
        ],
      },
      {
        title: "우선 과제",
        items: [
          "체감 대기 시간 최소화",
          "대화 연결성 강화",
          "Waiting UX 개선 방향 수립",
        ],
      },
    ],
    insightLead:
      "문제는 답변의 정확도가 아니라 응답을 기다리는 과정에서 발생하는 불확실성이었음.",
    insight:
      "분석 결과, 대화 연결성 유지와 Waiting 경험 개선이 최우선 과제로 도출됨.",
    visual: {
      slot: "voc-cluster",
      title: "VOC 분석 결과",
      type: "VOC Clustering · Interview Notes",
      items: ["VOC 클러스터링", "인터뷰 정리", "QA 로그"],
    },
    tone: "alt",
  },
  {
    id: "hypothesis",
    label: "PAGE 06 · 가설 수립",
    title: "체감 지연 개선 가설 수립",
    description:
      "기술적 한계를 인정하고 서비스 관점에서 검증 가능한 해결 방안 정의",
    keyPoints: [
      {
        title: "관찰 내용",
        items: ["응답 대기 시간 증가", "립싱크 지연 발생", "Waiting 구간 이탈 증가"],
      },
      {
        title: "가설 정의",
        items: [
          "대기 인터랙션 제공 시 이탈 감소 가능",
          "Streaming 구조 적용 시 체감 지연 감소 가능",
          "응답 진행 상태 노출 시 만족도 향상 가능",
        ],
      },
      {
        title: "검증 계획",
        items: ["구조별 비교 테스트", "고부하 환경 테스트", "UX 패턴별 실험 설계"],
      },
    ],
    insightLead:
      "기술적 문제를 단순 추측으로 해석하지 않고 사용자 경험 관점의 가설로 전환함.",
    insight:
      "원인 규명보다 중요한 것은 실제 사용자 경험에 영향을 주는 요소를 데이터로 검증하는 과정이었음.",
    visual: {
      slot: "hypothesis-sheet",
      title: "가설 정의 문서",
      type: "Hypothesis Sheet · Test Plan",
      items: ["가설 시트", "테스트 계획서", "비교 조건"],
    },
    tone: "default",
  },
  {
    id: "service-design",
    label: "PAGE 07 · 서비스 구조 설계",
    title: "End-to-End 서비스 구조 설계",
    description:
      "생성, 대화, 운영 전 과정을 연결하는 서비스 아키텍처 설계",
    keyPoints: [
      {
        title: "설계 대상",
        items: ["Avatar 생성 경험", "실시간 대화 경험", "운영 및 관리 경험"],
      },
      {
        title: "설계 원칙",
        items: [
          "일관된 사용자 경험 제공",
          "확장 가능한 구조 설계",
          "운영 효율성 고려",
        ],
      },
      {
        title: "기대 효과",
        items: [
          "서비스 구조 표준화",
          "기능 확장 대응",
          "운영 비용 절감 기반 확보",
        ],
      },
    ],
    insightLead:
      "개별 기능의 완성도보다 생성·대화·운영이 하나의 흐름으로 연결되는 구조가 서비스 경험을 결정함.",
    insight:
      "특히 운영 단계까지 고려한 설계가 서비스의 확장성과 지속 가능성을 좌우함.",
    visual: {
      slot: "workflow-diagram",
      title: "Workflow Diagram",
      type: "User Flow · Workflow",
      items: ["아바타 생성", "검수", "배포", "대화", "운영"],
    },
    tone: "alt",
  },
  {
    id: "evaluation-operation",
    label: "PAGE 08 · 서비스 평가 및 운영 체계",
    title: "서비스 평가 및 운영 체계 구축",
    description:
      "서비스 경험을 객관적으로 평가하고 지속적으로 개선할 수 있는 기준 정의",
    keyPoints: [
      { title: "평가 기준", items: ["응답 속도", "대화 연결성", "자연스러움"] },
      {
        title: "운영 체계",
        items: ["QA 프로세스 수립", "운영 정책 정의", "품질 관리 프로세스 구축"],
      },
      {
        title: "기대 효과",
        items: [
          "공통 품질 기준 확보",
          "운영 프로세스 표준화",
          "조직 간 협업 효율 향상",
        ],
      },
    ],
    insightLead: "AI 서비스 품질은 모델 성능만으로 관리할 수 없음.",
    insight:
      "지속적인 개선을 위해서는 공통 평가 기준과 운영 체계 표준화가 반드시 필요했음.",
    visual: {
      slot: "service-framework",
      title: "Service Framework",
      type: "Framework · QA Process · Policy",
      items: ["평가 Framework", "QA 프로세스", "운영 정책 문서"],
    },
    tone: "default",
  },
  {
    id: "result",
    label: "PAGE 09 · 서비스 구축 성과",
    title: "서비스 운영 기반 구축",
    description:
      "PoC부터 상용화까지 서비스가 지속적으로 운영될 수 있는 기반 구축",
    keyPoints: [
      {
        title: "사업 성과",
        items: ["주요 고객사 PoC 수행", "상용 계약 체결 지원", "신규 레퍼런스 확보"],
      },
      {
        title: "서비스 성과",
        items: [
          "운영 안정성 확보",
          "품질 관리 체계 정립",
          "대화 경험 개선 기반 마련",
        ],
      },
      {
        title: "조직 성과",
        items: [
          "평가 기준 표준화",
          "운영 프로세스 구축",
          "개발·연구소 협업 체계 정립",
        ],
      },
    ],
    insightLead:
      "서비스 성과는 기능 추가보다 운영 가능한 구조를 얼마나 빠르게 구축하느냐에 달려 있었음.",
    insight:
      "PoC에서 상용화로 이어지기 위해서는 기술보다 운영 체계와 품질 관리 구조가 중요했음.",
    visual: {
      slot: "project-summary",
      title: "프로젝트 Summary",
      type: "Structure · Workflow · Framework",
      items: ["전체 서비스 구조도", "End-to-End Workflow", "운영 Framework"],
    },
    tone: "alt",
  },
  {
    id: "reflection",
    label: "PAGE 10 · 프로젝트 회고",
    title: "서비스 관점의 AI 기획",
    description:
      "기술을 사용자 가치로 연결하는 과정에서 기획자의 역할과 책임 정리",
    keyPoints: [
      {
        title: "배운 점",
        items: [
          "사용자 경험은 기술보다 서비스 흐름에서 완성됨",
          "문제 정의가 솔루션의 방향을 결정함",
        ],
      },
      {
        title: "어려웠던 점",
        items: ["AI 품질을 객관적으로 측정하기 어려움", "조직 간 관점 차이 존재"],
      },
      {
        title: "주요 성찰",
        items: [
          "사용자 중심 접근 중요성 확인",
          "운영 가능한 구조 설계 필요성 확인",
        ],
      },
    ],
    insightLead:
      "AI 기술은 빠르게 평준화되지만 사용자 경험과 운영 구조는 쉽게 복제되지 않음.",
    insight:
      "결국 AI 서비스의 경쟁력은 사용자 경험을 설계하는 방식에서 결정됨.",
    visual: {
      slot: "lessons-learned",
      title: "프로젝트 회고",
      type: "Lessons Learned · Summary",
      items: ["프로젝트 요약", "Lessons Learned", "서비스 운영 구조"],
    },
    tone: "default",
  },
];
