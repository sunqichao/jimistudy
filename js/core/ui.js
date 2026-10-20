(function () {
  const { escapeHtml } = window.JIMI.utils;
  let toastTimer = null;
  let celebrationTimer = null;

  function toast(message) {
    const element = document.querySelector('.toast');
    if (!element) return;
    element.textContent = message;
    element.classList.add('is-visible');
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => element.classList.remove('is-visible'), 2200);
  }

  function celebrate(message = '答对啦！继续加油！', mascot = '🐱') {
    const root = document.querySelector('#app');
    const previous = root.querySelector('.encouragement');
    if (previous) previous.remove();
    window.clearTimeout(celebrationTimer);
    const element = document.createElement('div');
    element.className = 'encouragement';
    element.setAttribute('role', 'status');
    element.setAttribute('aria-live', 'polite');
    element.innerHTML = `<span class="encouragement-sparkle" aria-hidden="true">✨</span><span class="encouragement-kitten" aria-hidden="true">${mascot}</span><strong>${escapeHtml(message)}</strong><span class="encouragement-sparkle" aria-hidden="true">🌟</span>`;
    root.append(element);
    window.requestAnimationFrame(() => element.classList.add('is-visible'));
    celebrationTimer = window.setTimeout(() => element.remove(), 1900);
  }

  window.JIMI.ui = { toast, celebrate };
}());
