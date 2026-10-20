(function () {
  const { escapeHtml, hashString, pickChoices } = window.JIMI.utils;
  const REVIEW_INTERVAL_DAYS = [1, 3, 7, 14];
  const DAY = 24 * 60 * 60 * 1000;

  function dueWords(ctx, now = Date.now()) {
    const reviews = ctx.progress.wordReviews;
    return ctx.content
      .filter((word) => reviews[word.word] && reviews[word.word].dueAt <= now)
      .sort((first, second) => reviews[first.word].dueAt - reviews[second.word].dueAt);
  }

  function knownCount(ctx) {
    return ctx.content.filter((word) => ctx.progress.wordsLearned.includes(word.word)).length;
  }

  function recordAnswer(ctx, word, isCorrect) {
    const reviews = ctx.progress.wordReviews;
    const review = reviews[word];
    if (!isCorrect) {
      reviews[word] = { dueAt: Date.now(), correctStreak: 0, intervalDays: 0 };
      return;
    }
    // 只有到期的复习才推进间隔，避免连续点击刷间隔。
    if (!review || review.dueAt > Date.now()) return;
    const intervalDays = REVIEW_INTERVAL_DAYS[Math.min(review.correctStreak, REVIEW_INTERVAL_DAYS.length - 1)];
    reviews[word] = {
      dueAt: Date.now() + intervalDays * DAY,
      correctStreak: review.correctStreak + 1,
      intervalDays
    };
  }

  function current(ctx) {
    return ctx.content[ctx.ui.index % ctx.content.length];
  }

  function learn(ctx, word) {
    if (ctx.progress.wordsLearned.includes(word)) return false;
    ctx.progress.wordsLearned.push(word);
    ctx.awardStar();
    return true;
  }

  const GROUP_SIZE = 20;
  const GROUP_BAR_MIN = 31;

  // 词量大时按每 20 个一组，显示每组已学数量，方便跳转。
  function groupBarHtml(ctx) {
    const total = ctx.content.length;
    if (total < GROUP_BAR_MIN) return '';
    const currentGroup = Math.floor(ctx.ui.index / GROUP_SIZE);
    const groups = Math.ceil(total / GROUP_SIZE);
    const chips = Array.from({ length: groups }, (_, group) => {
      const slice = ctx.content.slice(group * GROUP_SIZE, (group + 1) * GROUP_SIZE);
      const known = slice.filter((item) => ctx.progress.wordsLearned.includes(item.word)).length;
      const state = known === slice.length ? 'is-complete' : '';
      return `<button class="group-chip ${group === currentGroup ? 'is-active' : ''} ${state}" data-action="words:group" data-group="${group}"><b>第 ${group + 1} 组</b><small>${known}/${slice.length}</small></button>`;
    }).join('');
    const remaining = total - knownCount(ctx);
    return `<div class="group-bar"><div class="group-chips" aria-label="选择单词分组">${chips}</div>
      <button class="chip-button" data-action="words:next-new" ${remaining ? '' : 'disabled'}>跳到下一个没学的 →</button></div>`;
  }

  window.JIMI.registerModule({
    id: 'words',
    unit: '个单词',
    defaults: {
      icon: '🔤',
      title: '单词乐园',
      nav: '单词',
      kicker: 'WORD GARDEN',
      emoji: '🌼',
      desc: '认识生活里的英语单词',
      intro: '看一看、听一听，再把新朋友记在心里。',
      tip: '记忆小窍门：把单词和图片连在一起，记起来更轻松！'
    },
    initUI: () => ({ index: 0 }),
    dueWords,
    recordAnswer,

    summary(ctx) {
      return { progress: `${knownCount(ctx)} / ${ctx.content.length} 个单词` };
    },

    recommend(ctx) {
      const due = dueWords(ctx);
      if (due.length) {
        const word = due[0];
        return {
          focus: `复习 ${word.word}`,
          title: `先复习易错词：${word.word}`,
          description: `有 ${due.length} 个单词待复习，答对后会安排下一次复习。`,
          buttonLabel: '开始复习',
          ui: { index: ctx.content.indexOf(word) }
        };
      }
      const index = ctx.content.findIndex((word) => !ctx.progress.wordsLearned.includes(word.word));
      if (index === -1) return null;
      const word = ctx.content[index];
      return {
        focus: `认识 ${word.word}`,
        title: '今天认识一个新单词',
        description: `从 ${word.word} 开始，听发音、看图片，再试着答题。`,
        buttonLabel: '开始学习',
        ui: { index }
      };
    },

    render(ctx) {
      const total = ctx.content.length;
      const word = current(ctx);
      const learned = ctx.progress.wordsLearned.includes(word.word);
      const review = ctx.progress.wordReviews[word.word];
      const reviewDue = review && review.dueAt <= Date.now();
      const choices = pickChoices(word.meaning, ctx.content.map((item) => item.meaning), hashString(word.word));
      const meta = [word.ipa, word.pos].filter(Boolean).map(escapeHtml).join(' · ');
      return {
        step: `第 ${ctx.ui.index + 1} / ${total} 个单词`,
        progress: ((ctx.ui.index + 1) / total) * 100,
        body: `${groupBarHtml(ctx)}<section class="word-study-layout">
      <article class="word-card ${word.color || 'yellow'}">
        <div class="word-card-top"><span>NEW WORD</span><span class="word-card-count">${String(ctx.ui.index + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}</span></div>
        <div class="word-art">${word.emoji || '📖'}<span class="word-art-sparkle">✦</span></div>
        <h2>${escapeHtml(word.word)}</h2>
        <div class="word-pronunciation">${meta}</div>
        <button class="sound-button" data-action="words:speak-word" aria-label="听 ${escapeHtml(word.word)} 的英语发音">
          <span class="sound-icon">🔊</span><span>听一听发音</span><span class="sound-waves">♪</span>
        </button>
        <div class="word-meaning">${escapeHtml(word.meaning)}</div>
        <div class="word-example"><span>试着说：</span><button data-action="words:speak-example">${escapeHtml(word.example)}　🔊</button></div>
        ${word.exampleZh ? `<div class="word-example-zh">${escapeHtml(word.exampleZh)}</div>` : ''}
        ${learned ? '<div class="known-stamp">✓ 已经认识啦</div>' : ''}
        ${reviewDue ? '<div class="review-stamp">↻ 这是待复习单词</div>' : ''}
      </article>
      <aside class="word-side">
        <div class="mini-coach"><span>${ctx.level.mascot}</span><div><strong>${escapeHtml(ctx.level.coach)}</strong><p>点喇叭听一听，跟我读一遍吧！</p></div></div>
        <div class="meaning-quiz">
          <div class="quiz-title"><span>🎯</span><strong>小小挑战</strong></div>
          <p>“${escapeHtml(word.word)}” 的意思是什么？</p>
          <div class="choice-list">${choices.map((choice) => `<button class="choice-button" data-action="words:answer" data-answer="${escapeHtml(choice)}">${escapeHtml(choice)}<span>›</span></button>`).join('')}</div>
          <div class="quiz-feedback" aria-live="polite"></div>
        </div>
        <div class="word-tip"><span>💡</span><p>${escapeHtml(ctx.labels.tip)}</p></div>
      </aside>
    </section>
    <div class="lesson-controls">
      <button class="button button-quiet" data-action="words:previous" ${ctx.ui.index === 0 ? 'disabled' : ''}>← 上一个</button>
      <button class="button button-coral" data-action="words:mark">${learned ? '再复习一次' : '我记住啦'} <span>⭐</span></button>
      <button class="button button-quiet" data-action="words:next">${ctx.ui.index === total - 1 ? '回到第一个' : '下一个单词'} →</button>
    </div>`
      };
    },

    actions: {
      'speak-word': (target, ctx) => ctx.speak(current(ctx).word, target),
      'speak-example': (target, ctx) => ctx.speak(current(ctx).example, target),
      previous(target, ctx) {
        ctx.ui.index = Math.max(0, ctx.ui.index - 1);
        ctx.render();
      },
      next(target, ctx) {
        ctx.ui.index = (ctx.ui.index + 1) % ctx.content.length;
        ctx.render();
      },
      group(target, ctx) {
        ctx.ui.index = Number(target.dataset.group) * GROUP_SIZE;
        ctx.render();
      },
      'next-new'(target, ctx) {
        const total = ctx.content.length;
        for (let step = 1; step <= total; step += 1) {
          const index = (ctx.ui.index + step) % total;
          if (!ctx.progress.wordsLearned.includes(ctx.content[index].word)) {
            ctx.ui.index = index;
            ctx.render();
            return;
          }
        }
        ctx.toast('所有单词都认识啦，真棒！');
      },
      mark(target, ctx) {
        if (!learn(ctx, current(ctx).word)) ctx.toast('复习也很棒！你已经认识这个单词啦');
        ctx.bump();
        ctx.ui.index = (ctx.ui.index + 1) % ctx.content.length;
        ctx.persist();
        ctx.render();
      },
      answer(target, ctx) {
        const word = current(ctx);
        const feedback = document.querySelector('.meaning-quiz .quiz-feedback');
        if (target.dataset.answer === word.meaning) {
          feedback.textContent = '答对啦！真是记忆小达人 🌟';
          feedback.className = 'quiz-feedback is-correct';
          ctx.celebrate();
          recordAnswer(ctx, word.word, true);
          learn(ctx, word.word);
          ctx.bump();
        } else {
          feedback.textContent = '再想一想，看看上面的图片提示吧～ 已加入复习清单。';
          feedback.className = 'quiz-feedback is-try-again';
          recordAnswer(ctx, word.word, false);
        }
        ctx.persist();
      }
    }
  });
}());
