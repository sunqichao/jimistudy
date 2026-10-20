(function () {
  const { escapeHtml, hashString, pickChoices } = window.JIMI.utils;
  const DAY = 24 * 60 * 60 * 1000;
  const SOURCE_LABEL = { reading: '阅读', grammar: '语法', exam: '模拟题', roots: '词根词缀' };

  function dueWords(ctx) {
    const words = ctx.contentOf('words');
    return window.JIMI.modules.words.dueWords({ progress: ctx.progress, content: words })
      .sort((first, second) => words.indexOf(first) - words.indexOf(second));
  }

  // 把错题记录还原成具体题目；题库改动导致找不到的记录直接忽略。
  function resolveMistakes(ctx) {
    return Object.entries(ctx.progress.mistakes).map(([key, mistake]) => {
      const group = ctx.contentOf(mistake.module).find((item) => item.id === mistake.itemId);
      const questions = group && (group.questions || group.exercises);
      const question = questions && questions[mistake.index];
      return question ? { key, mistake, group, question } : null;
    }).filter(Boolean);
  }

  function dueLabel(review, now = Date.now()) {
    if (review.dueAt <= now) return '现在复习';
    return `${Math.ceil((review.dueAt - now) / DAY)} 天后复习`;
  }

  function wordReviewHtml(ctx) {
    const words = ctx.contentOf('words');
    const due = dueWords(ctx);
    const scheduled = words.filter((word) => ctx.progress.wordReviews[word.word] && !due.includes(word));
    if (!due.length) {
      return `<div class="empty-state"><span>🎉</span><strong>现在没有待复习的单词</strong><small>${scheduled.length ? `还有 ${scheduled.length} 个词在复习计划中，到期后会出现在这里。` : '答错的单词会自动加入这里，按 1、3、7、14 天复习。'}</small></div>
      ${scheduled.length ? planHtml(ctx, scheduled) : ''}`;
    }
    const word = due[0];
    const choices = pickChoices(word.meaning, words.map((item) => item.meaning), hashString(word.word));
    const answered = ctx.ui.wordResult;
    return `<section class="review-card">
      <div class="review-word">
        <span class="review-count">待复习 ${due.length} 个</span>
        <div class="word-art">${word.emoji || '📖'}</div>
        <h2>${escapeHtml(word.word)}</h2>
        <div class="word-pronunciation">${escapeHtml(word.ipa || '')}</div>
        <button class="sound-button" data-action="review:speak" data-text="${escapeHtml(word.word)}"><span class="sound-icon">🔊</span><span>听一听</span></button>
      </div>
      <div class="review-quiz">
        <div class="listen-prompt">“${escapeHtml(word.word)}” 的意思是什么？</div>
        <div class="choice-list">${choices.map((choice) => `<button class="choice-button ${answered === choice ? 'is-wrong' : ''}" data-action="review:answer-word" data-word="${escapeHtml(word.word)}" data-answer="${escapeHtml(choice)}">${escapeHtml(choice)}<span>›</span></button>`).join('')}</div>
        <div class="quiz-feedback ${answered ? 'is-try-again' : ''}">${answered ? '再想一想，答对后才会推进复习计划。' : ''}</div>
      </div>
    </section>
    ${scheduled.length ? planHtml(ctx, scheduled) : ''}`;
  }

  function planHtml(ctx, scheduled) {
    return `<div class="review-plan"><strong>复习计划中</strong>${scheduled.map((item) => `<span>${escapeHtml(item.word)} · ${dueLabel(ctx.progress.wordReviews[item.word])}</span>`).join('')}</div>`;
  }

  function mistakesHtml(ctx) {
    const items = resolveMistakes(ctx);
    if (!items.length) {
      return '<div class="empty-state"><span>🎉</span><strong>错题本是空的</strong><small>阅读和语法练习里答错的题会自动收集到这里，答对后就会移出。</small></div>';
    }
    return `<div class="mistake-list">${items.map(({ key, mistake, group, question }) => {
      const wrong = ctx.ui.wrong[key] || [];
      return `<article class="mistake-card">
        <div class="mistake-source"><span>${SOURCE_LABEL[mistake.module] || mistake.module}</span><small>${escapeHtml(group.title)}</small></div>
        <p class="mcq-question"><span class="mcq-number">${mistake.index + 1}</span><span>${escapeHtml(question.q)}</span></p>
        <div class="mcq-options">${question.options.map((option, optionIndex) => `<button class="mcq-option ${wrong.includes(optionIndex) ? 'is-wrong' : ''}" data-action="review:retry" data-key="${escapeHtml(key)}" data-option="${optionIndex}" ${wrong.includes(optionIndex) ? 'disabled' : ''}><b>${String.fromCharCode(65 + optionIndex)}</b><span>${escapeHtml(option)}</span></button>`).join('')}</div>
        ${wrong.length ? '<div class="mcq-explain">✗ 再想一想，换个选项试试</div>' : ''}
      </article>`;
    }).join('')}</div>`;
  }

  window.JIMI.registerModule({
    id: 'review',
    unit: '项待复习',
    standalone: true,
    defaults: {
      icon: '📒',
      title: '错题本',
      nav: '错题',
      kicker: 'REVIEW',
      emoji: '📒',
      desc: '集中复习答错的单词和题目',
      intro: '答错的单词和题目都会收集到这里，答对后自动移出。'
    },
    initUI: () => ({ tab: '', wordResult: '', wrong: {} }),

    summary(ctx) {
      const words = dueWords(ctx).length;
      const questions = resolveMistakes(ctx).length;
      return { progress: words + questions ? `${words} 个词 · ${questions} 道题待复习` : '暂时没有待复习内容' };
    },

    recommend(ctx) {
      const questions = resolveMistakes(ctx).length;
      if (!questions) return null;
      return {
        focus: '清一清错题',
        title: `错题本里有 ${questions} 道题`,
        description: '趁还有印象，重新做一遍，答对就会移出错题本。',
        buttonLabel: '去复习',
        ui: { tab: 'questions' }
      };
    },

    render(ctx) {
      const words = dueWords(ctx).length;
      const questions = resolveMistakes(ctx).length;
      const tab = ctx.ui.tab || (words || !questions ? 'words' : 'questions');
      return {
        pageClass: 'review-page',
        step: `${words} 个词 · ${questions} 道题待复习`,
        body: `<div class="mode-tabs" role="tablist">
        <button class="mode-tab ${tab === 'words' ? 'is-active' : ''}" data-action="review:tab" data-tab="words">🔤 单词复习 ${words ? `<em class="tab-badge">${words}</em>` : ''}</button>
        <button class="mode-tab ${tab === 'questions' ? 'is-active' : ''}" data-action="review:tab" data-tab="questions">❓ 错题 ${questions ? `<em class="tab-badge">${questions}</em>` : ''}</button>
      </div>
      ${tab === 'words' ? wordReviewHtml(ctx) : mistakesHtml(ctx)}`
      };
    },

    actions: {
      tab(target, ctx) {
        ctx.ui.tab = target.dataset.tab;
        ctx.ui.wordResult = '';
        ctx.render();
      },
      speak: (target, ctx) => ctx.speak(target.dataset.text, target, { rate: 0.7 }),
      'answer-word'(target, ctx) {
        const word = ctx.contentOf('words').find((item) => item.word === target.dataset.word);
        if (!word) return;
        const wordsModule = window.JIMI.modules.words;
        if (target.dataset.answer === word.meaning) {
          wordsModule.recordAnswer({ progress: ctx.progress }, word.word, true);
          ctx.bump();
          ctx.persist();
          ctx.ui.wordResult = '';
          ctx.render();
          ctx.celebrate('复习完成一个词！');
        } else {
          wordsModule.recordAnswer({ progress: ctx.progress }, word.word, false);
          ctx.persist();
          ctx.ui.wordResult = target.dataset.answer;
          ctx.render();
        }
      },
      retry(target, ctx) {
        const entry = resolveMistakes(ctx).find((item) => item.key === target.dataset.key);
        if (!entry) return;
        const option = Number(target.dataset.option);
        if (option === entry.question.answer) {
          ctx.clearMistake(entry.mistake.module, entry.mistake.itemId, entry.mistake.index);
          delete ctx.ui.wrong[entry.key];
          ctx.bump();
          ctx.render();
          ctx.celebrate('答对啦，这道题移出错题本！');
        } else {
          ctx.ui.wrong[entry.key] = [...(ctx.ui.wrong[entry.key] || []), option];
          ctx.render();
        }
      }
    }
  });
}());
