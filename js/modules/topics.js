(function () {
  const { escapeHtml, hashString, pickChoices } = window.JIMI.utils;

  function current(ctx) {
    return ctx.content[ctx.ui.index % ctx.content.length];
  }

  function quizWordOf(topic) {
    return topic.words.find((item) => item.word === topic.quizWord) || topic.words[0];
  }

  window.JIMI.registerModule({
    id: 'topics',
    unit: '个专题',
    defaults: {
      icon: '📚',
      title: '专题小课堂',
      nav: '专题',
      kicker: 'TOPIC LESSONS',
      emoji: '📚',
      desc: '按主题成组学习词汇',
      intro: '选一个喜欢的主题，认识新单词，听一听，再来做小测验。'
    },
    initUI: () => ({ index: 0 }),

    summary(ctx) {
      return { progress: `${ctx.content.length} 个主题专题` };
    },

    recommend(ctx) {
      const index = ctx.content.findIndex((topic) => !ctx.isDone(topic.id));
      if (index === -1) return null;
      return {
        focus: '学一个专题',
        title: '再完成一个主题小课',
        description: '用主题词汇和小测验巩固已经学过的内容。',
        buttonLabel: '进入专题',
        ui: { index }
      };
    },

    render(ctx) {
      const topic = current(ctx);
      const quizWord = quizWordOf(topic);
      const choices = pickChoices(quizWord.meaning, topic.words.map((item) => item.meaning), hashString(topic.id));
      const complete = ctx.isDone(topic.id);
      return {
        pageClass: 'courses-page',
        step: `${ctx.labels.title} · ${ctx.content.length} ${ctx.labels.unit}`,
        body: `<div class="course-grid" aria-label="选择专题">
      ${ctx.content.map((item, index) => `<button class="course-tile ${item.color || 'yellow'} ${index === ctx.ui.index ? 'is-selected' : ''}" data-action="topics:select" data-index="${index}">
        <span class="course-tile-emoji">${item.emoji}</span><strong>${escapeHtml(item.title)}</strong><small>${escapeHtml(item.subtitle)}</small><span class="course-tile-done">${ctx.isDone(item.id) ? '✓ 已完成' : '开始学习 →'}</span>
      </button>`).join('')}
    </div>
    <section class="course-lesson">
      <div class="course-lesson-heading"><span class="course-hero-emoji">${topic.emoji}</span><div><span class="section-kicker">TOPIC ${String(ctx.ui.index + 1).padStart(2, '0')}</span><h2>${escapeHtml(topic.title)}</h2><p>${escapeHtml(topic.subtitle)} · ${topic.words.length} 个单词</p></div></div>
      <div class="course-vocabulary">
        ${topic.words.map((item) => `<article class="course-word-card"><span>${item.emoji || '📖'}</span><strong>${escapeHtml(item.word)}</strong><small>${escapeHtml(item.meaning)}</small><button data-action="topics:speak" data-text="${escapeHtml(item.word)}" aria-label="听 ${escapeHtml(item.word)} 的发音">🔊 听发音</button></article>`).join('')}
      </div>
      <div class="course-sentence"><span>${ctx.level.mascot}</span><div><small>${escapeHtml(ctx.level.sentenceLead)}</small><strong>${escapeHtml(topic.sentence)}</strong><span>${escapeHtml(topic.translation)}</span></div><button data-action="topics:speak" data-text="${escapeHtml(topic.sentence)}" aria-label="听句子发音">🔊</button></div>
      <div class="course-quiz">
        <div><span class="quiz-title"><span>🎯</span><strong>小小测验</strong></span><p>“${escapeHtml(quizWord.word)}”是什么意思？</p></div>
        <div class="course-choices">${choices.map((choice) => `<button class="choice-button" data-action="topics:answer" data-answer="${escapeHtml(choice)}">${escapeHtml(choice)}<span>›</span></button>`).join('')}</div>
        <div class="quiz-feedback" aria-live="polite"></div>
      </div>
      <button class="button button-coral course-complete-button" data-action="topics:complete" ${complete ? 'disabled' : ''}>${complete ? '本课已完成，真棒！ ✓' : '我学会了，完成本课'} <span>⭐</span></button>
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
        const feedback = document.querySelector('.course-quiz .quiz-feedback');
        if (target.dataset.answer === quizWordOf(current(ctx)).meaning) {
          feedback.textContent = '答对啦！你真聪明！🌟';
          feedback.className = 'quiz-feedback is-correct';
          ctx.celebrate();
          ctx.bump();
        } else {
          feedback.textContent = '再想一想，听听单词的发音吧～';
          feedback.className = 'quiz-feedback is-try-again';
        }
      },
      complete(target, ctx) {
        if (!ctx.markDone(current(ctx).id)) return;
        ctx.awardStar();
        ctx.bump();
        ctx.render();
        ctx.celebrate('专题完成啦！太棒了！');
      }
    }
  });
}());
