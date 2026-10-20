(function () {
  const { escapeHtml, hashString, pickChoices } = window.JIMI.utils;

  // 听写内容直接取自本学段的单词表，不需要单独录入。
  function contentFrom(level) {
    return ((level.content && level.content.words) || []).map((item) => ({
      id: item.word,
      word: item.word,
      meaning: item.meaning,
      ipa: item.ipa,
      emoji: item.emoji || '📖'
    }));
  }

  const normalize = (text) => text.trim().toLowerCase().replace(/\s+/g, ' ');
  const current = (ctx) => ctx.content[ctx.ui.index % ctx.content.length];
  const blanks = (word) => word.replace(/[a-z]/gi, '_').replace(/(.)/g, '$1 ').trim();

  function finishCorrect(ctx, item) {
    const wordsModule = window.JIMI.modules.words;
    wordsModule.recordAnswer(ctx, item.word, true);
    if (ctx.markDone(item.id)) ctx.awardStar();
    ctx.bump();
    ctx.persist();
  }

  function finishWrong(ctx, item) {
    window.JIMI.modules.words.recordAnswer(ctx, item.word, false);
    ctx.persist();
  }

  function focusInput() {
    const input = document.querySelector('#spell-input');
    if (input) input.focus();
  }

  window.JIMI.registerModule({
    id: 'listening',
    unit: '个词',
    contentFrom,
    defaults: {
      icon: '🎧',
      title: '听写训练',
      nav: '听写',
      kicker: 'LISTENING',
      emoji: '🎧',
      desc: '听发音选词义、听写拼写',
      intro: '先听，再选意思或拼出单词。答错的词会自动加入复习清单。'
    },
    initUI: () => ({ index: 0, mode: 'choose', result: '', value: '', hint: false, picked: '' }),

    summary(ctx) {
      return { progress: `${ctx.doneCount()} / ${ctx.content.length} 个词已听写` };
    },

    recommend(ctx) {
      const learned = ctx.progress.wordsLearned;
      const index = ctx.content.findIndex((item) => learned.includes(item.word) && !ctx.isDone(item.id));
      if (index === -1) return null;
      return {
        focus: '听写一个词',
        title: '听一听，检验学过的词',
        description: `用听写巩固刚学的 ${ctx.content[index].word}，答错会加入复习。`,
        buttonLabel: '开始听写',
        ui: { index, mode: 'spell', result: '', value: '', hint: false, picked: '' }
      };
    },

    render(ctx) {
      const item = current(ctx);
      const { mode, result } = ctx.ui;
      const tabs = `<div class="mode-tabs" role="tablist">
        <button class="mode-tab ${mode === 'choose' ? 'is-active' : ''}" data-action="listening:mode" data-mode="choose">🎧 听音选义</button>
        <button class="mode-tab ${mode === 'spell' ? 'is-active' : ''}" data-action="listening:mode" data-mode="spell">⌨️ 听写拼写</button>
      </div>`;
      let practice;
      if (mode === 'choose') {
        const choices = pickChoices(item.meaning, ctx.content.map((entry) => entry.meaning), hashString(item.id));
        practice = `<div class="listen-prompt">听一听，这个词是什么意思？</div>
          <div class="choice-list">${choices.map((choice) => {
            const state = result === 'ok' && choice === item.meaning ? 'is-correct' : ctx.ui.picked === choice && result === 'wrong' ? 'is-wrong' : '';
            return `<button class="choice-button ${state}" data-action="listening:choose" data-answer="${escapeHtml(choice)}" ${result === 'ok' ? 'disabled' : ''}>${escapeHtml(choice)}<span>›</span></button>`;
          }).join('')}</div>`;
      } else {
        practice = `<div class="listen-prompt">听发音，拼出这个词（意思：<strong>${escapeHtml(item.meaning)}</strong>）</div>
          <div class="spell-row">
            <input id="spell-input" class="spell-input" type="text" value="${escapeHtml(ctx.ui.value)}" data-submit="listening:check" autocomplete="off" autocapitalize="none" spellcheck="false" placeholder="输入英文单词" ${result === 'ok' ? 'disabled' : ''}>
            <button class="button button-coral" data-action="listening:check" ${result === 'ok' ? 'disabled' : ''}>检查 <span>✓</span></button>
          </div>
          ${ctx.ui.hint ? `<div class="spell-hint">提示：${escapeHtml(blanks(item.word))}　${escapeHtml(item.ipa)}</div>` : '<button class="link-button" data-action="listening:hint">需要提示？</button>'}`;
      }
      const feedback = result === 'ok'
        ? `<div class="quiz-feedback is-correct">答对啦！<strong>${escapeHtml(item.word)}</strong> ${escapeHtml(item.ipa)} · ${escapeHtml(item.meaning)} 🌟</div>`
        : result === 'wrong'
          ? '<div class="quiz-feedback is-try-again">再听一遍试试看～ 已加入复习清单。</div>'
          : '<div class="quiz-feedback"></div>';
      return {
        step: `第 ${ctx.ui.index + 1} / ${ctx.content.length} 个词`,
        progress: ((ctx.ui.index + 1) / ctx.content.length) * 100,
        body: `${tabs}
    <section class="listening-card">
      <div class="listen-stage">
        <button class="big-sound" data-action="listening:play" aria-label="播放发音"><span>🔊</span><small>点我听发音</small></button>
        ${result === 'ok' ? `<div class="listen-reveal"><span>${item.emoji}</span><strong>${escapeHtml(item.word)}</strong></div>` : ''}
      </div>
      <div class="listen-practice">${practice}${feedback}</div>
    </section>
    <div class="lesson-controls">
      <button class="button button-quiet" data-action="listening:previous" ${ctx.ui.index === 0 ? 'disabled' : ''}>← 上一个</button>
      <button class="button button-quiet" data-action="listening:next">${ctx.ui.index === ctx.content.length - 1 ? '回到第一个' : '下一个'} →</button>
    </div>`
      };
    },

    actions: {
      play: (target, ctx) => ctx.speak(current(ctx).word, target, { rate: 0.7 }),
      mode(target, ctx) {
        ctx.ui.mode = target.dataset.mode;
        Object.assign(ctx.ui, { result: '', value: '', hint: false, picked: '' });
        ctx.render();
        if (ctx.ui.mode === 'spell') focusInput();
      },
      choose(target, ctx) {
        const item = current(ctx);
        ctx.ui.picked = target.dataset.answer;
        if (target.dataset.answer === item.meaning) {
          ctx.ui.result = 'ok';
          finishCorrect(ctx, item);
          ctx.render();
          ctx.celebrate();
        } else {
          ctx.ui.result = 'wrong';
          finishWrong(ctx, item);
          ctx.render();
        }
      },
      hint(target, ctx) {
        ctx.ui.value = (document.querySelector('#spell-input') || {}).value || '';
        ctx.ui.hint = true;
        ctx.render();
        focusInput();
      },
      check(target, ctx) {
        const item = current(ctx);
        const input = document.querySelector('#spell-input');
        ctx.ui.value = input ? input.value : '';
        if (!normalize(ctx.ui.value)) {
          focusInput();
          return;
        }
        if (normalize(ctx.ui.value) === normalize(item.word)) {
          ctx.ui.result = 'ok';
          finishCorrect(ctx, item);
          ctx.render();
          ctx.celebrate();
        } else {
          ctx.ui.result = 'wrong';
          finishWrong(ctx, item);
          ctx.render();
          focusInput();
        }
      },
      previous(target, ctx) {
        ctx.ui.index = Math.max(0, ctx.ui.index - 1);
        Object.assign(ctx.ui, { result: '', value: '', hint: false, picked: '' });
        ctx.render();
        if (ctx.ui.mode === 'spell') focusInput();
        ctx.speak(current(ctx).word, null, { rate: 0.7 });
      },
      next(target, ctx) {
        ctx.ui.index = (ctx.ui.index + 1) % ctx.content.length;
        Object.assign(ctx.ui, { result: '', value: '', hint: false, picked: '' });
        ctx.render();
        if (ctx.ui.mode === 'spell') focusInput();
        ctx.speak(current(ctx).word, null, { rate: 0.7 });
      }
    }
  });
}());
