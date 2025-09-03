// src/pages/Sobre.jsx
import React from 'react';
import dnaImage from '../../assets/img/sobre.png'; 

const Sobre = () => {
  return (
    <section className="sobre-container" id='sobre'>
      <div className="texto">
        <h2><span>S</span>obre</h2>
        <p>
          Olá! Fico feliz em receber você aqui no <strong>CitologiaBits</strong>,
          um projeto criado por Cauã Fidelis, João Vitor, Wagner Gabriel e Yuri Hostins.
        </p>
        <p>
          Através deste trabalho escolar, estamos empenhados em compartilhar nosso
          conhecimento sobre a citologia, tornando-a mais acessível e interessante
          para todos os estudantes. Nosso site abrange tópicos como Citoplasma,
          Organelas, Ribossomos, Lisossomos, entre outros.
        </p>
        <p>
          Para aqueles que preferem aprender de forma mais visual, oferecemos vídeos
          explicativos. Além disso, se você quiser testar seus conhecimentos, pode se divertir por aqui!
        </p>
      </div>
      <div className="imagem">
        <img src={dnaImage} alt="Fita de DNA colorida" />
      </div>
    </section>
  );
};

export default Sobre;
