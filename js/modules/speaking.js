(function () {
  const { escapeHtml } = window.JIMI.utils;
  const recognition = window.JIMI.recognition;
  const GOOD_SCORE = 0.7;
  const idleAttempt = () => ({ status: 'idle', heard: '', score: 0, missing: [] });

  const current = (ctx) => ctx.content[ctx.ui.index % ctx.content.length];
  const lineOf = (ctx) => current(ctx).lines[ctx.ui.step];

  function resetDialogue(ctx) {
    recognition.stop();
    Object.assign(ctx.ui, { step: 0, results: {}, attempt: idleAttempt(), finished: false });
  }

  // 轮到对方时自动读出对方的台词。
  function autoplay(ctx) {
    if (ctx.ui.finished) return;
    const line = lineOf(ctx);
    if (line && line.who !== ctx.ui.role) ctx.speak(line.en, null, { rate: 0.85 });
  }

  function advance(ctx) {
    recognition.stop();
    const { ui } = ctx;
    const dialogue = current(ctx);
    const line = lineOf(ctx);
    if (line.who === ui.role) ui.results[ui.step] = ui.attempt.score >= GOOD_SCORE ? 'good' : 'self';
    ui.attempt = idleAttempt();
    ui.step += 1;
    if (ui.step >= dialogue.lines.length) {
      ui.finished = true;
      const firstTime = ctx.markDone(dialogue.id);
      if (firstTime) ctx.awardStar();
      ctx.bump();
      ctx.render();
      ctx.celebrate('对话练完啦！');
      return;
    }
    ctx.render();
    autoplay(ctx);
  }

  const ERRORS = {
    'not-allowed': '没有麦克风权限，请在浏览器地址栏里允许使用麦克风，或直接点“我读好了”。',
    'service-not-allowed': '浏览器不允许使用语音识别，请直接点“我读好了”。',
    'no-speech': '没听到声音，再试一次吧。',
    'audio-capture': '没有找到麦克风。',
    network: '语音识别需要联网，请稍后再试，或直接点“我读好了”。',
    unsupported: '当前浏览器不支持语音识别。'
  };

  function conversationHtml(ctx, dialogue) {
    const { ui } = ctx;
    const shown = dialogue.lines.slice(0, ui.finished ? dialogue.lines.length : ui.step + 1);
    return `<div class="dialogue">${shown.map((line, index) => {
      const mine = line.who === ui.role;
      const isCurrent = !ui.finished && index === ui.step;
      const result = ui.results[index];
      return `<div class="bubble-row ${line.who === 0 ? 'is-left' : 'is-right'} ${isCurrent ? 'is-current' : ''}">
        <span class="bubble-name">${escapeHtml(dialogue.roles[line.who])}${mine ? ' · 你' : ''}</span>
        <div class="bubble ${mine ? 'is-mine' : ''}">
          <button class="line-sound" data-action="speaking:play-line" data-index="${index}" aria-label="听这句">🔊</button>
          <span><span class="reading-en">${escapeHtml(line.en)}</span><span class="reading-zh">${escapeHtml(line.zh)}</span></span>
          ${result ? `<em class="bubble-badge ${result}">${result === 'good' ? '读得不错' : '已跟读'}</em>` : ''}
        </div>
      </div>`;
    }).join('')}</div>`;
  }

  function controlsHtml(ctx) {
    const { ui } = ctx;
    const line = lineOf(ctx);
    if (line.who !== ui.role) {
      return `<div class="speak-controls"><span class="speak-hint">对方在说话，听完点继续。</span>
        <button class="button button-quiet" data-action="speaking:listen">🔊 再听一遍</button>
        <button class="button button-coral" data-action="speaking:next">继续 <span>→</span></button></div>`;
    }
    const attempt = ui.attempt;
    let result = '';
    if (attempt.status === 'done') {
      const good = attempt.score >= GOOD_SCORE;
      result = `<div class="speak-result ${good ? 'is-good' : 'is-retry'}">
          <strong>${good ? '读得不错！' : '再试一次？'}</strong>
          <span>匹配度 ${Math.round(attempt.score * 100)}%</span>
          <small>听到：${escapeHtml(attempt.heard)}</small>
          ${attempt.missing.length ? `<small>没听清的词：${escapeHtml(attempt.missing.join('、'))}</small>` : ''}
        </div>`;
    } else if (attempt.status === 'error') {
      result = `<div class="speak-result is-retry"><small>${escapeHtml(ERRORS[attempt.error] || '语音识别出错了，请再试一次，或直接点“我读好了”。')}</small></div>`;
    }
    const listening = attempt.status === 'listening';
    const mic = recognition.supported
      ? `<button class="button button-sun ${listening ? 'is-listening' : ''}" data-action="speaking:record" ${listening ? 'disabled' : ''}>${listening ? '🎙 正在听…' : '🎤 开始跟读'}</button>`
      : '';
    return `<div class="speak-prompt">轮到你了：先听示范，再大声读出来。</div>
      ${result}
      <div class="speak-controls">
        <button class="button button-quiet" data-action="speaking:listen">🔊 听示范</button>
        ${mic}
        <button class="button button-coral" data-action="speaking:next">我读好了 <span>✓</span></button>
      </div>
      <p class="speak-note">${recognition.supported ? '语音识别由浏览器提供，音频可能会发送给浏览器服务商处理；不想用可以直接点“我读好了”。' : '当前浏览器不支持语音识别（推荐 Chrome / Edge）。大声跟读后点“我读好了”即可。'}</p>`;
  }

  function finishedHtml(ctx, dialogue) {
    const mine = dialogue.lines.map((line, index) => ({ line, index })).filter((item) => item.line.who === ctx.ui.role);
    const good = mine.filter((item) => ctx.ui.results[item.index] === 'good').length;
    return `<div class="speak-finish"><strong>🎉 这段对话练完了！</strong>
      <span>你读了 ${mine.length} 句${recognition.supported ? `，其中 ${good} 句被识别为“读得不错”` : ''}。换个角色再练一遍，会有不一样的收获。</span>
      <div class="speak-controls"><button class="button button-quiet" data-action="speaking:restart">再练一次</button>
      <button class="button button-coral" data-action="speaking:swap">换个角色 <span>⇄</span></button></div></div>`;
  }

  window.JIMI.registerModule({
    id: 'speaking',
    unit: '段对话',
    defaults: {
      icon: '🗣️',
      title: '口语跟读',
      nav: '口语',
      kicker: 'SPEAKING',
      emoji: '🗣️',
      desc: '扮演角色，和朗读的对方对话',
      intro: '选一段情景对话和一个角色：对方的台词会自动朗读，轮到你时大声跟读。'
    },
    initUI: () => ({ index: 0, role: 1, step: 0, results: {}, attempt: idleAttempt(), finished: false }),
    onLeave: () => recognition.stop(),

    summary(ctx) {
      return { progress: `${ctx.doneCount()} / ${ctx.content.length} 段对话` };
    },

    recommend(ctx) {
      const index = ctx.content.findIndex((dialogue) => !ctx.isDone(dialogue.id));
      if (index === -1) return null;
      return {
        focus: '练一段对话',
        title: '开口说一段英语',
        description: `《${ctx.content[index].title}》：对方的台词会朗读，你来跟读自己的部分。`,
        buttonLabel: '去开口',
        ui: { index, role: 1, step: 0, results: {}, attempt: idleAttempt(), finished: false }
      };
    },

    render(ctx) {
      const dialogue = current(ctx);
      return {
        pageClass: 'speaking-page',
        step: `${ctx.labels.title} · ${ctx.content.length} ${ctx.labels.unit}`,
        progress: ctx.ui.finished ? 100 : (ctx.ui.step / dialogue.lines.length) * 100,
        body: `<div class="course-grid" aria-label="选择对话">
      ${ctx.content.map((entry, index) => `<button class="course-tile ${entry.color || 'blue'} ${index === ctx.ui.index ? 'is-selected' : ''}" data-action="speaking:select" data-index="${index}">
        <span class="course-tile-emoji">${entry.emoji}</span><strong>${escapeHtml(entry.title)}</strong><small>${escapeHtml(entry.subtitle)}</small><span class="course-tile-done">${ctx.isDone(entry.id) ? '✓ 已练过' : `${entry.lines.length} 句`}</span>
      </button>`).join('')}
    </div>
    <div class="role-picker"><span>我扮演：</span>${dialogue.roles.map((name, who) => `<button class="mode-tab ${ctx.ui.role === who ? 'is-active' : ''}" data-action="speaking:role" data-role="${who}">${escapeHtml(name)}</button>`).join('')}</div>
    <section class="speaking-card">
      ${conversationHtml(ctx, dialogue)}
      <div class="speak-panel">${ctx.ui.finished ? finishedHtml(ctx, dialogue) : controlsHtml(ctx)}</div>
    </section>`
      };
    },

    actions: {
      select(target, ctx) {
        ctx.ui.index = Number(target.dataset.index);
        resetDialogue(ctx);
        ctx.render();
        autoplay(ctx);
      },
      role(target, ctx) {
        ctx.ui.role = Number(target.dataset.role);
        resetDialogue(ctx);
        ctx.render();
        autoplay(ctx);
      },
      restart(target, ctx) {
        resetDialogue(ctx);
        ctx.render();
        autoplay(ctx);
      },
      swap(target, ctx) {
        ctx.ui.role = ctx.ui.role === 0 ? 1 : 0;
        resetDialogue(ctx);
        ctx.render();
        autoplay(ctx);
      },
      listen: (target, ctx) => ctx.speak(lineOf(ctx).en, target, { rate: 0.8 }),
      'play-line': (target, ctx) => ctx.speak(current(ctx).lines[Number(target.dataset.index)].en, target, { rate: 0.85 }),
      record(target, ctx) {
        const line = lineOf(ctx);
        ctx.ui.attempt = { ...idleAttempt(), status: 'listening' };
        ctx.render();
        let settled = false;
        recognition.listen({
          onResult(alternatives) {
            const best = alternatives
              .map((heard) => ({ heard, ...recognition.similarity(line.en, heard) }))
              .sort((first, second) => second.score - first.score)[0];
            settled = true;
            ctx.ui.attempt = best ? { status: 'done', heard: best.heard, score: best.score, missing: best.missing } : idleAttempt();
          },
          onError(code) {
            settled = true;
            ctx.ui.attempt = { ...idleAttempt(), status: 'error', error: code };
          },
          onEnd() {
            if (!settled) ctx.ui.attempt = { ...idleAttempt(), status: 'error', error: 'no-speech' };
            ctx.render();
          }
        });
      },
      next: (target, ctx) => advance(ctx)
    }
  });
}());
