// 内容校验：补充课程内容后运行 `node --test tests/`，提前发现格式错误。
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

const root = path.join(__dirname, '..');
const sandbox = { document: {} };
sandbox.window = sandbox;
vm.createContext(sandbox);

// 与 index.html 的脚本顺序保持一致（跳过依赖 DOM 的入口与语音）。
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
[...html.matchAll(/<script src="\.\/([^"]+)"/g)]
  .map((match) => match[1])
  .filter((file) => file !== 'js/app.js' && file !== 'js/core/speech.js')
  .forEach((file) => {
    vm.runInContext(fs.readFileSync(path.join(root, file), 'utf8'), sandbox, { filename: file });
  });

const JIMI = sandbox.JIMI;
const COLORS = ['yellow', 'pink', 'purple', 'blue', 'orange'];
const nonEmpty = (value) => typeof value === 'string' && value.trim().length > 0;

function assertUnique(values, label) {
  assert.equal(new Set(values).size, values.length, `${label} 存在重复`);
}

function checkQuestions(questions, label) {
  assert.ok(questions.length > 0, `${label} 至少需要一道题`);
  questions.forEach((question, index) => {
    const where = `${label} 第 ${index + 1} 题`;
    assert.ok(nonEmpty(question.q), `${where} 缺少题干`);
    assert.ok(question.options.length >= 2, `${where} 至少两个选项`);
    assertUnique(question.options, `${where} 选项`);
    assert.ok(Number.isInteger(question.answer) && question.answer >= 0 && question.answer < question.options.length, `${where} answer 越界`);
  });
}

