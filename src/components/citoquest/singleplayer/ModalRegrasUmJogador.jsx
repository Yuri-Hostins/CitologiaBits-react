import React from "react";

const ModalRegrasUmJogador = ({ onFechar, onContinuar }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-regras">
        <h2 className="titulo-regras">Regras do CitoQuest - Modo Singleplayer</h2>
        <ul className="lista-regras">
          <li>1) Você só tem <strong>10 segundos</strong> por pergunta.</li>
          <li>2) Depois de selecionar sua resposta, ela <strong>não pode ser desfeita</strong>.</li>
          <li>3) Você não pode selecionar nenhuma opção quando o tempo acabar.</li>
          <li>4) Você <strong>não pode sair</strong> do Quiz Game enquanto estiver jogando.</li>
          <li>5) Você receberá <strong>pontos com base nas respostas corretas</strong>.</li>
        </ul>
        <div className="botoes-regras">
          <button className="botao-sair" onClick={onFechar}>Sair do Quiz</button>
          <button className="botao-continuar" onClick={onContinuar}>Continuar</button>
        </div>
      </div>
    </div>
  );
};

export default ModalRegrasUmJogador;
