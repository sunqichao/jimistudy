// 全局命名空间：学段数据（data/*.js）与功能模块（js/modules/*.js）都在这里注册。
window.JIMI = {
  levelOrder: ['primary', 'middle', 'high', 'university', 'work', 'ai'],
  levels: {},
  modules: {},
  // 词根词缀数据与学段无关：每个条目带 tier（1 初中 / 2 高中 / 3 大学及职场），由学段的 rootsMaxTier 决定可见范围。
  rootsData: [],
  // 往已注册学段的单词表追加词条。行格式：[词, 音标, 词性(可空), 释义, emoji, 例句, 例句翻译(可空)]。
  extendWords(levelId, rows) {
    const words = this.levels[levelId].content.words;
    const colors = ['yellow', 'pink', 'purple', 'blue', 'orange'];
    rows.forEach(([word, ipa, pos, meaning, emoji, example, exampleZh]) => {
      const entry = { word, ipa, meaning, emoji, color: colors[words.length % colors.length], example };
      if (pos) entry.pos = pos;
      if (exampleZh) entry.exampleZh = exampleZh;
      words.push(entry);
    });
  },
  registerLevel(level) {
    this.levels[level.id] = level;
  },
  registerModule(module) {
    this.modules[module.id] = module;
  },
  // 行格式：[id, 类型, tier, 显示形式, 变体, 来源, 含义, 记忆提示, [[词, 释义, 拆分], …]]
  // 拆分用 | 分隔，连字符 - 标明词缀，如 'pre-|view'；各段去掉连字符后拼起来必须等于原词。
  defineRoots(rows) {
    rows.forEach(([id, type, tier, form, variants, origin, meaning, tip, words]) => {
      this.rootsData.push({
        id,
        type,
        tier,
        form,
        variants,
        origin,
        meaning,
        tip,
        words: words.map(([word, wordMeaning, parts]) => ({ word, meaning: wordMeaning, parts: parts.split('|') }))
      });
    });
  }
};
