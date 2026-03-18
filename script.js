document.addEventListener('DOMContentLoaded', () => {

  // ===== Scroll fade-in =====
  const fadeEls = document.querySelectorAll('.fade-in');
  const fadeObs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        fadeObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  fadeEls.forEach((el) => fadeObs.observe(el));

  // ===== Nav scroll effect =====
  const nav = document.getElementById('nav');
  const sections = document.querySelectorAll('section[id]');
  const navLinksAll = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    const sy = window.scrollY;
    nav.classList.toggle('scrolled', sy > 40);

    let current = '';
    sections.forEach((sec) => {
      if (sy >= sec.offsetTop - 120) {
        current = sec.getAttribute('id');
      }
    });

    navLinksAll.forEach((a) => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  }, { passive: true });

  // ===== Mobile nav toggle =====
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => navLinks.classList.remove('open'));
  });

  // ===== Agent Flow: staggered reveal =====
  const flowSteps = document.querySelectorAll('.flow-step');
  const flowRevealObs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        flowSteps.forEach((step, i) => {
          setTimeout(() => step.classList.add('visible'), i * 120);
        });
        flowRevealObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.05 });

  if (flowSteps.length) flowRevealObs.observe(flowSteps[0]);

  // ===== Agent Flow: connecting line animation =====
  const flowLine = document.getElementById('flowLine');
  const flowWrapper = document.querySelector('.flow-wrapper');

  if (flowLine && flowWrapper) {
    const lineObs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const totalH = flowWrapper.scrollHeight;
          flowLine.style.height = totalH + 'px';
          lineObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    lineObs.observe(flowWrapper);
  }

  // ===== Agent Flow: auto-cycle highlight =====
  let flowInterval = null;
  const flowSection = document.getElementById('agent-flow');

  const flowCycleObs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting && !flowInterval) {
        startCycle();
      } else if (!e.isIntersecting && flowInterval) {
        clearInterval(flowInterval);
        flowInterval = null;
        flowSteps.forEach((s) => s.classList.remove('flow-step-active'));
      }
    });
  }, { threshold: 0.2 });

  if (flowSection) flowCycleObs.observe(flowSection);

  function startCycle() {
    let idx = 0;
    const tick = () => {
      flowSteps.forEach((s) => s.classList.remove('flow-step-active'));
      if (flowSteps[idx]) flowSteps[idx].classList.add('flow-step-active');
      idx = (idx + 1) % flowSteps.length;
    };
    tick();
    flowInterval = setInterval(tick, 2400);
  }

  flowSteps.forEach((step) => {
    step.addEventListener('mouseenter', () => {
      if (flowInterval) { clearInterval(flowInterval); flowInterval = null; }
      flowSteps.forEach((s) => s.classList.remove('flow-step-active'));
      step.classList.add('flow-step-active');
    });

    step.addEventListener('mouseleave', () => {
      if (!flowInterval) startCycle();
    });
  });

  // ===== Chat Simulation =====
  const chatBody = document.getElementById('chatBody');
  const chatInput = document.getElementById('chatInput');
  const chatSend = document.getElementById('chatSend');
  const chatSuggestions = document.getElementById('chatSuggestions');

  const aiResponses = {
    '상품 추천해줘': '고객님의 사용 목적에 맞춰 추천드리면, 현재 가장 인기 있는 상품은 AI 프리미엄 플랜입니다. 맞춤형 대화 기능과 실시간 응답이 포함되어 있습니다.',
    '계좌 개설 방법 알려줘': '계좌 개설은 모바일 앱에서 간편하게 진행하실 수 있습니다. 본인 인증 후 약 3분이면 완료됩니다. 단계별 안내가 필요하시면 말씀해 주세요.',
    '오늘 환율 알려줘': '현재 USD/KRW 환율은 1,340원대입니다. 환율 우대 혜택을 받으시려면 AI 환전 서비스를 추천드립니다.'
  };

  const fallbacks = [
    '네, 말씀하신 내용을 확인하고 있습니다. 잠시만 기다려 주세요.',
    '관련 정보를 검색하여 최적의 답변을 준비하겠습니다.',
    '고객님의 요청을 분석 중입니다. 맥락에 맞는 응답을 생성하겠습니다.',
    '해당 내용에 대해 확인 후 안내드리겠습니다. 추가 질문이 있으신가요?'
  ];

  function addMsg(text, type) {
    const el = document.createElement('div');
    el.className = `chat-message chat-message-${type}`;
    el.innerHTML = `<p>${text}</p>`;
    chatBody.appendChild(el);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  function showTyping() {
    const el = document.createElement('div');
    el.className = 'chat-typing';
    el.innerHTML = '<span></span><span></span><span></span>';
    chatBody.appendChild(el);
    chatBody.scrollTop = chatBody.scrollHeight;
    return el;
  }

  function send(text) {
    if (!text.trim()) return;
    addMsg(text, 'user');
    chatInput.value = '';

    const dots = showTyping();
    const reply = aiResponses[text]
      || fallbacks[Math.floor(Math.random() * fallbacks.length)];

    setTimeout(() => {
      dots.remove();
      addMsg(reply, 'ai');
    }, 1000 + Math.random() * 800);
  }

  chatSend.addEventListener('click', () => send(chatInput.value));
  chatInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') send(chatInput.value);
  });

  chatSuggestions.querySelectorAll('.chat-suggestion-btn').forEach((btn) => {
    btn.addEventListener('click', () => send(btn.dataset.message));
  });

});