const checkers = {
  listening() {},
  review() {},
  roots(items, level) {
    assertUnique(items.map((item) => item.id), `${level} 词缀词根 id`);
    assert.ok(items.length >= 15, `${level} 词缀词根数量过少`);
    const strip = (part) => part.replace(/-/g, '').toLowerCase();
    items.forEach((unit) => {
      ['id', 'type', 'form', 'origin', 'meaning', 'tip'].forEach((field) => assert.ok(nonEmpty(unit[field]), `${unit.id} 缺少 ${field}`));
      assert.ok(['prefix', 'suffix', 'root'].includes(unit.type), `${unit.id} type 无效`);
      assert.ok([1, 2, 3].includes(unit.tier), `${unit.id} tier 无效`);
      assert.ok(unit.variants.length > 0, `${unit.id} 缺少 variants`);
      assert.ok(unit.words.length >= 5, `${unit.id} 至少 5 个例词`);
      assertUnique(unit.words.map((word) => word.word), `${unit.id} 例词`);
      assertUnique(unit.words.map((word) => word.meaning), `${unit.id} 例词释义`);
      unit.words.forEach((word) => {
        assert.ok(nonEmpty(word.word) && nonEmpty(word.meaning), `${unit.id} 有例词缺 word/meaning`);
        assert.equal(word.parts.map(strip).join(''), word.word.toLowerCase(), `${unit.id}.${word.word} 的拆分拼起来必须等于原词：${word.parts.join('|')}`);
        assert.ok(word.parts.some((part) => unit.variants.includes(strip(part))), `${unit.id}.${word.word} 的拆分里没有出现 ${unit.variants.join('/')}`);
      });
      assert.equal(unit.questions.length, 3, `${unit.id} 应生成 3 道题`);
      checkQuestions(unit.questions, `${unit.id} 自动题`);
      // 第 3 题的正确答案必须含有该词缀，干扰项不能“看起来”含有它。
      const find = unit.questions[2];
      const lookup = new Map(JIMI.rootsData.flatMap((item) => item.words.map((word) => [word.word, word])));
      find.options.forEach((option, index) => {
        const word = lookup.get(option);
        const has = word.parts.some((part) => unit.variants.includes(strip(part)));
        if (index === find.answer) assert.ok(has, `${unit.id} 第 3 题正确答案 ${option} 不含该词缀`);
        else {
          assert.ok(!has, `${unit.id} 第 3 题干扰项 ${option} 含有该词缀`);
          const text = option.toLowerCase();
          const confusing = unit.variants.some((variant) => (
            unit.type === 'prefix' ? text.startsWith(variant)
              : unit.type === 'suffix' ? text.endsWith(variant)
                : variant.length >= 3 && text.includes(variant)
          ));
          assert.ok(!confusing, `${unit.id} 第 3 题干扰项 ${option} 容易让人误以为含有该词缀`);
        }
      });
    });
  },
  speaking(items, level) {
    assertUnique(items.map((item) => item.id), `${level} 对话 id`);
    items.forEach((dialogue) => {
      ['id', 'title', 'subtitle', 'emoji'].forEach((field) => assert.ok(nonEmpty(dialogue[field]), `${dialogue.id} 缺少 ${field}`));
      assert.equal(dialogue.roles.length, 2, `${dialogue.id} 必须有两个角色`);
      dialogue.roles.forEach((role) => assert.ok(nonEmpty(role), `${dialogue.id} 角色名为空`));
      assert.ok(dialogue.lines.length >= 4, `${dialogue.id} 至少 4 句`);
      dialogue.lines.forEach((line) => {
        assert.ok(line.who === 0 || line.who === 1, `${dialogue.id} 的 who 只能是 0 或 1`);
        assert.ok(nonEmpty(line.en) && nonEmpty(line.zh), `${dialogue.id} 有台词缺 en/zh`);
      });
      [0, 1].forEach((who) => assert.ok(dialogue.lines.some((line) => line.who === who), `${dialogue.id} 角色 ${who} 没有台词`));
    });
  },
  exam(items, level) {
    assertUnique(items.map((item) => item.id), `${level} 套题 id`);
    items.forEach((exam) => {
      ['id', 'title', 'subtitle', 'emoji', 'type'].forEach((field) => assert.ok(nonEmpty(exam[field]), `${exam.id} 缺少 ${field}`));
      assert.ok(Number.isInteger(exam.minutes) && exam.minutes > 0, `${exam.id} minutes 无效`);
      checkQuestions(exam.questions, exam.id);
      if (exam.passage) {
        const text = exam.passage.join(' ');
        exam.questions.forEach((question, index) => {
          assert.ok(text.includes(`(${index + 1})`), `${exam.id} 的短文里缺少空格 (${index + 1})`);
        });
      }
    });
  },
  phonics(items, level) {
    assert.equal(items.length, 26, `${level} 自然拼读应覆盖 26 个字母`);
    assertUnique(items.map((item) => item.id), `${level} 字母 id`);
    assertUnique(items.map((item) => item.words[0].word), `${level} 字母首选单词`);
    items.forEach((item) => {
      ['id', 'letter', 'name', 'sound', 'tip'].forEach((field) => assert.ok(nonEmpty(item[field]), `${item.id} 缺少 ${field}`));
      assert.ok(item.words.length > 0, `${item.id} 至少一个例词`);
      item.words.forEach((word) => assert.ok(nonEmpty(word.word) && nonEmpty(word.meaning) && nonEmpty(word.emoji), `${item.id} 例词缺字段`));
      assert.ok(item.words[0].word.toLowerCase().startsWith(item.id), `${item.id} 的首选例词应以该字母开头`);
    });
  },
  writing(items, level) {
    assertUnique(items.map((item) => item.id), `${level} 写作 id`);
    items.forEach((task) => {
      ['id', 'title', 'subtitle', 'emoji', 'type', 'prompt', 'promptZh', 'sample'].forEach((field) => assert.ok(nonEmpty(task[field]), `${task.id} 缺少 ${field}`));
      assert.ok(Number.isInteger(task.minWords) && task.minWords > 0, `${task.id} minWords 无效`);
      assert.ok(task.phrases.length >= 2, `${task.id} 至少 2 个推荐句型`);
      task.phrases.forEach((phrase) => assert.ok(nonEmpty(phrase.en) && nonEmpty(phrase.zh), `${task.id} 句型缺 en/zh`));
      const result = JIMI.modules.writing.analyze(task.sample, task);
      const failed = result.checks.filter((check) => !check.ok).map((check) => check.label);
      assert.equal(failed.length, 0, `${task.id} 的范文没有通过自己的检查：${failed.join('；')}`);
    });
  },
  words(items, level) {
    assert.ok(items.length >= 3, '单词至少 3 个才能生成选项');
    assertUnique(items.map((item) => item.word), `${level} 单词`);
    assertUnique(items.map((item) => item.meaning), `${level} 单词释义`);
    items.forEach((item) => {
      ['word', 'ipa', 'meaning', 'example'].forEach((field) => assert.ok(nonEmpty(item[field]), `${item.word} 缺少 ${field}`));
      if (item.color) assert.ok(COLORS.includes(item.color), `${item.word} color 无效`);
    });
  },
  sentences(items, level) {
    assertUnique(items.map((item) => item.id), `${level} 句子 id`);
    items.forEach((item) => {
      ['id', 'sentence', 'translation'].forEach((field) => assert.ok(nonEmpty(item[field]), `${item.id} 缺少 ${field}`));
      const words = item.words || item.sentence.split(' ');
      assert.equal(words.join(' '), item.sentence, `${item.id} 的 words 拼起来必须等于 sentence`);
    });
  },
  topics(items, level) {
    assertUnique(items.map((item) => item.id), `${level} 专题 id`);
    items.forEach((topic) => {
      ['id', 'title', 'subtitle', 'emoji', 'sentence', 'translation'].forEach((field) => assert.ok(nonEmpty(topic[field]), `${topic.id} 缺少 ${field}`));
      assert.ok(topic.words.length >= 3, `${topic.id} 至少 3 个单词`);
      assertUnique(topic.words.map((word) => word.meaning), `${topic.id} 单词释义`);
      assert.ok(topic.words.some((word) => word.word === topic.quizWord), `${topic.id} 的 quizWord 不在单词列表中`);
      topic.words.forEach((word) => assert.ok(nonEmpty(word.word) && nonEmpty(word.meaning), `${topic.id} 有单词缺少 word/meaning`));
    });
  },
  stories(items, level) {
    assertUnique(items.map((item) => item.id), `${level} 故事 id`);
    items.forEach((story) => {
      ['id', 'title', 'subtitle', 'level', 'cover'].forEach((field) => assert.ok(nonEmpty(story[field]), `${story.id} 缺少 ${field}`));
      assert.ok(story.scenes.length > 0, `${story.id} 至少一幕`);
      story.scenes.forEach((scene) => ['picture', 'prop', 'line', 'meaning'].forEach((field) => assert.ok(nonEmpty(scene[field]), `${story.id} 场景缺少 ${field}`)));
    });
  },
  reading(items, level) {
    assertUnique(items.map((item) => item.id), `${level} 阅读 id`);
    items.forEach((passage) => {
      ['id', 'title', 'subtitle', 'level', 'cover'].forEach((field) => assert.ok(nonEmpty(passage[field]), `${passage.id} 缺少 ${field}`));
      assert.ok(passage.passage.length > 0, `${passage.id} 没有正文`);
      passage.passage.forEach((line) => assert.ok(nonEmpty(line.en) && nonEmpty(line.zh), `${passage.id} 句子缺少 en/zh`));
      checkQuestions(passage.questions, passage.id);
    });
  },
  grammar(items, level) {
    assertUnique(items.map((item) => item.id), `${level} 语法 id`);
    items.forEach((lesson) => {
      ['id', 'title', 'subtitle', 'emoji', 'summary'].forEach((field) => assert.ok(nonEmpty(lesson[field]), `${lesson.id} 缺少 ${field}`));
      assert.ok(lesson.points.length > 0, `${lesson.id} 至少一个知识点`);
      lesson.points.forEach((point) => {
        assert.ok(nonEmpty(point.rule), `${lesson.id} 知识点缺少 rule`);
        assert.ok(point.examples.length > 0, `${lesson.id} 知识点缺少例句`);
        point.examples.forEach((example) => assert.ok(nonEmpty(example.en) && nonEmpty(example.zh), `${lesson.id} 例句缺少 en/zh`));
      });
      checkQuestions(lesson.exercises, lesson.id);
    });
  }
};

