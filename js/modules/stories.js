(function () {
  const { escapeHtml } = window.JIMI.utils;
  const SCENE_INTERVAL = 2600;

  function stopTimer(ui) {
    if (ui.timer) window.clearInterval(ui.timer);
    ui.timer = null;
  }

  function currentStory(ctx) {
    return ctx.content[ctx.ui.index];
  }

  function finish(ctx, story) {
    if (ctx.markDone(story.id)) {
      ctx.awardStar();
      ctx.bump();
    }
  }

  window.JIMI.registerModule({
    id: 'stories',
    unit: '个动画',
    defaults: {
      icon: '🎬',
      title: '英语小动画',
      nav: '动画',
      kicker: 'STORY TIME · 听说小剧场',
      emoji: '🎬',
      desc: '听故事、看动画、学表达',
      intro: '看可爱的小故事，听简单的英语句子。可以播放语音一起跟读哦！'
    },
    initUI: () => ({ index: 0, scene: 0, timer: null }),
    onLeave: (ctx) => stopTimer(ctx.ui),

    summary(ctx) {
      return { progress: `${ctx.content.length} 个原创小故事` };
    },

    recommend(ctx) {
      const index = ctx.content.findIndex((story) => !ctx.isDone(story.id));
      if (index === -1) return null;
      return {
        focus: '听一个故事',
        title: '用一个小故事练听力',
        description: `看动画、听句子，跟${ctx.level.coach}一起开口说英语。`,
        buttonLabel: '播放故事',
        ui: { index, scene: 0 }
      };
    },

    render(ctx) {
      const story = currentStory(ctx);
      const scene = story.scenes[ctx.ui.scene];
      return {
        pageClass: 'story-page',
        step: `原创英语小动画 · ${ctx.content.length} 个故事`,
        body: `<div class="story-layout">
      <section class="story-player">
        <div class="animation-scene scene-${ctx.ui.index % 3}">
          <div class="scene-sun"></div><div class="scene-cloud cloud-a"></div><div class="scene-cloud cloud-b"></div>
          <div class="scene-ground"></div>
          <div class="scene-character">${scene.picture}</div>
          <div class="scene-prop">${scene.prop}</div>
          <div class="scene-butterfly">🦋</div>
          <div class="scene-caption"><strong>${escapeHtml(scene.line)}</strong><span>${escapeHtml(scene.meaning)}</span></div>
          <span class="scene-number">${ctx.ui.scene + 1} / ${story.scenes.length}</span>
        </div>
        <div class="story-player-controls">
          <button class="round-control" data-action="stories:previous-scene" aria-label="上一幕" ${ctx.ui.scene === 0 ? 'disabled' : ''}>←</button>
          <button class="button button-sun play-story-button" data-action="stories:play">${ctx.ui.timer ? '⏸ 暂停' : '▶ 播放故事'}</button>
          <button class="round-control" data-action="stories:next-scene" aria-label="下一幕">→</button>
          <button class="sound-control" data-action="stories:speak">🔊 跟读</button>
        </div>
        <div class="story-dots">${story.scenes.map((_, index) => `<button class="story-dot ${index === ctx.ui.scene ? 'is-current' : ''}" data-action="stories:select-scene" data-index="${index}" aria-label="第 ${index + 1} 幕"></button>`).join('')}</div>
      </section>
      <aside class="story-list-panel">
        <div class="story-list-heading"><strong>故事盒子</strong><span>轻松听一听 🎧</span></div>
        ${ctx.content.map((item, index) => `<button class="story-list-card ${index === ctx.ui.index ? 'is-selected' : ''}" data-action="stories:select" data-index="${index}">
          <span class="story-cover">${item.cover}</span><span class="story-list-copy"><strong>${escapeHtml(item.title)}</strong><small>${escapeHtml(item.subtitle)} · ${escapeHtml(item.level)}</small></span><span class="story-done">${ctx.isDone(item.id) ? '✓' : '›'}</span>
        </button>`).join('')}
        <div class="original-note">✨ 这些是专为初学小朋友设计的原创英语小故事，不需要跳转到其他网站。</div>
      </aside>
    </div>
    <div class="story-word-note"><span>🗣️</span><div><strong>今天学到的句子</strong><small>${story.scenes.map((item) => escapeHtml(item.line)).join('　·　')}</small></div></div>`
      };
    },

    actions: {
      select(target, ctx) {
        stopTimer(ctx.ui);
        ctx.ui.index = Number(target.dataset.index);
        ctx.ui.scene = 0;
        ctx.render();
      },
      'select-scene'(target, ctx) {
        ctx.ui.scene = Number(target.dataset.index);
        ctx.render();
      },
      speak: (target, ctx) => ctx.speak(currentStory(ctx).scenes[ctx.ui.scene].line, target),
      'previous-scene'(target, ctx) {
        ctx.ui.scene = Math.max(0, ctx.ui.scene - 1);
        ctx.render();
      },
      'next-scene'(target, ctx) {
        const story = currentStory(ctx);
        if (ctx.ui.scene < story.scenes.length - 1) {
          ctx.ui.scene += 1;
        } else {
          ctx.ui.scene = 0;
          finish(ctx, story);
        }
        ctx.render();
      },
      play(target, ctx) {
        if (ctx.ui.timer) {
          stopTimer(ctx.ui);
          ctx.render();
          return;
        }
        ctx.ui.timer = window.setInterval(() => {
          const story = currentStory(ctx);
          if (ctx.ui.scene >= story.scenes.length - 1) {
            stopTimer(ctx.ui);
            finish(ctx, story);
          } else {
            ctx.ui.scene += 1;
            ctx.speak(story.scenes[ctx.ui.scene].line);
          }
          ctx.render();
        }, SCENE_INTERVAL);
        ctx.speak(currentStory(ctx).scenes[ctx.ui.scene].line);
        ctx.render();
      }
    }
  });
}());
