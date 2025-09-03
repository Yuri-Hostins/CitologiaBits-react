import React, { useState, useEffect, useRef } from "react";
import perguntasOriginais from "../perguntas";
import { tocarAudio, pararAudio } from "../../../utils/audioManager";
import audioTempoPath from "../../../assets/audio/audiotempo.mp3";

const CaixaQuizMultiplayer = ({ onFinalizar, nomeJogador1 = "Jogador 1", nomeJogador2 = "Jogador 2" }) => {
  const [jogadorAtual, setJogadorAtual] = useState("Jogador 1");
  const [pontuacaoJogador1, setPontuacaoJogador1] = useState(0);
  const [pontuacaoJogador2, setPontuacaoJogador2] = useState(0);
  const [respostaJogador1, setRespostaJogador1] = useState(null);
  const [respostaJogador2, setRespostaJogador2] = useState(null);
  const [mostrarResposta, setMostrarResposta] = useState(false);
  const [perguntas, setPerguntas] = useState([]);
  const [indiceAtual, setIndiceAtual] = useState(0);
  const [tempo, setTempo] = useState(10);
  const [progresso, setProgresso] = useState(0);
  const [bloqueado, setBloqueado] = useState(false);
  const [mostrarBotaoProximo, setMostrarBotaoProximo] = useState(false);
  const [feedbackJogador1, setFeedbackJogador1] = useState(null); // "acerto" | "erro"
  const [feedbackJogador2, setFeedbackJogador2] = useState(null); // "acerto" | "erro"
  const audioTempoRef = useRef(new Audio(audioTempoPath));
  const [esperandoJogador2, setEsperandoJogador2] = useState(false);
  const [reiniciarTempo, setReiniciarTempo] = useState(false);


  const iniciarTurnoJogador2 = () => {
    setEsperandoJogador2(false);
    setTempo(10);
    setProgresso(0);
    setReiniciarTempo(prev => !prev);
  };


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
    if (bloqueado || esperandoJogador2) return;

    const timer = setInterval(() => {
      setTempo((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          pararAudio(); // Garante que outro som não interrompa
          const audio = audioTempoRef.current;
          audio.pause();
          audio.currentTime = 0;
          audio.play().catch((err) => {
            console.warn("Erro ao reproduzir áudio de tempo:", err.message);
          });


          if (jogadorAtual === "Jogador 1") {
            // Jogador 1 perdeu a vez, passa para o Jogador 2
            setRespostaJogador1(null);
            setJogadorAtual("Jogador 2");
            setEsperandoJogador2(true);
            setTempo(10);
            setProgresso(0);
          } else {
            // Jogador 2 perdeu a vez, finaliza a rodada
            setRespostaJogador2(null);
            setBloqueado(true);
            setMostrarBotaoProximo(true);
            setMostrarResposta(true);

            const correta = perguntas[indiceAtual].alternativaCerta;
            const resposta1 = respostaJogador1;

            setFeedbackJogador1(
              resposta1 === correta ? "acerto" : "erro"
            );
            setFeedbackJogador2("erro");
          }

          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    // BARRA DE PROGRESSO
    const duracao = 10 * 1000;
    const intervalo = 100;
    const incremento = (100 / (duracao / intervalo)) * 1.05;

    const barra = setInterval(() => {
      setProgresso((prev) => {
        const novo = prev + incremento;
        if (novo >= 100) {
          clearInterval(barra);
          return 100;
        }
        return novo;
      });
    }, intervalo);

    return () => {
      clearInterval(timer);
      clearInterval(barra);
    };
  }, [indiceAtual, bloqueado, jogadorAtual, respostaJogador1, perguntas, reiniciarTempo]);

  const selecionarResposta = (resposta) => {
    if (bloqueado) return;

    const correta = perguntas[indiceAtual].alternativaCerta;

    if (jogadorAtual === "Jogador 1") {
      setRespostaJogador1(resposta);
      setJogadorAtual("Jogador 2");
      setTempo(10);
      setProgresso(0);
      setFeedbackJogador1(null); // Limpa o feedback anterior
    } else {
      const resposta1 = respostaJogador1;
      const resposta2 = resposta;

      setRespostaJogador2(resposta2);
      setBloqueado(true);
      setMostrarBotaoProximo(true);
      setMostrarResposta(true);

      if (resposta1 === correta) {
        setPontuacaoJogador1((prev) => prev + 1);
        setFeedbackJogador1("acerto");
        // tocarAudio(audioAcertoPath);
      } else {
        setFeedbackJogador1("erro");
        // tocarAudio(audioErroPath);
      }

      setTimeout(() => {
        if (resposta2 === correta) {
          setPontuacaoJogador2((prev) => prev + 1);
          setFeedbackJogador2("acerto");
          // tocarAudio(audioAcertoPath);
        } else {
          setFeedbackJogador2("erro");
          // tocarAudio(audioErroPath);
        }
      }, 500);
    }

  };



  const avancarPergunta = () => {
    if (indiceAtual + 1 >= perguntas.length) {
      onFinalizar(
        { jogador1: pontuacaoJogador1, jogador2: pontuacaoJogador2 },
        perguntas.length
      );
    } else {
      setIndiceAtual((prev) => prev + 1);
      setTempo(10);
      setProgresso(0);
      setRespostaJogador1(null);
      setRespostaJogador2(null);
      setJogadorAtual("Jogador 1");
      setBloqueado(false);
      setMostrarBotaoProximo(false);
      setMostrarResposta(false);
      setFeedbackJogador1(null);
      setFeedbackJogador2(null);
      setMostrarResposta(false);

    }
  };



  if (perguntas.length === 0) return <p>Carregando perguntas...</p>;

  const perguntaAtual = perguntas[indiceAtual];
  const correta = perguntaAtual.alternativaCerta;


  return (
    <>
      {esperandoJogador2 && (
        <div className="modal-overlay-presenca">
          <div className="modal-presenca">
            <h3>Tem alguém aí?</h3>
            <p>{nomeJogador2}, você está pronto?</p>

            <div className="botoes-presenca">
              <button onClick={iniciarTurnoJogador2}>Sim</button>
              <button onClick={() => window.location.reload()}>Não</button>

            </div>
          </div>
        </div>
      )}

      <div className="modal-overlay">
        <div className="modal-quiz">
          {/* TOPO */}
          <div className="topo-quiz">
            <h3 className="titulo-quiz">CitoQuest</h3>
            {!mostrarResposta && (
              <h4 className="titulo-turno">{`Vez de ${jogadorAtual === "Jogador 1" ? nomeJogador1 : nomeJogador2}`}</h4>

            )}

            {mostrarResposta && (
              <div className="feedback-jogadores">
                <div className={`jogador-feedback jogador1 ${feedbackJogador1}`}>
                  {nomeJogador1} {feedbackJogador1 === "acerto" ? "✅" : feedbackJogador1 === "erro" ? "❌" : ""}
                </div>

                <div className={`jogador-feedback jogador2 ${feedbackJogador2}`}>
                  {nomeJogador2} {feedbackJogador2 === "acerto" ? "✅" : feedbackJogador2 === "erro" ? "❌" : ""}
                </div>

              </div>
            )}



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
                else if (
                  (jogadorAtual === "Jogador 2" && opcao === respostaJogador1) ||
                  (jogadorAtual === "Jogador 1" && opcao === respostaJogador2)
                )
                  classe += " incorreta";

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
    </>
  );
};

export default CaixaQuizMultiplayer;