test('六个学段都已注册', () => {
  assert.equal(JSON.stringify(JIMI.levelOrder), JSON.stringify(['primary', 'middle', 'high', 'university', 'work', 'ai']));
  JIMI.levelOrder.forEach((id) => assert.ok(JIMI.levels[id], `缺少学段 ${id}`));
});

JIMI.levelOrder.forEach((id) => {
  test(`${id} 学段结构与内容`, () => {
    const level = JIMI.levels[id];
    ['name', 'stage', 'ageRange', 'emoji', 'avatar', 'mascot', 'coach', 'sentenceLead', 'tagline'].forEach((field) => assert.ok(nonEmpty(level[field]), `缺少 ${field}`));
    ['eyebrow', 'greeting', 'copy', 'dateIcon', 'dateTitle', 'dateSub', 'heroLead', 'footnote', 'bubble', 'route'].forEach((field) => assert.ok(nonEmpty(level.home[field]), `home.${field} 缺失`));
    assert.ok(level.modules.length > 0);
    assertUnique(level.modules, `${id} modules`);
    level.modules.forEach((moduleId) => {
      assert.ok(JIMI.modules[moduleId], `${id} 引用了未注册模块 ${moduleId}`);
      const items = JIMI.modules[moduleId].contentFrom ? JIMI.modules[moduleId].contentFrom(level) : (level.content[moduleId] || []);
      assert.ok(Array.isArray(items), `${id}.${moduleId} 必须是数组`);
      checkers[moduleId](items, id);
    });
    Object.keys(level.content).forEach((moduleId) => assert.ok(level.modules.includes(moduleId), `${id} 有内容但未启用模块 ${moduleId}`));
    (level.planned || []).forEach((item) => {
      assert.ok(!level.modules.includes(item.id), `${item.id} 不能既是启用模块又是占位模块`);
      ['id', 'icon', 'title', 'desc'].forEach((field) => assert.ok(nonEmpty(item[field]), `planned.${field} 缺失`));
    });
  });
});

