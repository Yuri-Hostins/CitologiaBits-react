import React from "react";

const ModalRegrasMultiplayer = ({ onFechar, onContinuar }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-regras">
        <h2 className="titulo-regras">Regras do CitoQuest - Modo Multiplayer</h2>
        <ul className="lista-regras">
          <li>1) Este é um jogo para <strong>2 jogadores</strong>.</li>
          <li>2) Ambos os jogadores <strong>respondem a mesma pergunta</strong>, um por vez.</li>
          <li>3) Cada jogador tem <strong>10 segundos</strong> para responder sua vez.</li>
          <li>4) Após os dois responderem, será revelada a resposta correta.</li>
          <li>5) Os pontos são atribuídos separadamente para cada jogador.</li>
          <li>6) Vence quem <strong>acertar mais perguntas</strong> ao final do jogo.</li>
        </ul>
        <div className="botoes-regras">
          <button className="botao-sair" onClick={onFechar}>Sair do Quiz</button>
          <button className="botao-continuar" onClick={onContinuar}>Continuar</button>
        </div>
      </div>
    </div>
  );
};

export default ModalRegrasMultiplayer;
