import React, { useEffect } from "react";
import {
  FaRegTired,      // Ícone abatido
  FaRegFrown,      // Ícone neutro
  FaRegSmile,      // Ícone feliz
  FaMedal,         // Ícone de medalha
  FaCrown          // Ícone da vitória
} from "react-icons/fa";


import { pararAudio } from "../../../utils/audioManager";
import "../../../styles/games/confetti.css"

const CaixaResultado = ({ pontuacao, totalPerguntas, onReiniciar }) => {
  let mensagem = "";
  let icone = null;

  if (pontuacao <= 3) {
    mensagem = "Você começou a trilha! 🚶‍♂️ Que tal tentar de novo com calma?";
    icone = <FaRegTired size={100} color="#e91e63" />;
  } else if (pontuacao <= 5) {
    mensagem = "Boa tentativa! 💪 Continue treinando que vai melhorar!";
    icone = <FaRegFrown size={100} color="#e91e63" />;
  } else if (pontuacao <= 8) {
    mensagem = "Mandou bem! 👏 Você está quase lá!";
    icone = <FaRegSmile size={100} color="#e91e63" />;
  } else if (pontuacao === 9) {
    mensagem = "Quase perfeito! 🥈 Só mais um passo pra glória!";
    icone = <FaMedal size={100} color="#e91e63" />;
  } else if (pontuacao === 10) {
    mensagem = "Perfeito! 👑 Você dominou o CitoQuest!";
    icone = <FaCrown size={100} color="#e91e63" />;
  }

  useEffect(() => {
    if (pontuacao >= 6) {
      const confetes = document.querySelectorAll(".confetti");

      for (let i = 0; i < confetes.length; i++) {
        const confete = confetes[i];
        const tamanho = Math.random() * 0.8 + 0.2;

        confete.animate(
          [
            {
              transform: `translate3d(${(i / confetes.length) * 100}vw,0,0) scale(${tamanho})`,
              opacity: tamanho,
            },
            {
              transform: `translate3d(${(i / confetes.length) * 100 + 10}vw,100vh,0) scale(${tamanho})`,
              opacity: 1,
            },
          ],
          {
            duration: Math.random() * 3000 + 3000,
            iterations: Infinity,
            delay: -(Math.random() * 5000),
          }
        );
      }
    }
  }, [pontuacao]);


  return (
    <div className="modal-overlay">
      {pontuacao >= 6 && (
        <div id="container-confetes" className="container-confetes">
          {[...Array(80)].map((_, i) => (
            <div key={i} className="confetti">
              <div className="girar">
                <div className="inclinado"></div>
              </div>
            </div>
          ))}
        </div>
      )}


      <div className="modal-resultado">
        <div className="icone-resultado">{icone}</div>
        <h2 className="titulo-resultado">Você concluiu o Quiz!</h2>
        <p className="mensagem-feedback">{mensagem}</p>
        <p className="pontuacao-final">
          <strong>{pontuacao}</strong> de <strong>{totalPerguntas}</strong> perguntas.
        </p>
        <div className="botoes-resultado">
          <button
            className="botao-jogar"
            onClick={() => {
              pararAudio();

              // Esconde os confetes se existirem
              const confeteEl = document.getElementById("container-confetes");
              if (confeteEl) confeteEl.style.display = "none";

              onReiniciar();
            }}
          >
            Jogar Novamente
          </button>



          <button className="botao-sair" onClick={() => window.location.reload()}>
            Sair do Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaixaResultado;