test('模块暴露统一接口', () => {
  Object.values(JIMI.modules).forEach((module) => {
    assert.ok(nonEmpty(module.id) && nonEmpty(module.unit));
    ['icon', 'title', 'nav', 'kicker', 'emoji', 'desc', 'intro'].forEach((field) => assert.ok(nonEmpty(module.defaults[field]), `${module.id}.defaults.${field}`));
    assert.equal(typeof module.render, 'function');
    assert.equal(typeof module.summary, 'function');
    assert.equal(typeof module.actions, 'object');
  });
});

test('v1 进度迁移到小学学段', () => {
  const store = new Map([
    ['xiaoxue-en-progress-v1', JSON.stringify({
      stars: 5,
      wordsLearned: ['hello', 'cat', 'ghost'],
      sentencesDone: ['see-cat'],
      storiesWatched: ['apple-day'],
      courseLessonsDone: ['colors'],
      wordReviews: { cat: { dueAt: 100, correctStreak: 1, intervalDays: 1 }, ghost: { dueAt: 1, correctStreak: 0, intervalDays: 0 } }
    })]
  ]);
  sandbox.window.localStorage = {
    getItem: (key) => (store.has(key) ? store.get(key) : null),
    setItem: (key, value) => store.set(key, value)
  };
  const { progress, unavailable } = JIMI.storage.load();
  assert.equal(unavailable, false);
  assert.equal(progress.level, 'primary');
  assert.equal(progress.stars, 5);
  const primary = progress.levels.primary;
  assert.deepEqual(JSON.parse(JSON.stringify(primary.done)), { sentences: ['see-cat'], stories: ['apple-day'], topics: ['colors'] });
  assert.ok(primary.wordReviews.cat && !primary.wordReviews.ghost, '未知单词的复习记录应被丢弃');
  assert.ok(store.has('xiaoxue-en-progress-v2'));
});

