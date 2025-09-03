let audioAtual = null;

export const tocarAudio = (caminho, loop = false) => {
  if (audioAtual) {
    audioAtual.pause();
    audioAtual.currentTime = 0;
  }

  audioAtual = new Audio(caminho);
  audioAtual.loop = loop;
  audioAtual.play();
};

export const pararAudio = () => {
  if (audioAtual) {
    audioAtual.pause();
    audioAtual.currentTime = 0;
    audioAtual = null;
  }
};
