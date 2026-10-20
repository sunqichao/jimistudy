(function () {
  const { escapeHtml, hashString, seededShuffle } = window.JIMI.utils;

  function tokens(item) {
    return (item.words || item.sentence.split(' ')).concat(item.extraWords || []);
  }

  // 词库里的顺序固定但不等于答案顺序。
  function bankOrder(item) {
    const base = tokens(item).map((_, index) => index);
    const order = seededShuffle(base, hashString(item.id));
    if (order.length > 1 && order.every((value, index) => value === base[index])) {
      return order.slice(1).concat(order[0]);
    }
    return order;
  }

  function current(ctx) {
    return ctx.content[ctx.ui.index % ctx.content.length];
  }

  function resetAttempt(ui) {
    ui.order = [];
    ui.status = '';
    ui.message = '';
  }

  window.JIMI.registerModule({
    id: 'sentences',
    unit: '个句子',
    defaults: {
      icon: '💬',
      title: '句子魔法',
      nav: '句子',
      kicker: 'SENTENCE MAGIC',
      emoji: '🪄',
      desc: '把单词排成完整句子',
      intro: '一个单词一个单词来，拼出完整的英语句子。'
    },
    initUI: () => ({ index: 0, order: [], status: '', message: '' }),

    locked(ctx) {
      const words = ctx.level.content.words || [];
      const needed = Math.min(ctx.level.sentenceGate || 0, words.length);
      if (!ctx.level.modules.includes('words') || !needed) return null;
      const known = words.filter((word) => ctx.progress.wordsLearned.includes(word.word)).length;
      if (known >= needed) return null;
      return {
        message: `先认识 ${needed} 个单词，再来挑战句子吧！`,
        hint: `先认识 ${needed} 个单词，再来拼句子`,
        redirect: 'words',
        navLabel: '先学单词'
      };
    },

    summary(ctx) {
      const lock = this.locked(ctx);
      if (lock) return { progress: lock.hint, locked: true };
      return { progress: `${ctx.doneCount()} / ${ctx.content.length} 个句子` };
    },

    recommend(ctx) {
      const index = ctx.content.findIndex((item) => !ctx.isDone(item.id));
      if (index === -1) return null;
      return {
        focus: '拼一句句子',
        title: '把学过的单词放进句子',
        description: '听一听，再把单词排成完整的英文句子。',
        buttonLabel: '开始练习',
        ui: { index, order: [], status: '', message: '' }
      };
    },

    render(ctx) {
      const item = current(ctx);
      const all = tokens(item);
      const used = new Set(ctx.ui.order.map((entry) => entry.index));
      const complete = ctx.isDone(item.id);
      const target = (item.words || item.sentence.split(' ')).length;
      return {
        step: `第 ${ctx.ui.index + 1} / ${ctx.content.length} 个句子`,
        progress: ((ctx.ui.index + 1) / ctx.content.length) * 100,
        body: `<section class="sentence-workspace">
      <div class="sentence-prompt"><div class="sentence-picture">${item.emoji || '💬'}</div><div><span>试着用英语说</span><h2>${escapeHtml(item.translation)}</h2><button class="listen-line" data-action="sentences:speak">🔊 听一听句子</button></div></div>
      <div class="sentence-answer">
        <div class="answer-label"><span>把单词排好队：</span><span>${ctx.ui.order.length} / ${target}</span></div>
        <div class="answer-slots">${ctx.ui.order.length ? ctx.ui.order.map((entry, position) => `<button class="answer-chip" data-action="sentences:remove" data-position="${position}">${escapeHtml(entry.word)}</button>`).join('') : '<span class="slot-placeholder">点下面的单词，放进句子里</span>'}</div>
        <div class="word-bank">${bankOrder(item).filter((index) => !used.has(index)).map((index) => `<button class="bank-chip" data-action="sentences:add" data-index="${index}">${escapeHtml(all[index])}</button>`).join('')}</div>
        <div class="sentence-feedback ${ctx.ui.message ? 'is-visible' : ''} ${ctx.ui.status === 'ok' ? 'is-correct' : ''}" aria-live="polite">${escapeHtml(ctx.ui.message)}</div>
        <div class="sentence-actions"><button class="button button-quiet" data-action="sentences:reset">重新排</button><button class="button button-coral" data-action="sentences:check">检查答案 <span>✓</span></button></div>
      </div>
    </section>
    ${item.hint ? `<div class="sentence-tip">🌱 小提示：${escapeHtml(item.hint)}。</div>` : ''}
    <div class="lesson-controls"><button class="button button-quiet" data-action="sentences:previous" ${ctx.ui.index === 0 ? 'disabled' : ''}>← 上一句</button><button class="button button-quiet" data-action="sentences:next">${ctx.ui.index === ctx.content.length - 1 ? '回到第一句' : '下一句'} →</button></div>
    ${complete ? '<div class="completed-ribbon">🌟 这个句子已经学会啦，真棒！</div>' : ''}`
      };
    },

    actions: {
      speak: (target, ctx) => ctx.speak(current(ctx).sentence, target),
      add(target, ctx) {
        const index = Number(target.dataset.index);
        const all = tokens(current(ctx));
        if (ctx.ui.order.some((entry) => entry.index === index) || !all[index]) return;
        ctx.ui.order.push({ index, word: all[index] });
        ctx.ui.message = '';
        ctx.ui.status = '';
        ctx.render();
      },
      remove(target, ctx) {
        ctx.ui.order.splice(Number(target.dataset.position), 1);
        ctx.ui.message = '';
        ctx.ui.status = '';
        ctx.render();
      },
      reset(target, ctx) {
        resetAttempt(ctx.ui);
        ctx.render();
      },
      check(target, ctx) {
        const item = current(ctx);
        const answer = ctx.ui.order.map((entry) => entry.word).join(' ');
        if (answer === item.sentence) {
          ctx.ui.message = '太棒了！句子排对啦！🌟';
          ctx.ui.status = 'ok';
          if (ctx.markDone(item.id)) ctx.awardStar();
          ctx.bump();
          ctx.ui.order = [];
          ctx.render();
          ctx.celebrate();
        } else {
          ctx.ui.message = '再试试看，想想哪个单词应该放在最前面？';
          ctx.ui.status = 'retry';
          ctx.render();
        }
      },
      previous(target, ctx) {
        ctx.ui.index = Math.max(0, ctx.ui.index - 1);
        resetAttempt(ctx.ui);
        ctx.render();
      },
      next(target, ctx) {
        ctx.ui.index = (ctx.ui.index + 1) % ctx.content.length;
        resetAttempt(ctx.ui);
        ctx.render();
      }
    }
  });
}());
