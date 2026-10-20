(function () {
  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (character) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    })[character]);
  }

  function hashString(text) {
    let hash = 2166136261;
    for (let i = 0; i < text.length; i += 1) {
      hash = Math.imul(hash ^ text.charCodeAt(i), 16777619) >>> 0;
    }
    return hash;
  }

  // 固定种子的洗牌：同一道题每次渲染顺序一致，避免点击后选项乱跳。
  function seededShuffle(items, seed) {
    let state = (seed >>> 0) || 1;
    const random = () => {
      state = (Math.imul(state, 1664525) + 1013904223) >>> 0;
      return state / 4294967296;
    };
    const result = items.slice();
    for (let i = result.length - 1; i > 0; i -= 1) {
      const j = Math.floor(random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }

  function pickChoices(correct, pool, seed, count = 3) {
    const distractors = seededShuffle([...new Set(pool)].filter((value) => value !== correct), seed)
      .slice(0, count - 1);
    return seededShuffle([correct, ...distractors], seed + 1);
  }

  window.JIMI.utils = { escapeHtml, hashString, seededShuffle, pickChoices };
}());