test('连续学习天数与每日目标', () => {
  const { bump, current } = JIMI.streak;
  const progress = JIMI.storage.freshProgress();
  const day = (d, h = 10) => new Date(2026, 9, d, h);
  for (let i = 0; i < 4; i += 1) assert.equal(bump(progress, day(10)), false);
  assert.equal(bump(progress, day(10)), true, '第 5 次应达成今日目标');
  assert.equal(bump(progress, day(10)), false, '超过目标不再重复提示');
  assert.equal(current(progress, day(10)).days, 1);
  bump(progress, day(11));
  assert.equal(current(progress, day(11)).days, 2, '次日继续学习，连续天数 +1');
  assert.equal(current(progress, day(11)).today, 1);
  assert.equal(current(progress, day(12)).days, 2, '隔了一天还没学，连续天数暂时保留');
  assert.equal(current(progress, day(13)).days, 0, '漏学超过一天，连续天数中断');
  bump(progress, day(13));
  assert.equal(current(progress, day(13)).days, 1, '中断后重新计数');
  assert.equal(current(progress, new Date(2026, 10, 1)).days, 0);
  const month = JIMI.streak.dayKey(new Date(2026, 0, 1));
  assert.equal(month, '2026-01-01');
  assert.equal(bump({ streak: { days: 3, last: '2026-02-28', count: 1 } }, new Date(2026, 2, 1)), false);
});

test('写作自动检查能识别不合格的短文', () => {
  const task = JIMI.levels.high.content.writing[0];
  const result = JIMI.modules.writing.analyze('hello world', task);
  assert.equal(result.passed, false);
  assert.equal(result.checks.filter((check) => check.ok).length, 0);
  assert.equal(JIMI.modules.writing.analyze('', task).words, 0);
});

test('新进度结构的读写：连续天数与写作草稿', () => {
  const store = new Map();
  sandbox.window.localStorage = {
    getItem: (key) => (store.has(key) ? store.get(key) : null),
    setItem: (key, value) => store.set(key, value)
  };
  const progress = JIMI.storage.freshProgress();
  progress.level = 'high';
  progress.streak = { days: 4, last: '2026-10-16', count: 2 };
  progress.levels.high = JIMI.storage.emptyLevelProgress();
  progress.levels.high.drafts['invitation-letter'] = 'Dear Mr. Smith,';
  assert.equal(JIMI.storage.save(progress), true);
  const loaded = JIMI.storage.load();
  assert.equal(loaded.unavailable, false);
  assert.equal(loaded.progress.streak.days, 4);
  assert.equal(loaded.progress.levels.high.drafts['invitation-letter'], 'Dear Mr. Smith,');

  store.set('xiaoxue-en-progress-v2', JSON.stringify({
    version: 2, level: 'high', stars: 1,
    streak: { days: -3, last: 'yesterday', count: 'x' },
    levels: { high: { drafts: { a: 5, b: 'ok' } } }
  }));
  const dirty = JIMI.storage.load().progress;
  assert.equal(JSON.stringify(dirty.streak), JSON.stringify({ days: 0, last: '', count: 0 }), '坏的连续天数数据应被重置');
  assert.equal(JSON.stringify(dirty.levels.high.drafts), JSON.stringify({ b: 'ok' }), '非字符串草稿应被丢弃');
});

test('错题记录读写时会剔除非法数据', () => {
  const store = new Map();
  sandbox.window.localStorage = {
    getItem: (key) => (store.has(key) ? store.get(key) : null),
    setItem: (key, value) => store.set(key, value)
  };
  store.set('xiaoxue-en-progress-v2', JSON.stringify({
    version: 2, level: 'middle', stars: 0,
    levels: {
      middle: {
        mistakes: {
          'grammar:past-simple:1': { module: 'grammar', itemId: 'past-simple', index: 1 },
          'grammar:past-simple:2': { module: 'grammar', itemId: 'other', index: 2 },
          'reading:x:-1': { module: 'reading', itemId: 'x', index: -1 },
          bad: 'oops'
        }
      }
    }
  }));
  const mistakes = JIMI.storage.load().progress.levels.middle.mistakes;
  assert.equal(JSON.stringify(Object.keys(mistakes)), JSON.stringify(['grammar:past-simple:1']));
});

