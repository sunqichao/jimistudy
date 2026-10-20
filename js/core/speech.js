(function () {
  const PREFERRED_VOICES = ['Samantha', 'Flo (英语（美国）)', 'Flo', 'Eddy (英语（美国）)', 'Ava', 'Google US English'];
  let activeButton = null;
  let requestId = 0;

  function getVoices() {
    const synthesis = window.speechSynthesis;
    const current = synthesis.getVoices();
    if (current.length) return Promise.resolve(current);
    return new Promise((resolve) => {
      const finish = () => {
        const voices = synthesis.getVoices();
        if (!voices.length) return;
        window.clearTimeout(timeout);
        synthesis.removeEventListener('voiceschanged', finish);
        resolve(voices);
      };
      const timeout = window.setTimeout(() => {
        synthesis.removeEventListener('voiceschanged', finish);
        resolve(synthesis.getVoices());
      }, 1200);
      synthesis.addEventListener('voiceschanged', finish);
    });
  }

  function pickVoice(voices) {
    return PREFERRED_VOICES
      .map((name) => voices.find((voice) => voice.name.toLowerCase() === name.toLowerCase()))
      .find(Boolean)
      || voices.find((voice) => voice.lang.toLowerCase() === 'en-us' && voice.localService)
      || voices.find((voice) => voice.lang.toLowerCase().startsWith('en-'))
      || null;
  }

  function stopHighlight() {
    if (activeButton) activeButton.classList.remove('is-speaking');
    activeButton = null;
  }

  function cancel() {
    requestId += 1;
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    stopHighlight();
  }

  async function speak(text, button, options = {}) {
    if (!('speechSynthesis' in window)) {
      window.JIMI.ui.toast('这个浏览器暂不支持语音朗读');
      return;
    }
    const current = ++requestId;
    stopHighlight();
    window.speechSynthesis.cancel();
    const voices = await getVoices();
    if (current !== requestId || (button && !button.isConnected)) return;
    const utterance = new window.SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = options.rate || 0.85;
    utterance.pitch = options.pitch || 1;
    utterance.volume = 1;
    utterance.voice = pickVoice(voices);
    if (button) {
      activeButton = button;
      button.classList.add('is-speaking');
      utterance.addEventListener('end', () => {
        button.classList.remove('is-speaking');
        if (activeButton === button) activeButton = null;
      });
      utterance.addEventListener('error', (event) => {
        button.classList.remove('is-speaking');
        if (activeButton === button) activeButton = null;
        if (event.error !== 'canceled' && event.error !== 'interrupted') {
          window.JIMI.ui.toast('语音播放失败，请再试一次');
        }
      });
    }
    window.speechSynthesis.speak(utterance);
  }

  window.JIMI.speech = { speak, cancel };
}());
