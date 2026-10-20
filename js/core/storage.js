(function () {
  const KEY = 'xiaoxue-en-progress-v2';
  const LEGACY_KEY = 'xiaoxue-en-progress-v1';

  const isObject = (value) => Boolean(value) && typeof value === 'object' && !Array.isArray(value);
  const stringList = (value) => (
    Array.isArray(value) ? [...new Set(value.filter((item) => typeof item === 'string'))] : []
  );

  function emptyLevelProgress() {
    return { wordsLearned: [], wordReviews: {}, done: {}, drafts: {}, mistakes: {}, scores: {} };
  }

  // 模拟考试的最好成绩：{ 套题id: { best, total } }。
  function normalizeScores(scores) {
    if (!isObject(scores)) return {};
    return Object.entries(scores).reduce((result, [id, value]) => {
      if (isObject(value) && Number.isInteger(value.best) && Number.isInteger(value.total)
        && value.total > 0 && value.best >= 0 && value.best <= value.total) {
        result[id] = { best: value.best, total: value.total };
      }
      return result;
    }, {});
  }

  const MAX_MISTAKES = 200;

  // 错题以 "模块:题组id:题号" 为键，只保留结构合法的记录。
  function normalizeMistakes(mistakes) {
    if (!isObject(mistakes)) return {};
    const result = {};
    Object.entries(mistakes).slice(0, MAX_MISTAKES).forEach(([key, value]) => {
      if (isObject(value) && typeof value.module === 'string' && typeof value.itemId === 'string'
        && Number.isInteger(value.index) && value.index >= 0
        && key === `${value.module}:${value.itemId}:${value.index}`) {
        result[key] = { module: value.module, itemId: value.itemId, index: value.index };
      }
    });
    return result;
  }

  function freshProgress() {
    return { version: 2, level: null, stars: 0, streak: { days: 0, last: '', count: 0 }, levels: {} };
  }

  const MAX_DRAFT_LENGTH = 5000;

  function normalizeDrafts(drafts) {
    if (!isObject(drafts)) return {};
    return Object.entries(drafts).reduce((normalized, [id, text]) => {
      if (typeof text === 'string' && text) normalized[id] = text.slice(0, MAX_DRAFT_LENGTH);
      return normalized;
    }, {});
  }

  function normalizeStreak(raw) {
    const streak = { days: 0, last: '', count: 0 };
    if (!isObject(raw)) return streak;
    if (Number.isInteger(raw.days) && raw.days >= 0) streak.days = raw.days;
    if (typeof raw.last === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(raw.last)) streak.last = raw.last;
    if (Number.isInteger(raw.count) && raw.count >= 0) streak.count = raw.count;
    return streak;
  }

  function normalizeReviews(reviews, words) {
    if (!isObject(reviews)) return {};
    const known = new Set(words.map((item) => item.word));
    return Object.entries(reviews).reduce((normalized, [word, review]) => {
      if (!known.has(word) || !isObject(review)
        || !Number.isFinite(review.dueAt) || review.dueAt < 0
        || !Number.isInteger(review.correctStreak) || review.correctStreak < 0
        || !Number.isInteger(review.intervalDays) || review.intervalDays < 0) {
        return normalized;
      }
      normalized[word] = {
        dueAt: review.dueAt,
        correctStreak: review.correctStreak,
        intervalDays: review.intervalDays
      };
      return normalized;
    }, {});
  }

  function normalizeLevelProgress(raw, level) {
    const source = isObject(raw) ? raw : {};
    const done = {};
    if (isObject(source.done)) {
      Object.entries(source.done).forEach(([moduleId, ids]) => { done[moduleId] = stringList(ids); });
    }
    return {
      wordsLearned: stringList(source.wordsLearned),
      wordReviews: normalizeReviews(source.wordReviews, (level.content && level.content.words) || []),
      done,
      drafts: normalizeDrafts(source.drafts),
      mistakes: normalizeMistakes(source.mistakes),
      scores: normalizeScores(source.scores)
    };
  }

  function normalize(raw) {
    if (!isObject(raw) || raw.version !== 2
      || !Number.isInteger(raw.stars) || raw.stars < 0
      || !isObject(raw.levels)) {
      return null;
    }
    const progress = freshProgress();
    progress.stars = raw.stars;
    progress.streak = normalizeStreak(raw.streak);
    Object.entries(raw.levels).forEach(([id, value]) => {
      if (window.JIMI.levels[id]) progress.levels[id] = normalizeLevelProgress(value, window.JIMI.levels[id]);
    });
    progress.level = window.JIMI.levels[raw.level] ? raw.level : null;
    return progress;
  }

  // v1 只有一年级内容：整体迁移到小学学段。
  function migrateLegacy(raw) {
    if (!isObject(raw)
      || !Number.isInteger(raw.stars) || raw.stars < 0
      || !Array.isArray(raw.wordsLearned)
      || !Array.isArray(raw.sentencesDone)
      || !Array.isArray(raw.storiesWatched)
      || !window.JIMI.levels.primary) {
      return null;
    }
    const progress = freshProgress();
    progress.level = 'primary';
    progress.stars = raw.stars;
    progress.levels.primary = normalizeLevelProgress({
      wordsLearned: raw.wordsLearned,
      wordReviews: raw.wordReviews,
      done: {
        sentences: raw.sentencesDone,
        stories: raw.storiesWatched,
        topics: raw.courseLessonsDone
      }
    }, window.JIMI.levels.primary);
    return progress;
  }

  function save(progress) {
    try {
      window.localStorage.setItem(KEY, JSON.stringify(progress));
      return true;
    } catch (error) {
      return false;
    }
  }

  function load() {
    try {
      const saved = window.localStorage.getItem(KEY);
      if (saved) {
        const progress = normalize(JSON.parse(saved));
        return progress ? { progress, unavailable: false } : { progress: freshProgress(), unavailable: true };
      }
      const legacy = window.localStorage.getItem(LEGACY_KEY);
      if (legacy) {
        const progress = migrateLegacy(JSON.parse(legacy));
        if (progress) {
          save(progress);
          return { progress, unavailable: false };
        }
        return { progress: freshProgress(), unavailable: true };
      }
      return { progress: freshProgress(), unavailable: false };
    } catch (error) {
      return { progress: freshProgress(), unavailable: true };
    }
  }

  window.JIMI.storage = { load, save, emptyLevelProgress, freshProgress };
}());
