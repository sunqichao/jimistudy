(function () {
  const { escapeHtml } = window.JIMI.utils;
  const PASS_RATIO = 0.6;
  const LETTERS = 'ABCDEFGH';

  const current = (ctx) => ctx.content[ctx.ui.index % ctx.content.length];

  // 未作答视为答错。
  function grade(questions, picked) {
    const details = questions.map((question, index) => ({
      index,
      picked: picked[index],
      correct: picked[index] === question.answer
    }));
    const score = details.filter((detail) => detail.correct).length;
    return { score, total: questions.length, passed: score / questions.length >= PASS_RATIO, details };
  }

  function stopTimer(ui) {
    if (ui.timer) window.clearInterval(ui.timer);
    ui.timer = null;
  }

  function formatTime(ms) {
    const seconds = Math.max(0, Math.ceil(ms / 1000));
    return `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;
  }

  function resetExam(ui) {
    stopTimer(ui);
    Object.assign(ui, { phase: 'intro', picked: {}, deadline: 0, result: null });
  }

  function start(ctx) {
    const exam = current(ctx);
    resetExam(ctx.ui);
    ctx.ui.phase = 'doing';
    ctx.ui.deadline = Date.now() + exam.minutes * 60 * 1000;
    ctx.ui.timer = window.setInterval(() => {
      const left = ctx.ui.deadline - Date.now();
      const label = document.querySelector('#exam-timer');
      if (label) label.textContent = formatTime(left);
      if (left <= 0) submit(ctx, true);
    }, 1000);
    ctx.render();
    window.scrollTo(0, 0);
  }

  function submit(ctx, timeUp = false) {
    if (ctx.ui.phase !== 'doing') return;
    const exam = current(ctx);
    stopTimer(ctx.ui);
    const result = grade(exam.questions, ctx.ui.picked);
    result.timeUp = timeUp;
    result.details.forEach((detail) => {
      if (detail.correct) ctx.clearMistake('exam', exam.id, detail.index);
      else ctx.recordMistake('exam', exam.id, detail.index);
    });
    const best = ctx.progress.scores[exam.id];
    if (!best || result.score > best.best || best.total !== result.total) {
      ctx.progress.scores[exam.id] = { best: result.score, total: result.total };
    }
    const firstPass = result.passed && ctx.markDone(exam.id);
    if (firstPass) ctx.awardStar();
    ctx.bump();
    ctx.persist();
    ctx.ui.phase = 'result';
    ctx.ui.result = result;
    ctx.render();
    window.scrollTo(0, 0);
    ctx.celebrate(result.passed ? `${result.score} / ${result.total} 分，通过！` : `${result.score} / ${result.total} 分，再接再厉`);
  }

  function optionsHtml(question, index, picked, mode, resultDetail) {
    return `<div class="mcq-options">${question.options.map((option, optionIndex) => {
      let state = '';
      if (mode === 'doing' && picked === optionIndex) state = 'is-picked';
      if (mode === 'result') {
        if (optionIndex === question.answer) state = 'is-correct';
        else if (resultDetail.picked === optionIndex) state = 'is-wrong';
      }
      return `<button class="mcq-option ${state}" data-action="exam:pick" data-q="${index}" data-option="${optionIndex}" ${mode === 'result' ? 'disabled' : ''}><b>${LETTERS[optionIndex]}</b><span>${escapeHtml(option)}</span></button>`;
    }).join('')}</div>`;
  }

  function passageHtml(exam) {
    if (!exam.passage || !exam.passage.length) return '';
    return `<article class="exam-passage">${exam.passage.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join('')}</article>`;
  }

  function introHtml(ctx, exam) {
    const best = ctx.progress.scores[exam.id];
    return `<section class="exam-intro">
      <div class="exam-intro-icon">${exam.emoji}</div>
      <span class="section-kicker">${escapeHtml(exam.type)}</span>
      <h2>${escapeHtml(exam.title)}</h2>
      <p>${escapeHtml(exam.subtitle)}</p>
      <ul class="exam-facts">
        <li><b>${exam.questions.length}</b>道题</li>
        <li><b>${exam.minutes}</b>分钟</li>
        <li><b>60%</b>通过</li>
        <li><b>${best ? `${best.best}/${best.total}` : '—'}</b>最高分</li>
      </ul>
      <p class="exam-rule">开始后计时，时间到会自动交卷。未作答的题按答错处理，答错的题会进入错题本。</p>
      <button class="button button-coral" data-action="exam:start">开始作答 <span>→</span></button>
    </section>`;
  }

  function doingHtml(ctx, exam) {
    const answered = Object.keys(ctx.ui.picked).length;
    return `<div class="exam-bar"><span>⏱ <strong id="exam-timer">${formatTime(ctx.ui.deadline - Date.now())}</strong></span><span>已答 <strong id="exam-answered">${answered}</strong> / ${exam.questions.length}</span></div>
    <div class="exam-layout ${exam.passage ? 'has-passage' : ''}">
      ${passageHtml(exam)}
      <div class="exam-questions">${exam.questions.map((question, index) => `<div class="mcq">
        <p class="mcq-question"><span class="mcq-number">${index + 1}</span><span>${escapeHtml(question.q)}</span></p>
        ${optionsHtml(question, index, ctx.ui.picked[index], 'doing')}
      </div>`).join('')}</div>
    </div>
    <div class="lesson-controls"><button class="button button-quiet" data-action="exam:quit">放弃本次</button><button class="button button-coral" data-action="exam:submit">交卷 <span>✓</span></button></div>`;
  }

  function resultHtml(ctx, exam) {
    const result = ctx.ui.result;
    return `<section class="exam-result ${result.passed ? 'is-pass' : 'is-fail'}">
      <div class="exam-score"><strong>${result.score}</strong><span>/ ${result.total}</span></div>
      <div><h2>${result.passed ? '通过！' : '还差一点'}${result.timeUp ? '（时间到，已自动交卷）' : ''}</h2>
      <p>${result.passed ? '继续保持。下面的解析可以再看一遍。' : `需要答对 ${Math.ceil(result.total * PASS_RATIO)} 题才算通过。答错的题已放进错题本。`}</p></div>
    </section>
    <div class="exam-layout ${exam.passage ? 'has-passage' : ''}">
      ${passageHtml(exam)}
      <div class="exam-questions">${exam.questions.map((question, index) => {
        const detail = result.details[index];
        return `<div class="mcq ${detail.correct ? 'is-correct' : 'is-wrong'}">
          <p class="mcq-question"><span class="mcq-number">${index + 1}</span><span>${escapeHtml(question.q)}</span></p>
          ${optionsHtml(question, index, detail.picked, 'result', detail)}
          <div class="mcq-explain">${detail.correct ? '✓ 正确' : `✗ ${detail.picked === undefined ? '未作答' : '答错了'}，正确答案是 ${LETTERS[question.answer]}`}${question.explain ? ` · ${escapeHtml(question.explain)}` : ''}</div>
        </div>`;
      }).join('')}</div>
    </div>
    <div class="lesson-controls"><button class="button button-quiet" data-action="exam:retry">再做一次</button><button class="button button-quiet" data-action="navigate" data-page="review">去错题本 →</button></div>`;
  }

  window.JIMI.registerModule({
    id: 'exam',
    unit: '套模拟题',
    grade,
    defaults: {
      icon: '📝',
      title: '模拟考试',
      nav: '模拟',
      kicker: 'MOCK EXAM',
      emoji: '📝',
      desc: '限时套题，交卷评分并给出解析',
      intro: '选一套题，限时作答。交卷后看解析，答错的题会进入错题本。'
    },
    initUI: () => ({ index: 0, phase: 'intro', picked: {}, deadline: 0, timer: null, result: null }),
    onLeave: (ctx) => resetExam(ctx.ui),

    summary(ctx) {
      return { progress: `${ctx.doneCount()} / ${ctx.content.length} 套已通过` };
    },

    recommend(ctx) {
      const index = ctx.content.findIndex((exam) => !ctx.isDone(exam.id));
      if (index === -1) return null;
      return {
        focus: '做一套模拟题',
        title: '来一套限时模拟',
        description: `《${ctx.content[index].title}》${ctx.content[index].questions.length} 题，${ctx.content[index].minutes} 分钟，检验这段时间的成果。`,
        buttonLabel: '去模拟',
        ui: { index, phase: 'intro', picked: {}, result: null }
      };
    },

    render(ctx) {
      const exam = current(ctx);
      const phase = ctx.ui.phase;
      return {
        pageClass: 'exam-page',
        step: `${ctx.labels.title} · ${ctx.content.length} ${ctx.labels.unit}`,
        body: `<div class="course-grid" aria-label="选择套题">
      ${ctx.content.map((entry, index) => `<button class="course-tile ${entry.color || 'blue'} ${index === ctx.ui.index ? 'is-selected' : ''}" data-action="exam:select" data-index="${index}">
        <span class="course-tile-emoji">${entry.emoji}</span><strong>${escapeHtml(entry.title)}</strong><small>${escapeHtml(entry.subtitle)}</small><span class="course-tile-done">${ctx.isDone(entry.id) ? '✓ 已通过' : `${entry.questions.length} 题 · ${entry.minutes} 分钟`}</span>
      </button>`).join('')}
    </div>
    ${phase === 'doing' ? doingHtml(ctx, exam) : phase === 'result' ? resultHtml(ctx, exam) : introHtml(ctx, exam)}`
      };
    },

    actions: {
      select(target, ctx) {
        if (ctx.ui.phase === 'doing') {
          ctx.toast('正在考试中，先交卷或放弃本次吧');
          return;
        }
        resetExam(ctx.ui);
        ctx.ui.index = Number(target.dataset.index);
        ctx.render();
      },
      start: (target, ctx) => start(ctx),
      pick(target, ctx) {
        if (ctx.ui.phase !== 'doing') return;
        const q = Number(target.dataset.q);
        const option = Number(target.dataset.option);
        ctx.ui.picked[q] = option;
        target.closest('.mcq-options').querySelectorAll('.mcq-option').forEach((button) => {
          button.classList.toggle('is-picked', Number(button.dataset.option) === option);
        });
        document.querySelector('#exam-answered').textContent = Object.keys(ctx.ui.picked).length;
      },
      submit(target, ctx) {
        const exam = current(ctx);
        const unanswered = exam.questions.length - Object.keys(ctx.ui.picked).length;
        if (unanswered > 0 && !window.confirm(`还有 ${unanswered} 题没做，确定交卷吗？`)) return;
        submit(ctx);
      },
      quit(target, ctx) {
        resetExam(ctx.ui);
        ctx.render();
      },
      retry(target, ctx) {
        start(ctx);
      }
    }
  });
}());
