import React, { useEffect } from "react";
import {
  FaRegTired,
  FaRegFrown,
  FaRegSmile,
  FaMedal,
  FaCrown
} from "react-icons/fa";

import { pararAudio } from "../../../utils/audioManager";
import "../../../styles/games/confetti.css";

const CaixaResultadoMultiplayer = ({ pontuacao, totalPerguntas, onReiniciar, nomeJogador1 = "Jogador 1", nomeJogador2 = "Jogador 2" }) => {

  const { jogador1, jogador2 } = pontuacao;

  // Determinar vencedor
  let vencedor = "";
  if (jogador1 > jogador2) vencedor = nomeJogador1;
  else if (jogador2 > jogador1) vencedor = nomeJogador2;
  else vencedor = "Empate";


  // Pontuação do vencedor (ou média em caso de empate)
  const pontuacaoVencedor = vencedor === "Empate" ? Math.round((jogador1 + jogador2) / 2) :
    vencedor === "Jogador 1" ? jogador1 : jogador2;

  // Mensagem e ícone com base na pontuação do vencedor
  let mensagem = "";
  let icone = null;

  if (pontuacaoVencedor <= 3) {
    mensagem = "Início de jornada! Bora tentar de novo! 🚶‍♂️";
    icone = <FaRegTired size={100} color="#e91e63" />;
  } else if (pontuacaoVencedor <= 5) {
    mensagem = "Quase lá! Continue treinando! 💪";
    icone = <FaRegFrown size={100} color="#e91e63" />;
  } else if (pontuacaoVencedor <= 8) {
    mensagem = "Muito bem! Você foi longe! 👏";
    icone = <FaRegSmile size={100} color="#e91e63" />;
  } else if (pontuacaoVencedor === 9) {
    mensagem = "Quase perfeito! 🥈 Faltou só um!";
    icone = <FaMedal size={100} color="#e91e63" />;
  } else if (pontuacaoVencedor === 10) {
    mensagem = "Perfeito! 👑 CitoQuest dominado!";
    icone = <FaCrown size={100} color="#e91e63" />;
  }

  // Confetes
  useEffect(() => {
    if (pontuacaoVencedor >= 6) {
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
  }, [pontuacaoVencedor]);

  return (
    <div className="modal-overlay">
      {pontuacaoVencedor >= 6 && (
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
        <h2 className="titulo-resultado">Fim do CitoQuest!</h2>

        <p className="mensagem-feedback">
          {vencedor === "Empate"
            ? "Empate! 🧠 Os dois mandaram bem!"
            : `${vencedor} venceu o duelo! 🎉`}
        </p>

        <p className="pontuacao-final">
          {nomeJogador1}: <strong>{jogador1}</strong> <br />
          {nomeJogador2}: <strong>{jogador2}</strong>
        </p>


        <p className="mensagem-feedback">{mensagem}</p>

        <div className="botoes-resultado">
          <button
            className="botao-jogar"
            onClick={() => {
              pararAudio();
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

export default CaixaResultadoMultiplayer;
