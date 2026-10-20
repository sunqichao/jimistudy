(function () {
  const DAILY_GOAL = 5;

  function dayKey(date) {
    const pad = (value) => String(value).padStart(2, '0');
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
  }

  function yesterdayKey(now) {
    return dayKey(new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1));
  }

  // 记录一次有效学习（答对题、完成任务等）。返回今日目标是否刚好达成。
  function bump(progress, now = new Date()) {
    const streak = progress.streak;
    const today = dayKey(now);
    if (streak.last === today) {
      streak.count += 1;
    } else {
      streak.days = streak.last === yesterdayKey(now) ? streak.days + 1 : 1;
      streak.last = today;
      streak.count = 1;
    }
    return streak.count === DAILY_GOAL;
  }

  // 连续天数只在今天或昨天学过时才有效，否则视为已中断。
  function current(progress, now = new Date()) {
    const streak = progress.streak;
    const today = dayKey(now);
    const alive = streak.last === today || streak.last === yesterdayKey(now);
    return {
      days: alive ? streak.days : 0,
      today: streak.last === today ? streak.count : 0,
      goal: DAILY_GOAL
    };
  }

  window.JIMI.streak = { bump, current, dayKey, DAILY_GOAL };
}());
