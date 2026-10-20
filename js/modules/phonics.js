(function () {
  const { escapeHtml, hashString, pickChoices } = window.JIMI.utils;

  const current = (ctx) => ctx.content[ctx.ui.index % ctx.content.length];

  window.JIMI.registerModule({
    id: 'phonics',
    unit: '个字母',
    defaults: {
      icon: '🔡',
      title: '自然拼读',
      nav: '拼读',
      kicker: 'PHONICS',
      emoji: '🔤',
      desc: '从字母发音开始，看到单词就会读',
      intro: '先认识字母，再听它在单词里的声音，最后选出以它开头的单词。'
    },
    initUI: () => ({ index: 0, result: '' }),

    summary(ctx) {
      return { progress: `${ctx.doneCount()} / ${ctx.content.length} 个字母` };
    },

    recommend(ctx) {
      const index = ctx.content.findIndex((item) => !ctx.isDone(item.id));
      if (index === -1) return null;
      return {
        focus: `认识字母 ${ctx.content[index].letter}`,
        title: '今天认识一个新字母',
        description: `听听字母 ${ctx.content[index].letter} 的名字和它在单词里的声音。`,
        buttonLabel: '开始拼读',
        ui: { index, result: '' }
      };
    },

    render(ctx) {
      const item = current(ctx);
      const target = item.words[0];
      const pool = ctx.content.map((entry) => entry.words[0].word);
      const choices = pickChoices(target.word, pool, hashString(item.id));
      const emojiOf = (word) => (ctx.content.find((entry) => entry.words[0].word === word) || item).words[0].emoji;
      const done = ctx.isDone(item.id);
      return {
        pageClass: 'phonics-page',
        step: `第 ${ctx.ui.index + 1} / ${ctx.content.length} 个字母`,
        progress: ((ctx.ui.index + 1) / ctx.content.length) * 100,
        body: `<div class="letter-grid" aria-label="选择字母">${ctx.content.map((entry, index) => `<button class="letter-tile ${index === ctx.ui.index ? 'is-selected' : ''} ${ctx.isDone(entry.id) ? 'is-done' : ''}" data-action="phonics:select" data-index="${index}" aria-label="字母 ${escapeHtml(entry.letter)}">${escapeHtml(entry.letter)}</button>`).join('')}</div>
    <section class="phonics-card">
      <div class="phonics-letter">
        <div class="phonics-big">${escapeHtml(item.letter)}</div>
        <div class="phonics-sound">${escapeHtml(item.sound)}</div>
        <button class="sound-button" data-action="phonics:speak" data-text="${escapeHtml(item.name)}" aria-label="听字母 ${escapeHtml(item.name)}"><span class="sound-icon">🔊</span><span>字母名</span></button>
        ${done ? '<div class="known-stamp">✓ 已经认识啦</div>' : ''}
      </div>
      <div class="phonics-detail">
        <div class="phonics-words">${item.words.map((word) => `<button class="phonics-word" data-action="phonics:speak" data-text="${escapeHtml(word.word)}"><span>${word.emoji}</span><strong>${escapeHtml(word.word)}</strong><small>${escapeHtml(word.meaning)} 🔊</small></button>`).join('')}</div>
        <div class="word-tip"><span>💡</span><p>${escapeHtml(item.tip)}</p></div>
        <div class="meaning-quiz">
          <div class="quiz-title"><span>🎯</span><strong>小小挑战</strong></div>
          <p>哪个单词是以 “${escapeHtml(item.letter)}” 开头的？（字母声音 ${escapeHtml(item.sound)}）</p>
          <div class="choice-list">${choices.map((choice) => `<button class="choice-button" data-action="phonics:answer" data-answer="${escapeHtml(choice)}">${emojiOf(choice)} ${escapeHtml(choice)}<span>›</span></button>`).join('')}</div>
          <div class="quiz-feedback" aria-live="polite"></div>
        </div>
      </div>
    </section>
    <div class="lesson-controls">
      <button class="button button-quiet" data-action="phonics:previous" ${ctx.ui.index === 0 ? 'disabled' : ''}>← 上一个</button>
      <button class="button button-quiet" data-action="phonics:next">${ctx.ui.index === ctx.content.length - 1 ? '回到 A' : '下一个字母'} →</button>
    </div>`
      };
    },

    actions: {
      select(target, ctx) {
        ctx.ui.index = Number(target.dataset.index);
        ctx.render();
      },
      speak: (target, ctx) => ctx.speak(target.dataset.text, target, { rate: 0.7 }),
      answer(target, ctx) {
        const item = current(ctx);
        const feedback = document.querySelector('.meaning-quiz .quiz-feedback');
        if (target.dataset.answer === item.words[0].word) {
          feedback.textContent = `答对啦！${item.letter} 的声音是 ${item.sound} 🌟`;
          feedback.className = 'quiz-feedback is-correct';
          ctx.celebrate();
          ctx.bump();
          if (ctx.markDone(item.id)) {
            ctx.awardStar();
            document.querySelector(`.letter-tile[data-index="${ctx.ui.index}"]`).classList.add('is-done');
          }
        } else {
          feedback.textContent = '再听一听单词的开头，想想是哪个声音～';
          feedback.className = 'quiz-feedback is-try-again';
        }
      },
      previous(target, ctx) {
        ctx.ui.index = Math.max(0, ctx.ui.index - 1);
        ctx.render();
      },
      next(target, ctx) {
        ctx.ui.index = (ctx.ui.index + 1) % ctx.content.length;
        ctx.render();
      }
    }
  });
}());
