(function () {
  const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  const tokens = (text) => text.toLowerCase()
    .replace(/[’‘]/g, "'")
    .replace(/[^a-z0-9'\s-]/g, ' ')
    .split(/\s+/)
    .filter(Boolean);

  // 目标句里的每个词只能匹配一次，返回命中比例和没读到的词。
  function similarity(target, spoken) {
    const wanted = tokens(target);
    const heard = tokens(spoken);
    if (!wanted.length) return { score: 0, missing: [] };
    const pool = new Map();
    heard.forEach((word) => pool.set(word, (pool.get(word) || 0) + 1));
    const missing = [];
    let hit = 0;
    wanted.forEach((word) => {
      if (pool.get(word) > 0) {
        pool.set(word, pool.get(word) - 1);
        hit += 1;
      } else {
        missing.push(word);
      }
    });
    return { score: hit / wanted.length, missing };
  }

  const supported = Boolean(Recognition);
  let active = null;

  function stop() {
    if (active) {
      active.onresult = null;
      active.onerror = null;
      active.onend = null;
      try { active.abort(); } catch (error) { /* 已经停止 */ }
    }
    active = null;
  }

  // 回调：onResult(文本) / onError(错误码) / onEnd()
  function listen({ onResult, onError, onEnd }) {
    if (!supported) {
      onError('unsupported');
      return;
    }
    stop();
    const recognition = new Recognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 3;
    recognition.onresult = (event) => {
      const alternatives = Array.from(event.results[0] || []).map((item) => item.transcript);
      onResult(alternatives);
    };
    recognition.onerror = (event) => onError(event.error);
    recognition.onend = () => {
      if (active === recognition) active = null;
      onEnd();
    };
    active = recognition;
    try {
      recognition.start();
    } catch (error) {
      active = null;
      onError('start-failed');
    }
  }

  window.JIMI.recognition = { supported, listen, stop, similarity };
}());
