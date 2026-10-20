(function () {
  const { escapeHtml, hashString, pickChoices, seededShuffle } = window.JIMI.utils;
  const { renderQuestions, allCorrect, correctCount } = window.JIMI.quiz;

  const TYPE_LABEL = { prefix: '前缀', suffix: '后缀', root: '词根' };
  const TYPE_ORDER = { prefix: 0, suffix: 1, root: 2 };
  const FILTERS = [['all', '全部'], ['prefix', '前缀'], ['suffix', '后缀'], ['root', '词根']];
  const cache = {};

  const strip = (part) => part.replace(/-/g, '').toLowerCase();
  const partsText = (word) => word.parts.join(' + ');

  // 单词是否“看起来含有”这个词缀/词根：用来保证干扰项不会误导学习者。
  function looksLike(word, unit) {
    const text = word.word.toLowerCase();
    if (word.parts.some((part) => unit.variants.includes(strip(part)))) return true;
    return unit.variants.some((variant) => {
      if (unit.type === 'prefix') return text.startsWith(variant);
      if (unit.type === 'suffix') return text.endsWith(variant);
      return variant.length >= 3 && text.includes(variant);
    });
  }

  function buildQuestions(unit, units) {
    const seed = hashString(unit.id);
    const label = TYPE_LABEL[unit.type];
    const others = units.filter((item) => item.id !== unit.id);

    const sameTypeMeanings = others.filter((item) => item.type === unit.type).map((item) => item.meaning);
    const meaningPool = sameTypeMeanings.length >= 2 ? sameTypeMeanings : others.map((item) => item.meaning);
    const meaningChoices = pickChoices(unit.meaning, meaningPool.filter((text) => text !== unit.meaning), seed);

    const target = unit.words[seed % unit.words.length];
    const sameUnit = seededShuffle(unit.words.filter((word) => word.word !== target.word).map((word) => word.meaning), seed + 7);
    const elsewhere = seededShuffle(others.flatMap((item) => item.words.map((word) => word.meaning)), seed + 11)
      .filter((text) => text !== target.meaning && text !== sameUnit[0]);
    const breakdownChoices = seededShuffle([target.meaning, sameUnit[0], elsewhere[0]], seed + 3);

    const containing = unit.words[(seed + 1) % unit.words.length];
    const candidates = seededShuffle(
      others.flatMap((item) => item.words).filter((word) => !looksLike(word, unit)),
      seed + 5
    ).slice(0, 2);
    const findChoices = seededShuffle([containing.word, ...candidates.map((word) => word.word)], seed + 9);

    return [
      {
        q: `${label} “${unit.form}” 的意思是？`,
        options: meaningChoices,
        answer: meaningChoices.indexOf(unit.meaning),
        explain: `${unit.form}：${unit.meaning}（${unit.origin}）`
      },
      {
        q: `“${target.word}” 拆开是 ${partsText(target)}，合起来最可能是什么意思？`,
        options: breakdownChoices,
        answer: breakdownChoices.indexOf(target.meaning),
        explain: `${partsText(target)} → ${target.meaning}`
      },
      {
        q: `下面哪个单词含有${label} “${unit.form}”（${unit.meaning}）？`,
        options: findChoices,
        answer: findChoices.indexOf(containing.word),
        explain: `${containing.word} = ${partsText(containing)}（${containing.meaning}）`
      }
    ];
  }

  function contentFrom(level) {
    const maxTier = level.rootsMaxTier || 3;
    const key = `${level.id}:${maxTier}`;
    if (cache[key]) return cache[key];
    const units = window.JIMI.rootsData
      .map((unit, order) => ({ unit, order }))
      .filter(({ unit }) => unit.tier <= maxTier)
      .sort((first, second) => (
        first.unit.tier - second.unit.tier
        || TYPE_ORDER[first.unit.type] - TYPE_ORDER[second.unit.type]
        || first.order - second.order
      ))
      .map(({ unit }) => unit);
    cache[key] = units.map((unit) => ({
      ...unit,
      title: `${TYPE_LABEL[unit.type]} ${unit.form}`,
      questions: buildQuestions(unit, units)
    }));
    return cache[key];
  }

  function visible(ctx) {
    return ctx.ui.filter === 'all' ? ctx.content : ctx.content.filter((unit) => unit.type === ctx.ui.filter);
  }

  function current(ctx) {
    return ctx.content.find((unit) => unit.id === ctx.ui.id) || ctx.content[0];
  }

  function picked(ctx, unit) {
    if (!ctx.ui.picked[unit.id]) ctx.ui.picked[unit.id] = {};
    return ctx.ui.picked[unit.id];
  }

  function partsHtml(word, unit) {
    return word.parts
      .map((part) => `<span class="part ${unit.variants.includes(strip(part)) ? 'is-key' : ''}">${escapeHtml(part)}</span>`)
      .join('<i>+</i>');
  }

  function move(ctx, step) {
    const list = visible(ctx);
    const index = list.findIndex((unit) => unit.id === current(ctx).id);
    const next = list[(index + step + list.length) % list.length];
    if (next) ctx.ui.id = next.id;
    ctx.render();
    window.scrollTo(0, 0);
  }

  window.JIMI.registerModule({
    id: 'roots',
    unit: '个词缀词根',
    contentFrom,
    buildQuestions,
    defaults: {
      icon: '🧬',
      title: '词根词缀',
      nav: '词根',
      kicker: 'WORD PARTS',
      emoji: '🧬',
      desc: '拆开单词，由词根词缀猜词义',
      intro: '一个词缀或词根学会了，能带出一串单词。先看含义和例词，再做三道小题。'
    },
    initUI: () => ({ id: '', filter: 'all', picked: {} }),

    summary(ctx) {
      return { progress: `${ctx.doneCount()} / ${ctx.content.length} 个词缀词根` };
    },

    recommend(ctx) {
      const unit = ctx.content.find((item) => !ctx.isDone(item.id));
      if (!unit) return null;
      return {
        focus: `拆词：${unit.form}`,
        title: '用词根词缀一次学一串词',
        description: `今天学${TYPE_LABEL[unit.type]} “${unit.form}”（${unit.meaning}），顺便认识 ${unit.words.length} 个相关单词。`,
        buttonLabel: '去拆词',
        ui: { id: unit.id, filter: 'all', picked: {} }
      };
    },

    render(ctx) {
      const unit = current(ctx);
      const list = visible(ctx);
      const answers = picked(ctx, unit);
      const done = ctx.isDone(unit.id);
      const counts = { all: ctx.content.length };
      ctx.content.forEach((item) => { counts[item.type] = (counts[item.type] || 0) + 1; });
      return {
        pageClass: 'roots-page',
        step: `${ctx.labels.title} · ${ctx.content.length} ${ctx.labels.unit}`,
        progress: (ctx.doneCount() / ctx.content.length) * 100,
        body: `<div class="mode-tabs" role="tablist">${FILTERS.filter(([key]) => counts[key]).map(([key, text]) => `<button class="mode-tab ${ctx.ui.filter === key ? 'is-active' : ''}" data-action="roots:filter" data-filter="${key}">${text} <em class="tab-count">${counts[key]}</em></button>`).join('')}</div>
    <div class="affix-grid" aria-label="选择词缀或词根">${list.map((item) => `<button class="affix-tile ${item.id === unit.id ? 'is-selected' : ''} ${ctx.isDone(item.id) ? 'is-done' : ''}" data-action="roots:select" data-id="${escapeHtml(item.id)}"><b>${escapeHtml(item.form)}</b><small>${escapeHtml(item.meaning)}</small></button>`).join('')}</div>
    <section class="affix-card">
      <div class="affix-head">
        <div class="affix-form-box"><span class="affix-type type-${unit.type}">${TYPE_LABEL[unit.type]}</span><h2>${escapeHtml(unit.form)}</h2></div>
        <div class="affix-info">
          <div class="affix-meaning">${escapeHtml(unit.meaning)}</div>
          <div class="affix-origin">来源：${escapeHtml(unit.origin)}</div>
          <p class="affix-tip">💡 ${escapeHtml(unit.tip)}</p>
        </div>
      </div>
      <div class="affix-words">${unit.words.map((word) => `<article class="affix-word"><div class="affix-parts">${partsHtml(word, unit)}</div><strong>${escapeHtml(word.word)}</strong><small>${escapeHtml(word.meaning)}</small><button class="line-sound" data-action="roots:speak" data-text="${escapeHtml(word.word)}" aria-label="听 ${escapeHtml(word.word)} 的发音">🔊</button></article>`).join('')}</div>
      <div class="affix-quiz">
        <div class="quiz-title"><span>🎯</span><strong>小测</strong><small>${correctCount(unit.questions, answers)} / ${unit.questions.length}</small></div>
        ${renderQuestions(unit.questions, answers, 'roots:answer')}
        ${done ? '<div class="completed-ribbon">🌟 这个词缀（词根）已经掌握啦！</div>' : ''}
      </div>
    </section>
    <div class="lesson-controls"><button class="button button-quiet" data-action="roots:previous">← 上一个</button><button class="button button-quiet" data-action="roots:next">下一个 →</button></div>`
      };
    },

    actions: {
      filter(target, ctx) {
        ctx.ui.filter = target.dataset.filter;
        const list = visible(ctx);
        if (list.length && !list.some((unit) => unit.id === current(ctx).id)) ctx.ui.id = list[0].id;
        ctx.render();
      },
      select(target, ctx) {
        ctx.ui.id = target.dataset.id;
        ctx.render();
      },
      speak: (target, ctx) => ctx.speak(target.dataset.text, target),
      previous: (target, ctx) => move(ctx, -1),
      next: (target, ctx) => move(ctx, 1),
      answer(target, ctx) {
        const unit = current(ctx);
        const answers = picked(ctx, unit);
        const index = Number(target.dataset.q);
        answers[index] = Number(target.dataset.option);
        if (answers[index] === unit.questions[index].answer) {
          ctx.bump();
          ctx.clearMistake('roots', unit.id, index);
        } else {
          ctx.recordMistake('roots', unit.id, index);
        }
        const firstTime = allCorrect(unit.questions, answers) && ctx.markDone(unit.id);
        if (firstTime) ctx.awardStar();
        ctx.render();
        if (firstTime) ctx.celebrate('又掌握一个词缀词根！');
      }
    }
  });
}());
