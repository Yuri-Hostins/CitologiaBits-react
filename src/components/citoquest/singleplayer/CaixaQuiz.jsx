import React, { useState, useEffect, useRef } from "react";
import perguntasOriginais from "../perguntas";
import { tocarAudio, pararAudio } from "../../../utils/audioManager";
import audioErroPath from "../../../assets/audio/audioerrou.mp3";
import audioAcertoPath from "../../../assets/audio/audiocertaresposta.mp3";
import audioTempoPath from "../../../assets/audio/audiotempo.mp3";
import audioGameOverPath from "../../../assets/audio/gameover.mp3";
import audioVitoriaPath from "../../../assets/audio/vitoria.mp3";
import audioTaBom from "../../../assets/audio/audiotabom.mp3";

const CaixaQuiz = ({ onFinalizar }) => {
  const [perguntas, setPerguntas] = useState([]);
  const [indiceAtual, setIndiceAtual] = useState(0);
  const [tempo, setTempo] = useState(10);
  const [pontuacao, setPontuacao] = useState(0);
  const [respostaSelecionada, setRespostaSelecionada] = useState(null);
  const [bloqueado, setBloqueado] = useState(false);
  const [mostrarBotaoProximo, setMostrarBotaoProximo] = useState(false);
  const [progresso, setProgresso] = useState(0);
  const audioAtualRef = useRef(null);

  useEffect(() => {
    setProgresso(0);
  }, [indiceAtual]);


  useEffect(() => {
    const perguntasAleatorias = [...perguntasOriginais]
      .sort(() => 0.5 - Math.random())
      .slice(0, 10);
    setPerguntas(perguntasAleatorias);
  }, []);

  useEffect(() => {
    if (bloqueado) return;

    // Intervalo para diminuir o tempo (a cada 1s)
    const timer = setInterval(() => {
      setTempo(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          setBloqueado(true);
          setMostrarBotaoProximo(true);

          tocarAudio(audioTempoPath);

          return 0;
        }
        return prev - 1;
      });
    }, 1000);


    // Intervalo para aumentar o progresso suavemente (a cada 100ms)
    const duracao = 10 * 1000; // 10 segundos em ms
    const intervalo = 100;
    const incremento = (100 / (duracao / intervalo)) * 1.05;


    const barra = setInterval(() => {
      setProgresso(prev => {
        const novo = prev + incremento;
        if (novo >= 100) {
          clearInterval(barra);
          return 100;
        }
        return novo;
      });
    }, intervalo);

    // Limpa ambos ao desmontar ou atualizar
    return () => {
      clearInterval(timer);
      clearInterval(barra);
    };
  }, [indiceAtual, bloqueado]);



  const selecionarResposta = (resposta) => {
    if (bloqueado) return;
    const correta = perguntas[indiceAtual].alternativaCerta;

    setRespostaSelecionada(resposta);
    setBloqueado(true);
    setMostrarBotaoProximo(true);

    if (resposta === correta) {
      setPontuacao((prev) => prev + 1);
      tocarAudio(audioAcertoPath);
    } else {
      tocarAudio(audioErroPath);
    }
  };

  const avancarPergunta = () => {
    if (indiceAtual + 1 >= perguntas.length) {
      const pontuacaoFinal = pontuacao + (respostaSelecionada === perguntas[indiceAtual].alternativaCerta ? 1 : 0);

      if (pontuacaoFinal <= 3) {
        tocarAudio(audioGameOverPath);
      } else if (pontuacaoFinal >= 9) {
        tocarAudio(audioVitoriaPath, true);
      } else if (pontuacaoFinal >= 7) {
        tocarAudio(audioTaBom);
      }



      onFinalizar(pontuacao, perguntas.length);


    } else {
      setIndiceAtual((prev) => prev + 1);
      setTempo(10); // reinicia o cronômetro
      setProgresso(0); // reinicia a barra
      setRespostaSelecionada(null);
      setBloqueado(false);
      setMostrarBotaoProximo(false);
    }
  };


  if (perguntas.length === 0) return <p>Carregando perguntas...</p>;

  const perguntaAtual = perguntas[indiceAtual];
  const correta = perguntaAtual.alternativaCerta;

  return (
    <div className="modal-overlay">
      <div className="modal-quiz">
        {/* TOPO */}
        <div className="topo-quiz">
          <h3 className="titulo-quiz">CitoQuest</h3>
          <div className={`tempo-box ${tempo === 0 ? "esgotado" : ""}`}>
            <span className="tempo-label">
              {tempo === 0 ? "Tempo Esgotado" : "Tempo"}
            </span>
            <span className="tempo-contagem">{tempo < 10 ? `0${tempo}` : tempo}</span>
          </div>
        </div>

        {/* BARRA PROGRESSO TEMPORIZADA */}
        <div className="barra-progresso-container">
          <div
            className={`barra-progresso ${(tempo === 0 || bloqueado) ? "barra-esgotada" : ""}`}
            style={{ width: `${progresso}%` }}

          ></div>
        </div>

        {/* PERGUNTA */}
        <div className="texto-perguntas">
          <h2>{perguntaAtual.pergunta}</h2>
        </div>

        {/* OPÇÕES */}
        <div className="lista-opcao">
          {perguntaAtual.opcoes.map((opcao, idx) => {
            let classe = "opcao";
            if (bloqueado) {
              if (opcao === correta) classe += " correta";
              else if (opcao === respostaSelecionada) classe += " incorreta";
            }

            return (
              <div
                key={idx}
                className={classe}
                onClick={() => selecionarResposta(opcao)}
              >
                {opcao}
              </div>
            );
          })}
        </div>

        {/* RODAPÉ */}
        <div className="rodape-quiz">
          <span>{`${indiceAtual + 1} de ${perguntas.length} Perguntas`}</span>
          {mostrarBotaoProximo && (
            <button className="botao-proximo" onClick={avancarPergunta}>
              Próximo teste
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CaixaQuiz;
