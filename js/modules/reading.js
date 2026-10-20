(function () {
  const { escapeHtml } = window.JIMI.utils;
  const { renderQuestions, allCorrect, correctCount } = window.JIMI.quiz;

  function current(ctx) {
    return ctx.content[ctx.ui.index % ctx.content.length];
  }

  function picked(ctx, item) {
    if (!ctx.ui.picked[item.id]) ctx.ui.picked[item.id] = {};
    return ctx.ui.picked[item.id];
  }

  window.JIMI.registerModule({
    id: 'reading',
    unit: '篇阅读',
    defaults: {
      icon: '📰',
      title: '阅读理解',
      nav: '阅读',
      kicker: 'READING',
      emoji: '📰',
      desc: '读短文、做小题、积累表达',
      intro: '先读英文，需要时再看中文，最后用小题检验自己读懂了没有。'
    },
    initUI: () => ({ index: 0, showZh: false, picked: {} }),

    summary(ctx) {
      return { progress: `${ctx.doneCount()} / ${ctx.content.length} 篇已读完` };
    },

    recommend(ctx) {
      const index = ctx.content.findIndex((item) => !ctx.isDone(item.id));
      if (index === -1) return null;
      return {
        focus: '读一篇短文',
        title: '读一篇短文，做几道小题',
        description: `《${ctx.content[index].title}》适合现在的你，读完记得检验理解。`,
        buttonLabel: '开始阅读',
        ui: { index }
      };
    },

    render(ctx) {
      const item = current(ctx);
      const answers = picked(ctx, item);
      const done = ctx.isDone(item.id);
      return {
        pageClass: 'reading-page',
        step: `${ctx.labels.title} · ${ctx.content.length} ${ctx.labels.unit}`,
        body: `<div class="course-grid" aria-label="选择短文">
      ${ctx.content.map((entry, index) => `<button class="course-tile ${entry.color || 'blue'} ${index === ctx.ui.index ? 'is-selected' : ''}" data-action="reading:select" data-index="${index}">
        <span class="course-tile-emoji">${entry.cover}</span><strong>${escapeHtml(entry.title)}</strong><small>${escapeHtml(entry.subtitle)}</small><span class="course-tile-done">${ctx.isDone(entry.id) ? '✓ 已读完' : '开始阅读 →'}</span>
      </button>`).join('')}
    </div>
    <div class="reading-layout">
      <article class="reading-passage">
        <div class="reading-passage-head">
          <div><span class="section-kicker">${escapeHtml(item.level)}</span><h2>${escapeHtml(item.title)}</h2></div>
          <div class="reading-tools">
            <button class="chip-button ${ctx.ui.showZh ? 'is-on' : ''}" data-action="reading:toggle-zh">${ctx.ui.showZh ? '隐藏中文' : '显示中文'}</button>
            <button class="chip-button" data-action="reading:speak-all">🔊 朗读全文</button>
          </div>
        </div>
        <div class="reading-lines">${item.passage.map((line, index) => `<p class="reading-line"><button class="line-sound" data-action="reading:speak-line" data-index="${index}" aria-label="朗读第 ${index + 1} 句">🔊</button><span><span class="reading-en">${escapeHtml(line.en)}</span>${ctx.ui.showZh ? `<span class="reading-zh">${escapeHtml(line.zh)}</span>` : ''}</span></p>`).join('')}</div>
        ${item.keywords && item.keywords.length ? `<div class="reading-keywords"><strong>重点词汇</strong>${item.keywords.map((word) => `<span><b>${escapeHtml(word.word)}</b> ${escapeHtml(word.meaning)}</span>`).join('')}</div>` : ''}
      </article>
      <aside class="reading-quiz">
        <div class="quiz-title"><span>🎯</span><strong>阅读小测</strong><small>${correctCount(item.questions, answers)} / ${item.questions.length}</small></div>
        ${renderQuestions(item.questions, answers, 'reading:answer')}
        ${done ? '<div class="completed-ribbon">🌟 这篇短文已经读懂啦！</div>' : ''}
      </aside>
    </div>`
      };
    },

    actions: {
      select(target, ctx) {
        ctx.ui.index = Number(target.dataset.index);
        ctx.render();
      },
      'toggle-zh'(target, ctx) {
        ctx.ui.showZh = !ctx.ui.showZh;
        ctx.render();
      },
      'speak-line': (target, ctx) => ctx.speak(current(ctx).passage[Number(target.dataset.index)].en, target),
      'speak-all': (target, ctx) => ctx.speak(current(ctx).passage.map((line) => line.en).join(' '), target),
      answer(target, ctx) {
        const item = current(ctx);
        const answers = picked(ctx, item);
        const qIndex = Number(target.dataset.q);
        answers[qIndex] = Number(target.dataset.option);
        if (answers[qIndex] === item.questions[qIndex].answer) {
          ctx.bump();
          ctx.clearMistake('reading', item.id, qIndex);
        } else {
          ctx.recordMistake('reading', item.id, qIndex);
        }
        const complete = allCorrect(item.questions, answers);
        const firstTime = complete && ctx.markDone(item.id);
        if (firstTime) ctx.awardStar();
        ctx.render();
        if (firstTime) ctx.celebrate('全部答对，读懂啦！');
      }
    }
  });
}());
