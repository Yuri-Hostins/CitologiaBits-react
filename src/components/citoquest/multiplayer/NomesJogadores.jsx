// src/components/citoquest/multiplayer/NomesJogadores.jsx
import React, { useState } from "react";

const NomesJogadores = ({ onContinuar, onVoltar }) => {
  const [nome1, setNome1] = useState("Jogador 1");
  const [nome2, setNome2] = useState("Jogador 2");
  const [erro, setErro] = useState("");

  const handleContinuar = () => {
    if (!nome1.trim() || !nome2.trim()) {
      setErro("Por favor, preencha os nomes dos dois jogadores.");
      return;
    }
    setErro("");
    onContinuar(nome1.trim(), nome2.trim());
  };

  return (
    <div className="modal-overlay">
      <div className="modal-nomes">
        <h2>Escolha os nomes dos jogadores</h2>

        <label>
          Nome do Jogador 1:
          <input
            type="text"
            value={nome1}
            onChange={(e) => setNome1(e.target.value)}
            maxLength={15}
          />
        </label>

        <label>
          Nome do Jogador 2:
          <input
            type="text"
            value={nome2}
            onChange={(e) => setNome2(e.target.value)}
            maxLength={15}
          />
        </label>

        {erro && <p className="mensagem-erro">{erro}</p>}

        <div className="botoes-modal">
          <button className="botao-sair" onClick={onVoltar}>
            Voltar
          </button>
          <button className="botao-continuar" onClick={handleContinuar}>
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
};

export default NomesJogadores;
