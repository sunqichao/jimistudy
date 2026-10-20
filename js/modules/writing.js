(function () {
  const { escapeHtml } = window.JIMI.utils;

  const LINKERS = [
    'first', 'second', 'finally', 'however', 'therefore', 'moreover', 'besides',
    'in addition', 'for example', 'for instance', 'as a result', 'because', 'but', 'so', 'also'
  ];
  const REQUIRED_PHRASES = 2;
  let saveTimer = null;

  const current = (ctx) => ctx.content[ctx.ui.index % ctx.content.length];

  function countWords(text) {
    const matches = text.match(/[A-Za-z]+(?:['’-][A-Za-z]+)*/g);
    return matches ? matches.length : 0;
  }

  // 自动检查只看形式（字数、句型、连接词、格式），不评价内容好坏。
  function analyze(text, task) {
    const lower = text.toLowerCase();
    const words = countWords(text);
    const usedPhrases = task.phrases.filter((phrase) => lower.includes(phrase.en.toLowerCase()));
    const needPhrases = Math.min(REQUIRED_PHRASES, task.phrases.length);
    const linkerHit = LINKERS.some((linker) => new RegExp(`\\b${linker}\\b`).test(lower));
    const sentences = (text.match(/[.!?](\s|$)/g) || []).length;
    const checks = [
      { ok: words >= task.minWords, label: `字数不少于 ${task.minWords} 词（现在 ${words} 词）` },
      { ok: usedPhrases.length >= needPhrases, label: `用到至少 ${needPhrases} 个推荐句型（已用 ${usedPhrases.length} 个）` },
      { ok: linkerHit, label: '用了连接词（如 first、however、because）' },
      { ok: /^[A-Z]/.test(text.trim()) && sentences >= 2, label: '首字母大写，且至少写了 2 个完整句子' }
    ];
    return { words, usedPhrases, checks, passed: checks.every((check) => check.ok) };
  }

  function checklistHtml(result) {
    return result.checks.map((check) => `<li class="${check.ok ? 'is-ok' : ''}"><span>${check.ok ? '✓' : '○'}</span>${escapeHtml(check.label)}</li>`).join('');
  }

  function refresh(ctx) {
    const area = document.querySelector('#writing-input');
    if (!area) return;
    const result = analyze(area.value, current(ctx));
    document.querySelector('#writing-checks').innerHTML = checklistHtml(result);
    document.querySelector('#writing-count').textContent = `${result.words} / ${current(ctx).minWords}+ 词`;
    document.querySelectorAll('.phrase-chip').forEach((chip) => {
      chip.classList.toggle('is-used', result.usedPhrases.some((phrase) => phrase.en === chip.dataset.text));
    });
  }

  function saveDraft(ctx, text) {
    const id = current(ctx).id;
    ctx.progress.drafts[id] = text.slice(0, 5000);
    if (!text) delete ctx.progress.drafts[id];
    window.clearTimeout(saveTimer);
    saveTimer = window.setTimeout(() => ctx.persist(), 400);
  }

  window.JIMI.registerModule({
    id: 'writing',
    unit: '个写作任务',
    analyze,
    defaults: {
      icon: '✍️',
      title: '写作练习',
      nav: '写作',
      kicker: 'WRITING',
      emoji: '✍️',
      desc: '看题目、用句型、写短文并自动检查',
      intro: '照着题目写一篇短文，点句型卡片可以直接插入。草稿会自动保存。'
    },
    initUI: () => ({ index: 0, showSample: false }),

    summary(ctx) {
      return { progress: `${ctx.doneCount()} / ${ctx.content.length} 篇已完成` };
    },

    recommend(ctx) {
      const index = ctx.content.findIndex((task) => !ctx.isDone(task.id));
      if (index === -1) return null;
      return {
        focus: '写一篇短文',
        title: '动笔写一写',
        description: `题目《${ctx.content[index].title}》，用上推荐句型会更地道。`,
        buttonLabel: '开始写作',
        ui: { index, showSample: false }
      };
    },

    render(ctx) {
      const task = current(ctx);
      const draft = ctx.progress.drafts[task.id] || '';
      const result = analyze(draft, task);
      const done = ctx.isDone(task.id);
      return {
        pageClass: 'writing-page',
        step: `${ctx.labels.title} · ${ctx.content.length} ${ctx.labels.unit}`,
        body: `<div class="course-grid" aria-label="选择写作题目">
      ${ctx.content.map((entry, index) => `<button class="course-tile ${entry.color || 'yellow'} ${index === ctx.ui.index ? 'is-selected' : ''}" data-action="writing:select" data-index="${index}">
        <span class="course-tile-emoji">${entry.emoji}</span><strong>${escapeHtml(entry.title)}</strong><small>${escapeHtml(entry.subtitle)}</small><span class="course-tile-done">${ctx.isDone(entry.id) ? '✓ 已完成' : '开始写作 →'}</span>
      </button>`).join('')}
    </div>
    <div class="writing-layout">
      <section class="writing-main">
        <div class="writing-prompt">
          <span class="section-kicker">${escapeHtml(task.type)}</span>
          <h2>${escapeHtml(task.title)}</h2>
          <p class="writing-prompt-en">${escapeHtml(task.prompt)}</p>
          <p class="writing-prompt-zh">${escapeHtml(task.promptZh)}</p>
        </div>
        <div class="writing-editor">
          <div class="writing-editor-bar"><strong>我的作文</strong><span id="writing-count">${result.words} / ${task.minWords}+ 词</span></div>
          <textarea id="writing-input" class="writing-input" data-input="writing:input" rows="10" spellcheck="false" placeholder="在这里写英文……">${escapeHtml(draft)}</textarea>
          <div class="writing-actions">
            <button class="button button-quiet" data-action="writing:clear">清空</button>
            <button class="button button-quiet" data-action="writing:toggle-sample">${ctx.ui.showSample ? '隐藏范文' : '看参考范文'}</button>
            <button class="button button-coral" data-action="writing:submit">${done ? '再检查一次' : '完成并检查'} <span>✓</span></button>
          </div>
        </div>
        ${ctx.ui.showSample ? `<div class="writing-sample"><strong>参考范文</strong><p>${escapeHtml(task.sample)}</p><button class="chip-button" data-action="writing:speak-sample">🔊 朗读范文</button></div>` : ''}
        ${done ? '<div class="completed-ribbon">🌟 这篇作文已经通过检查啦！</div>' : ''}
      </section>
      <aside class="writing-side">
        <div class="writing-card">
          <div class="quiz-title"><span>✅</span><strong>自动检查</strong></div>
          <ul id="writing-checks" class="check-list">${checklistHtml(result)}</ul>
          <small class="check-note">只检查字数、句型、连接词和格式，内容好不好还要靠你自己读一读。</small>
        </div>
        <div class="writing-card">
          <div class="quiz-title"><span>🧩</span><strong>推荐句型</strong></div>
          <div class="phrase-list">${task.phrases.map((phrase) => `<button class="phrase-chip ${result.usedPhrases.includes(phrase) ? 'is-used' : ''}" data-action="writing:insert" data-text="${escapeHtml(phrase.en)}"><strong>${escapeHtml(phrase.en)}</strong><small>${escapeHtml(phrase.zh)}</small></button>`).join('')}</div>
        </div>
        ${task.tips && task.tips.length ? `<div class="writing-card"><div class="quiz-title"><span>💡</span><strong>写作小贴士</strong></div><ul class="tip-list">${task.tips.map((tip) => `<li>${escapeHtml(tip)}</li>`).join('')}</ul></div>` : ''}
      </aside>
    </div>`
      };
    },

    actions: {
      select(target, ctx) {
        ctx.ui.index = Number(target.dataset.index);
        ctx.ui.showSample = false;
        ctx.render();
      },
      input(target, ctx) {
        saveDraft(ctx, target.value);
        refresh(ctx);
      },
      insert(target, ctx) {
        const area = document.querySelector('#writing-input');
        const text = target.dataset.text;
        const before = area.value;
        const separator = before && !/\s$/.test(before) ? ' ' : '';
        area.value = `${before}${separator}${text} `;
        area.focus();
        saveDraft(ctx, area.value);
        refresh(ctx);
      },
      clear(target, ctx) {
        const area = document.querySelector('#writing-input');
        area.value = '';
        saveDraft(ctx, '');
        refresh(ctx);
        area.focus();
      },
      'toggle-sample'(target, ctx) {
        ctx.ui.showSample = !ctx.ui.showSample;
        ctx.render();
      },
      'speak-sample': (target, ctx) => ctx.speak(current(ctx).sample, target),
      submit(target, ctx) {
        const task = current(ctx);
        const text = document.querySelector('#writing-input').value;
        saveDraft(ctx, text);
        const result = analyze(text, task);
        refresh(ctx);
        if (!result.passed) {
          ctx.toast('还有几项没通过，看看右边的检查清单吧');
          return;
        }
        ctx.persist();
        if (ctx.markDone(task.id)) {
          ctx.awardStar();
          ctx.bump();
          ctx.render();
          ctx.celebrate('作文通过检查！');
        } else {
          ctx.toast('这篇已经完成过啦，继续保持！');
        }
      }
    }
  });
}());
