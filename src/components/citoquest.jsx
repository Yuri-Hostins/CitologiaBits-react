import React, { useState } from "react";
import ModalRegrasUmJogador from "./citoquest/singleplayer/ModalRegrasUmJogador";
import ModalRegrasMultiplayer from "../components/citoquest/multiplayer/ModalRegrasMultiplayer";
import CaixaQuiz from "../components/citoquest/singleplayer/CaixaQuiz";
import CaixaQuizMultiplayer from "../components/citoquest/multiplayer/CaixaQuizMultiplayer";
import CaixaResultado from "../components/citoquest/singleplayer/CaixaResultado";
import CaixaResultadoMultiplayer from "../components/citoquest/multiplayer/CaixaResultadoMultiplayer";
import NomesJogadores from "../components/citoquest/multiplayer/NomesJogadores";

import "../styles/games/citoQuest.css";

const ComponenteCitoQuest = () => {
  const [modo, setModo] = useState(""); // "" | "um" | "multi"
  const [jogoIniciado, setJogoIniciado] = useState(false);
  const [quizFinalizado, setQuizFinalizado] = useState(false);
  const [pontuacao, setPontuacao] = useState(0);
  const [totalPerguntas, setTotalPerguntas] = useState(0);
  const [mostrarModalNomes, setMostrarModalNomes] = useState(false);
  const [nomeJogador1, setNomeJogador1] = useState("Jogador 1");
  const [nomeJogador2, setNomeJogador2] = useState("Jogador 2");
  const [mostrarModalRegrasMultiplayer, setMostrarModalRegrasMultiplayer] = useState(false);


  const iniciarJogo = () => {
    setJogoIniciado(true);
    setPontuacao(0);
    setQuizFinalizado(false);
  };

  const finalizarJogo = (pontuacaoFinal, totalPerguntas) => {
    setJogoIniciado(false);
    setQuizFinalizado(true);
    setPontuacao(pontuacaoFinal);
    setTotalPerguntas(totalPerguntas);
  };


  return (
    <section className="container-conteudo">
      <div className="background-conteudo">
        <div className="conteudo">
          {!jogoIniciado && !quizFinalizado && (
            <div className="container-buttons">
              <h1>Bem-vindo ao CitoQuest</h1>
              <div className="botao-comecar">
                <button onClick={() => setModo("um")}>Singleplayer</button>
              </div>
              <div className="botao-multiplayer">
                <button
                  onClick={() => {
                    setModo("multi");
                    setMostrarModalRegrasMultiplayer(true);
                  }}
                >
                  Multiplayer
                </button>
              </div>
            </div>
          )}

          {/* Modal para um jogador */}
          {modo === "um" && !jogoIniciado && !quizFinalizado && (
            <ModalRegrasUmJogador
              onFechar={() => setModo("")}
              onContinuar={iniciarJogo}
            />
          )}

          {/* Modal para multijogador */}
          {modo === "multi" && !jogoIniciado && !quizFinalizado && mostrarModalRegrasMultiplayer && (
            <ModalRegrasMultiplayer
              onFechar={() => {
                setModo("");
                setMostrarModalRegrasMultiplayer(false);
              }}
              onContinuar={() => {
                setMostrarModalRegrasMultiplayer(false);
                setMostrarModalNomes(true);
              }}
            />

          )}

          {modo === "multi" && !jogoIniciado && !quizFinalizado && mostrarModalNomes && (
            <NomesJogadores
              onVoltar={() => {
                setMostrarModalNomes(false);
                setMostrarModalRegrasMultiplayer(true);
              }}
              onContinuar={(nome1, nome2) => {
                setNomeJogador1(nome1);
                setNomeJogador2(nome2);
                setMostrarModalNomes(false);
                iniciarJogo(); // inicia o jogo depois dos nomes
              }}
            />
          )}

          {/* Caixa para modo Um Jogador */}
          {jogoIniciado && modo === "um" && (
            <CaixaQuiz onFinalizar={finalizarJogo} />
          )}

          {/* Caixa para modo Multijogador – Ativar quando tiver a lógica */}
          {jogoIniciado && modo === "multi" && (
            <CaixaQuizMultiplayer
              onFinalizar={finalizarJogo}
              nomeJogador1={nomeJogador1}
              nomeJogador2={nomeJogador2}
            />
          )}


          {quizFinalizado && modo === "um" && (
            <CaixaResultado
              pontuacao={pontuacao}
              totalPerguntas={totalPerguntas}
              onReiniciar={() => {
                setModo("");
                iniciarJogo();
              }}
            />
          )}

          {quizFinalizado && modo === "multi" && (
            <CaixaResultadoMultiplayer
              pontuacao={pontuacao}
              totalPerguntas={totalPerguntas}
              nomeJogador1={nomeJogador1}
              nomeJogador2={nomeJogador2}
              onReiniciar={() => {
                setQuizFinalizado(false); // Reseta o estado de finalizado
                setPontuacao(0);
                setTotalPerguntas(0);
                setJogoIniciado(true);    // Inicia nova rodada direto
              }}
            />


          )}

        </div>
      </div>
    </section>
  );
};

export default ComponenteCitoQuest;
