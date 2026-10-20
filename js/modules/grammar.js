(function () {
  const { escapeHtml } = window.JIMI.utils;
  const { renderQuestions, allCorrect, correctCount } = window.JIMI.quiz;

  function current(ctx) {
    return ctx.content[ctx.ui.index % ctx.content.length];
  }

  function picked(ctx, lesson) {
    if (!ctx.ui.picked[lesson.id]) ctx.ui.picked[lesson.id] = {};
    return ctx.ui.picked[lesson.id];
  }

  window.JIMI.registerModule({
    id: 'grammar',
    unit: '个语法点',
    defaults: {
      icon: '🧠',
      title: '语法小课堂',
      nav: '语法',
      kicker: 'GRAMMAR LAB',
      emoji: '🧠',
      desc: '先看规则和例句，再做几道小题',
      intro: '一次只学一个语法点：看规则、读例句、做练习。'
    },
    initUI: () => ({ index: 0, picked: {} }),

    summary(ctx) {
      return { progress: `${ctx.doneCount()} / ${ctx.content.length} 个语法点` };
    },

    recommend(ctx) {
      const index = ctx.content.findIndex((lesson) => !ctx.isDone(lesson.id));
      if (index === -1) return null;
      return {
        focus: `语法：${ctx.content[index].title}`,
        title: '学一个语法小知识',
        description: `今天看看「${ctx.content[index].title}」，再做几道小练习。`,
        buttonLabel: '开始学习',
        ui: { index }
      };
    },

    render(ctx) {
      const lesson = current(ctx);
      const answers = picked(ctx, lesson);
      const done = ctx.isDone(lesson.id);
      return {
        pageClass: 'grammar-page',
        step: `${ctx.labels.title} · ${ctx.content.length} ${ctx.labels.unit}`,
        body: `<div class="course-grid" aria-label="选择语法点">
      ${ctx.content.map((item, index) => `<button class="course-tile ${item.color || 'purple'} ${index === ctx.ui.index ? 'is-selected' : ''}" data-action="grammar:select" data-index="${index}">
        <span class="course-tile-emoji">${item.emoji}</span><strong>${escapeHtml(item.title)}</strong><small>${escapeHtml(item.subtitle)}</small><span class="course-tile-done">${ctx.isDone(item.id) ? '✓ 已掌握' : '开始学习 →'}</span>
      </button>`).join('')}
    </div>
    <section class="grammar-lesson">
      <div class="course-lesson-heading"><span class="course-hero-emoji">${lesson.emoji}</span><div><span class="section-kicker">GRAMMAR ${String(ctx.ui.index + 1).padStart(2, '0')}</span><h2>${escapeHtml(lesson.title)}</h2><p>${escapeHtml(lesson.summary)}</p></div></div>
      <div class="grammar-points">${lesson.points.map((point, pointIndex) => `<article class="grammar-point">
        <h3><span>${pointIndex + 1}</span>${escapeHtml(point.rule)}</h3>
        ${point.note ? `<p>${escapeHtml(point.note)}</p>` : ''}
        <ul>${point.examples.map((example) => `<li><button class="line-sound" data-action="grammar:speak" data-text="${escapeHtml(example.en)}" aria-label="朗读例句">🔊</button><span><span class="reading-en">${escapeHtml(example.en)}</span><span class="reading-zh">${escapeHtml(example.zh)}</span></span></li>`).join('')}</ul>
      </article>`).join('')}</div>
      <div class="grammar-exercises">
        <div class="quiz-title"><span>✍️</span><strong>小练习</strong><small>${correctCount(lesson.exercises, answers)} / ${lesson.exercises.length}</small></div>
        ${renderQuestions(lesson.exercises, answers, 'grammar:answer')}
        ${done ? '<div class="completed-ribbon">🌟 这个语法点已经掌握啦！</div>' : ''}
      </div>
    </section>`
      };
    },

    actions: {
      select(target, ctx) {
        ctx.ui.index = Number(target.dataset.index);
        ctx.render();
      },
      speak: (target, ctx) => ctx.speak(target.dataset.text, target),
      answer(target, ctx) {
        const lesson = current(ctx);
        const answers = picked(ctx, lesson);
        const qIndex = Number(target.dataset.q);
        answers[qIndex] = Number(target.dataset.option);
        if (answers[qIndex] === lesson.exercises[qIndex].answer) {
          ctx.bump();
          ctx.clearMistake('grammar', lesson.id, qIndex);
        } else {
          ctx.recordMistake('grammar', lesson.id, qIndex);
        }
        const complete = allCorrect(lesson.exercises, answers);
        const firstTime = complete && ctx.markDone(lesson.id);
        if (firstTime) ctx.awardStar();
        ctx.render();
        if (firstTime) ctx.celebrate('语法点掌握啦！');
      }
    }
  });
}());
