(function () {
  const { escapeHtml } = window.JIMI.utils;

  // 选择题列表：阅读理解和语法练习共用。picked 记录 { 题号: 选项号 }。
  function renderQuestions(questions, picked, action) {
    return questions.map((question, qi) => {
      const chosen = picked[qi];
      const answered = chosen !== undefined;
      const correct = answered && chosen === question.answer;
      return `<div class="mcq ${answered ? (correct ? 'is-correct' : 'is-wrong') : ''}">
        <p class="mcq-question"><span class="mcq-number">${qi + 1}</span><span>${escapeHtml(question.q)}</span></p>
        <div class="mcq-options">${question.options.map((option, oi) => `<button class="mcq-option ${chosen === oi ? (correct ? 'is-correct' : 'is-wrong') : ''}" data-action="${action}" data-q="${qi}" data-option="${oi}" ${correct ? 'disabled' : ''}><b>${String.fromCharCode(65 + oi)}</b><span>${escapeHtml(option)}</span></button>`).join('')}</div>
        ${answered ? `<div class="mcq-explain">${correct ? `✓ 回答正确${question.explain ? ` · ${escapeHtml(question.explain)}` : ''}` : '✗ 再想一想，换个选项试试'}</div>` : ''}
      </div>`;
    }).join('');
  }

  function allCorrect(questions, picked) {
    return questions.every((question, qi) => picked[qi] === question.answer);
  }

  function correctCount(questions, picked) {
    return questions.filter((question, qi) => picked[qi] === question.answer).length;
  }

  window.JIMI.quiz = { renderQuestions, allCorrect, correctCount };
}());
