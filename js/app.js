(function () {
  const { levels, modules, utils, storage, speech, streak } = window.JIMI;
  const ui = window.JIMI.ui;
  const esc = utils.escapeHtml;

  // 首页推荐的优先顺序：先学新词和字母，再练句子、听写，之后是故事/阅读、语法、写作、专题。
  const RECOMMEND_ORDER = ['words', 'phonics', 'roots', 'sentences', 'listening', 'review', 'stories', 'reading', 'grammar', 'speaking', 'writing', 'topics', 'exam'];
  const root = document.querySelector('#app');
  const loaded = storage.load();
  const state = { progress: loaded.progress, levelId: loaded.progress.level, page: 'home', ui: {} };

  /* ---------- 数据访问 ---------- */

  const currentLevel = () => levels[state.levelId];
  const contentOf = (level, id) => (
    modules[id] && modules[id].contentFrom ? modules[id].contentFrom(level) : (level.content && level.content[id]) || []
  );
  // standalone 模块（如错题本）不依赖录入内容，始终可用。
  const isAvailable = (level, id) => Boolean(modules[id].standalone) || contentOf(level, id).length > 0;

  function levelProgress(id = state.levelId) {
    if (!state.progress.levels[id]) state.progress.levels[id] = storage.emptyLevelProgress();
    return state.progress.levels[id];
  }

  function getUI(id) {
    if (!state.ui[id]) state.ui[id] = modules[id].initUI ? modules[id].initUI() : {};
    return state.ui[id];
  }

  function labelsFor(level, id) {
    return { ...modules[id].defaults, unit: modules[id].unit, ...((level.labels || {})[id] || {}) };
  }

  function persist() {
    if (!storage.save(state.progress)) ui.toast('暂时无法保存进度，请检查浏览器设置');
  }

  function awardStar(amount = 1) {
    state.progress.stars += amount;
    persist();
    document.querySelectorAll('[data-star-count]').forEach((element) => {
      element.textContent = state.progress.stars;
    });
  }

  // 记录一次有效学习，用于连续天数和每日目标。
  function bump() {
    const reached = streak.bump(state.progress);
    persist();
    const now = streak.current(state.progress);
    document.querySelectorAll('[data-streak-days]').forEach((element) => { element.textContent = now.days; });
    document.querySelectorAll('[data-goal-count]').forEach((element) => {
      element.textContent = Math.min(now.today, now.goal);
    });
    document.querySelectorAll('[data-goal-bar]').forEach((element) => {
      element.style.width = `${Math.min(100, Math.round((now.today / now.goal) * 100))}%`;
    });
    if (reached) ui.toast('🔥 今日目标达成！明天继续保持～');
  }

  function makeCtx(id) {
    const level = currentLevel();
    const progress = levelProgress();
    return {
      level,
      moduleId: id,
      labels: labelsFor(level, id),
      content: contentOf(level, id),
      ui: getUI(id),
      progress,
      isDone: (itemId, moduleId = id) => (progress.done[moduleId] || []).includes(itemId),
      markDone(itemId, moduleId = id) {
        if (!progress.done[moduleId]) progress.done[moduleId] = [];
        if (progress.done[moduleId].includes(itemId)) return false;
        progress.done[moduleId].push(itemId);
        persist();
        return true;
      },
      doneCount(moduleId = id) {
        const ids = progress.done[moduleId] || [];
        return contentOf(level, moduleId).filter((item) => ids.includes(item.id)).length;
      },
      awardStar,
      bump,
      recordMistake(moduleId, itemId, index) {
        progress.mistakes[`${moduleId}:${itemId}:${index}`] = { module: moduleId, itemId, index };
        persist();
      },
      clearMistake(moduleId, itemId, index) {
        if (delete progress.mistakes[`${moduleId}:${itemId}:${index}`]) persist();
      },
      contentOf: (moduleId) => contentOf(level, moduleId),
      persist,
      render,
      navigate,
      speak: (text, button, options) => speech.speak(text, button, { ...level.speech, ...options }),
      toast: ui.toast,
      celebrate: (message) => ui.celebrate(message, level.mascot)
    };
  }

  function levelStats(level, progress) {
    let total = 0;
    let done = 0;
    level.modules.forEach((id) => {
      if (modules[id].standalone) return;
      const items = contentOf(level, id);
      const ids = id === 'words' ? progress.wordsLearned : (progress.done[id] || []);
      total += items.length;
      done += items.filter((item) => ids.includes(id === 'words' ? item.word : item.id)).length;
    });
    return { total, done, percent: total ? Math.round((done / total) * 100) : 0 };
  }

  /* ---------- 导航 ---------- */

  function moduleOfPage(page) {
    const level = state.levelId && currentLevel();
    return level && level.modules.includes(page) ? modules[page] : null;
  }

  function setPage(page) {
    const previous = moduleOfPage(state.page);
    if (previous && previous.onLeave) previous.onLeave(makeCtx(state.page));
    speech.cancel();
    state.page = page;
    render();
    window.scrollTo(0, 0);
  }

  function navigate(page) {
    const module = moduleOfPage(page);
    const lock = module && module.locked && module.locked(makeCtx(page));
    if (lock) {
      setPage(lock.redirect || 'home');
      ui.toast(lock.message);
      return;
    }
    setPage(page);
  }

  function chooseLevel(id) {
    if (!levels[id]) return;
    const previous = moduleOfPage(state.page);
    if (previous && previous.onLeave) previous.onLeave(makeCtx(state.page));
    speech.cancel();
    state.levelId = id;
    state.progress.level = id;
    levelProgress();
    state.ui = {};
    state.page = 'home';
    persist();
    render();
    window.scrollTo(0, 0);
  }

  function getRecommendation() {
    const level = currentLevel();
    for (const id of RECOMMEND_ORDER) {
      if (!level.modules.includes(id) || !isAvailable(level, id)) continue;
      const ctx = makeCtx(id);
      if (modules[id].locked && modules[id].locked(ctx)) continue;
      const recommendation = modules[id].recommend && modules[id].recommend(ctx);
      if (recommendation) return { module: id, ...recommendation };
    }
    return {
      module: level.modules.find((id) => isAvailable(level, id)) || 'home',
      focus: '自由复习',
      title: '基础内容都完成啦！',
      description: '太棒了！可以自由选择模块继续练习。',
      buttonLabel: '再学一次',
      ui: { index: 0 }
    };
  }

  /* ---------- 页面片段 ---------- */

  function navItem(id, icon, label, extra = '') {
    return `<button class="nav-item ${state.page === id ? 'is-active' : ''}" data-action="navigate" data-page="${id}">
    <span class="nav-icon">${icon}</span><span>${esc(label)}</span>${extra}
  </button>`;
  }

  function moduleNavItems(level) {
    return level.modules.map((id) => {
      const labels = labelsFor(level, id);
      const lock = modules[id].locked && modules[id].locked(makeCtx(id));
      return navItem(id, lock ? '🔒' : labels.icon, lock ? lock.navLabel : labels.nav);
    }).join('');
  }

  function header() {
    const level = state.levelId && currentLevel();
    const now = streak.current(state.progress);
    return `<header class="topbar">
    <button class="brand" data-action="navigate" data-page="home" aria-label="回到首页">
      <span class="brand-mark"><span>✦</span></span>
      <span class="brand-copy"><strong>基米英语</strong><small>JIMI ENGLISH</small></span>
    </button>
    <div class="topbar-right">
      ${level ? `<button class="level-chip" data-action="open-levels" aria-label="切换学段"><span>${level.emoji}</span><strong>${esc(level.name)}</strong><span class="level-chip-swap">⇄</span></button>` : ''}
      ${level ? `<div class="streak-pill fire-pill" title="连续学习天数"><span>🔥</span><strong data-streak-days>${now.days}</strong><span>天</span></div>` : ''}
      <div class="streak-pill"><span>⭐</span><strong data-star-count>${state.progress.stars}</strong><span>颗星星</span></div>
      ${level ? `<div class="avatar" aria-label="${esc(level.name)}学习者">${level.avatar}</div>` : ''}
    </div>
  </header>`;
  }

  function sidebar(level) {
    const stats = levelStats(level, levelProgress());
    return `<aside class="sidebar">
    <div class="sidebar-label">我的学习</div>
    ${navItem('home', '⌂', '学习首页')}
    ${moduleNavItems(level)}
    ${(level.planned || []).map((item) => navItem(item.id, item.icon, item.title, '<em class="nav-soon">即将</em>')).join('')}
    <div class="grade-card">
      <div class="grade-card-top"><span>当前学段</span><span>${level.emoji}</span></div>
      <strong>${esc(level.name)} · ${esc(level.stage)}</strong>
      <div class="grade-progress"><span style="width:${stats.percent}%"></span></div>
      <small>已完成 ${stats.done} / ${stats.total} 项 · 更多内容陆续开放</small>
      <button class="grade-switch" data-action="open-levels">切换学段 ⇄</button>
    </div>
    <div class="sidebar-footer">每天一点点，进步看得见 ✨</div>
  </aside>`;
  }

  function mobileNav(level) {
    const items = level.modules.map((id) => {
      const labels = labelsFor(level, id);
      const lock = modules[id].locked && modules[id].locked(makeCtx(id));
      return navItem(id, lock ? '🔒' : labels.icon, lock ? lock.navLabel : labels.nav);
    });
    return `<nav class="mobile-nav" style="--nav-count:${items.length + 1}" aria-label="主导航">${navItem('home', '⌂', '首页')}${items.join('')}</nav>`;
  }

  function roadmapNote(level, id) {
    const items = (level.roadmap || {})[id];
    if (!items || !items.length) return '';
    return `<aside class="roadmap-note"><strong>🚧 接下来会补充</strong><ul>${items.map((item) => `<li>${esc(item)}</li>`).join('')}</ul></aside>`;
  }

  function placeholderPage(info, level, roadmapId) {
    const items = info.items || (level.roadmap || {})[roadmapId] || [];
    return `<main class="main-content lesson-page">
    <div class="lesson-heading"><button class="back-link" data-action="navigate" data-page="home">← 学习首页</button><span class="lesson-step">${esc(level.name)} · 内容建设中</span></div>
    <section class="coming-card">
      <div class="coming-icon">${info.icon}</div>
      <span class="section-kicker">COMING SOON</span>
      <h1>${esc(info.title)}</h1>
      <p>${esc(info.desc)}</p>
      ${items.length ? `<ul class="coming-list">${items.map((item) => `<li>${esc(item)}</li>`).join('')}</ul>` : ''}
      <button class="button button-coral" data-action="navigate" data-page="home">先去学点别的 <span>→</span></button>
    </section>
  </main>`;
  }

  function modulePage(id) {
    const level = currentLevel();
    const ctx = makeCtx(id);
    const result = modules[id].render(ctx);
    const labels = ctx.labels;
    return `<main class="main-content lesson-page ${result.pageClass || ''}">
    <div class="lesson-heading"><button class="back-link" data-action="navigate" data-page="home">← 学习首页</button><span class="lesson-step">${esc(result.step)}</span></div>
    <div class="lesson-title-row"><div><span class="section-kicker">${esc(labels.kicker)} · ${esc(level.name)}</span><h1>${esc(labels.title)} <span>${labels.emoji}</span></h1><p>${esc(labels.intro)}</p></div><div class="lesson-stars">⭐ <span data-star-count>${state.progress.stars}</span></div></div>
    ${result.progress != null ? `<div class="lesson-progress"><span style="width:${result.progress}%"></span></div>` : ''}
    ${result.body}
    ${roadmapNote(level, id)}
  </main>`;
  }

  function homePage() {
    const level = currentLevel();
    const progress = levelProgress();
    const home = level.home;
    const recommendation = getRecommendation();
    const stats = levelStats(level, progress);
    const daily = streak.current(state.progress);
    const wordsModule = modules.words;
    const words = contentOf(level, 'words');
    const wordsCtx = level.modules.includes('words') ? makeCtx('words') : null;
    const known = words.filter((item) => progress.wordsLearned.includes(item.word)).length;
    const dueCount = wordsCtx && wordsModule.dueWords ? wordsModule.dueWords(wordsCtx).length : 0;
    const cards = level.modules.map((id, index) => {
      const ctx = makeCtx(id);
      const labels = ctx.labels;
      const summary = isAvailable(level, id)
        ? modules[id].summary(ctx)
        : { progress: '内容建设中，敬请期待', soon: true };
      return `<button class="path-card path-${id} ${summary.locked ? 'path-locked' : ''}" data-action="navigate" data-page="${id}">
        <span class="path-number">${String(index + 1).padStart(2, '0')}</span><span class="path-illustration">${labels.icon}</span>
        <span class="path-title">${esc(labels.title)}</span><span class="path-description">${esc(labels.desc)}</span>
        <span class="path-progress">${esc(summary.progress)}</span><span class="path-arrow">${summary.locked ? '🔒' : '→'}</span>
      </button>`;
    });
    const plannedCards = (level.planned || []).map((item, index) => `<button class="path-card path-planned" data-action="navigate" data-page="${item.id}">
        <span class="path-number">${String(level.modules.length + index + 1).padStart(2, '0')}</span><span class="path-illustration">${item.icon}</span>
        <span class="path-title">${esc(item.title)}</span><span class="path-description">${esc(item.desc)}</span>
        <span class="path-progress">即将开放</span><span class="path-arrow">🔜</span>
      </button>`);
    return `<main class="main-content">
    <div class="welcome-row">
      <div>
        <div class="eyebrow"><span class="eyebrow-dot"></span>${esc(home.eyebrow)}</div>
        <h1>${esc(home.greeting)}<span class="wave">👋</span></h1>
        <p class="welcome-copy">${esc(home.copy)}</p>
      </div>
      <div class="today-date"><span>${home.dateIcon}</span><div><strong>${esc(home.dateTitle)}</strong><small>${esc(home.dateSub)}</small></div></div>
    </div>

    <section class="hero-card">
      <div class="hero-orbit orbit-one"></div><div class="hero-orbit orbit-two"></div>
      <div class="hero-content">
        <div class="hero-tag"><span>⭐</span> ${esc(level.name)} · ${esc(level.stage)} · 今日学习推荐</div>
        <h2>${esc(home.heroLead)}<br>从 <em>“${esc(recommendation.focus)}”</em> 开始</h2>
        <p>根据你的学习进度，挑选最适合现在的一小步。</p>
        <button class="button button-sun" data-action="start-recommended">${esc(recommendation.buttonLabel)} <span>→</span></button>
        <div class="hero-footnote"><span>⏱</span> ${esc(home.footnote)}</div>
      </div>
      <div class="hero-art" aria-hidden="true">
        <div class="cloud cloud-left"></div><div class="cloud cloud-right"></div>
        <div class="hero-sun"></div>
        <div class="hill hill-back"></div><div class="hill hill-front"></div>
        <div class="sprout-character kitten-character">${level.mascot}</div>
        <div class="float-star star-a">✦</div><div class="float-star star-b">✧</div><div class="float-star star-c">✦</div>
        <div class="speech-bubble">${esc(home.bubble)}<span>♥</span></div>
      </div>
    </section>

    <section class="stats-row" aria-label="学习进度">
      <div class="stat-card stat-goal"><span class="stat-icon stat-orange">🔥</span><div><strong><span data-goal-count>${Math.min(daily.today, daily.goal)}</span><small class="stat-total">/${daily.goal}</small></strong><small>今日目标</small><span class="goal-bar"><span data-goal-bar style="width:${Math.min(100, Math.round((daily.today / daily.goal) * 100))}%"></span></span></div><span class="stat-note">连续 ${daily.days} 天</span></div>
      <div class="stat-card"><span class="stat-icon stat-yellow">⭐</span><div><strong data-star-count>${state.progress.stars}</strong><small>收集星星</small></div><span class="stat-note">继续加油！</span></div>
      <div class="stat-card"><span class="stat-icon stat-pink">🔤</span><div><strong>${known}<small class="stat-total">/${words.length}</small></strong><small>认识单词</small></div><span class="stat-note">${dueCount ? `待复习 ${dueCount} 个` : '每天一点点'}</span></div>
      <div class="stat-card"><span class="stat-icon stat-blue">🏅</span><div><strong>${stats.done}<small class="stat-total">/${stats.total}</small></strong><small>完成学习项</small></div><span class="stat-note">${stats.percent}%</span></div>
    </section>

    <div class="section-heading"><div><span class="section-kicker">LEARNING PATH</span><h2>我的学习旅程</h2></div><span class="heading-sparkle">✧</span></div>
    <section class="path-grid">${cards.join('')}${plannedCards.join('')}</section>

    <section class="bottom-banner"><span class="banner-mascot">${level.mascot}</span><div><strong>${esc(recommendation.title)}</strong><small>${esc(recommendation.description)}</small></div><button data-action="start-recommended">${esc(recommendation.buttonLabel)} <span>→</span></button></section>
    <div class="grade-expansion"><span>🎒</span><span><strong>学习路线</strong>　${esc(home.route)}</span></div>
  </main>`;
  }

  function levelsPage(onboarding) {
    const cards = window.JIMI.levelOrder.map((id) => {
      const level = levels[id];
      const progress = state.progress.levels[id] || storage.emptyLevelProgress();
      const stats = levelStats(level, progress);
      const counts = level.modules
        .filter((moduleId) => !modules[moduleId].standalone && !modules[moduleId].contentFrom && contentOf(level, moduleId).length)
        .map((moduleId) => `${contentOf(level, moduleId).length} ${modules[moduleId].unit}`);
      const isCurrent = !onboarding && id === state.levelId;
      return `<button class="level-card level-${id} ${isCurrent ? 'is-current' : ''}" data-action="choose-level" data-level="${id}">
      <span class="level-card-emoji">${level.emoji}</span>
      <span class="level-card-age">${esc(level.ageRange)}</span>
      <strong>${esc(level.name)}英语</strong>
      <span class="level-card-tagline">${esc(level.tagline)}</span>
      <span class="level-card-counts">${esc(counts.join(' · '))}</span>
      <span class="grade-progress"><span style="width:${stats.percent}%"></span></span>
      <span class="level-card-action">${isCurrent ? '当前学段 ✓' : stats.done ? `继续学习 · ${stats.percent}%` : '开始学习 →'}</span>
    </button>`;
    });
    return `<main class="main-content levels-page">
    ${onboarding ? '' : '<div class="lesson-heading"><button class="back-link" data-action="navigate" data-page="home">← 学习首页</button></div>'}
    <div class="levels-intro">
      <span class="section-kicker">CHOOSE YOUR STAGE</span>
      <h1>${onboarding ? '欢迎来到基米英语 👋' : '切换学习阶段'}</h1>
      <p>选择适合你的学习阶段。每个阶段的内容和进度分别保存，随时可以切换。</p>
    </div>
    <section class="level-grid">${cards.join('')}</section>
    <div class="grade-expansion"><span>🚧</span><span><strong>内容持续补充中</strong>　各学段先提供入门样例，课程会按路线图逐步扩充。</span></div>
  </main>`;
  }

  /* ---------- 渲染 ---------- */

  function render() {
    if (!state.levelId) {
      root.dataset.level = 'primary';
      root.innerHTML = `${header()}<div class="app-layout is-solo">${levelsPage(true)}</div><div class="toast" role="status" aria-live="polite"></div>`;
      return;
    }
    const level = currentLevel();
    root.dataset.level = level.id;
    document.title = `基米英语 · ${level.name}英语`;
    let content;
    if (state.page === 'levels') {
      content = levelsPage(false);
    } else if (level.modules.includes(state.page)) {
      content = isAvailable(level, state.page)
        ? modulePage(state.page)
        : placeholderPage({ ...labelsFor(level, state.page) }, level, state.page);
    } else {
      const planned = (level.planned || []).find((item) => item.id === state.page);
      content = planned ? placeholderPage(planned, level, planned.id) : homePage();
    }
    root.innerHTML = `${header()}<div class="app-layout">${sidebar(level)}${content}</div>
    ${mobileNav(level)}
    <div class="toast" role="status" aria-live="polite"></div>`;
    const bar = root.querySelector('.mobile-nav');
    const active = bar && bar.querySelector('.is-active');
    if (active) bar.scrollLeft = active.offsetLeft - (bar.clientWidth - active.offsetWidth) / 2;
  }

  /* ---------- 事件 ---------- */

  const coreActions = {
    navigate: (target) => navigate(target.dataset.page),
    'open-levels': () => setPage('levels'),
    'choose-level': (target) => chooseLevel(target.dataset.level),
    'start-recommended'() {
      const recommendation = getRecommendation();
      if (recommendation.module === 'home') return;
      Object.assign(getUI(recommendation.module), recommendation.ui);
      setPage(recommendation.module);
    }
  };

  function dispatch(action, target) {
    const separator = action.indexOf(':');
    if (separator > 0) {
      const module = modules[action.slice(0, separator)];
      const handler = state.levelId && module && module.actions[action.slice(separator + 1)];
      if (handler) handler(target, makeCtx(module.id));
      return;
    }
    if (coreActions[action]) coreActions[action](target);
  }

  root.addEventListener('click', (event) => {
    const target = event.target.closest('[data-action]');
    if (!target) return;
    dispatch(target.dataset.action, target);
  });

  // 输入框的实时事件（如写作草稿）：data-input="模块:动作"。
  root.addEventListener('input', (event) => {
    const target = event.target.closest('[data-input]');
    if (target) dispatch(target.dataset.input, target);
  });

  // 输入框按回车等同于点击 data-submit 指向的按钮。
  root.addEventListener('keydown', (event) => {
    const target = event.target.closest('[data-submit]');
    if (!target || event.key !== 'Enter' || event.isComposing) return;
    event.preventDefault();
    dispatch(target.dataset.submit, target);
  });

  render();
  if (loaded.unavailable) ui.toast('浏览器暂时无法读取学习记录，本次进度可能不会保存');
}());