test('模拟考试评分：未作答按答错，60% 通过', () => {
  const questions = [0, 1, 2, 3, 4].map((answer) => ({ q: 'q', options: ['a', 'b', 'c', 'd', 'e'], answer }));
  const grade = JIMI.modules.exam.grade;
  const three = grade(questions, { 0: 0, 1: 1, 2: 2 });
  assert.equal(three.score, 3);
  assert.equal(three.passed, true, '3/5 刚好 60%，应通过');
  const two = grade(questions, { 0: 0, 1: 1, 2: 0 });
  assert.equal(two.passed, false);
  assert.equal(two.details[4].correct, false, '未作答应按答错');
  assert.equal(two.details[4].picked, undefined);
});

test('考试成绩读写并剔除非法数据', () => {
  const store = new Map();
  sandbox.window.localStorage = {
    getItem: (key) => (store.has(key) ? store.get(key) : null),
    setItem: (key, value) => store.set(key, value)
  };
  store.set('xiaoxue-en-progress-v2', JSON.stringify({
    version: 2, level: 'high', stars: 0,
    levels: { high: { scores: { ok: { best: 4, total: 5 }, over: { best: 9, total: 5 }, zero: { best: 0, total: 0 }, bad: 'x' } } }
  }));
  const scores = JIMI.storage.load().progress.levels.high.scores;
  assert.equal(JSON.stringify(Object.keys(scores)), JSON.stringify(['ok']));
});

test('跟读相似度：忽略大小写与标点，重复词只算一次', () => {
  const { similarity } = JIMI.recognition;
  assert.equal(similarity('Nice to meet you, too.', 'nice to meet you too').score, 1);
  const partial = similarity('I like apples.', 'I like');
  assert.equal(partial.score.toFixed(2), '0.67');
  assert.equal(JSON.stringify(partial.missing), JSON.stringify(['apples']));
  assert.equal(similarity('very very good', 'very good').score.toFixed(2), '0.67', '重复词不能被一个词匹配两次');
  assert.equal(similarity('I’d like a bowl', 'i\'d like a bowl').score, 1, '弯引号和直引号等价');
  assert.equal(similarity('Hello', '').score, 0);
  assert.equal(similarity('', 'anything').score, 0);
  assert.equal(JIMI.recognition.supported, false);
});

test('错题能对应到真实题目', () => {
  JIMI.levelOrder.forEach((id) => {
    ['grammar', 'reading', 'exam'].forEach((moduleId) => {
      (JIMI.levels[id].content[moduleId] || []).forEach((group) => {
        const questions = group.questions || group.exercises;
        assert.ok(questions.length > 0, `${id}.${group.id} 没有题目，无法进入错题本`);
      });
    });
  });
});

test('词缀词根：各学段可见范围逐级增加，且每个词缀词根全局唯一', () => {
  const count = (id) => JIMI.modules.roots.contentFrom(JIMI.levels[id]).length;
  assert.ok(count('middle') < count('high') && count('high') < count('university'), '范围应逐级增加');
  assert.equal(count('university'), JIMI.rootsData.length, '大学应看到全部');
  assert.equal(count('work'), JIMI.rootsData.length, '职场应看到全部');
  assert.equal(JIMI.levels.primary.modules.includes('roots'), false, '小学不启用词根词缀');
  assertUnique(JIMI.rootsData.map((unit) => unit.id), '全部词缀词根 id');
});

test('词缀词根自动出题：同一学段多次生成结果一致（错题记录依赖题号稳定）', () => {
  const first = JIMI.modules.roots.contentFrom(JIMI.levels.high);
  const again = JIMI.modules.roots.buildQuestions(first[3], first);
  assert.equal(JSON.stringify(again), JSON.stringify(first[3].questions));
});
