import React from 'react';
import curiosidade1 from '../../assets/img/homepage/curiosidades/background-curiosidades-1.jpg';
import curiosidade2 from '../../assets/img/homepage/curiosidades/background-curiosidades-2.jpg';
import curiosidade3 from '../../assets/img/homepage/curiosidades/background-curiosidades-3.jpg';
import curiosidade4 from '../../assets/img/homepage/curiosidades/background-curiosidades-4.jpg';
import curiosidade5 from '../../assets/img/homepage/curiosidades/background-curiosidades-5.jpg';

const curiosidades = [
  {
    titulo: 'Primeira Curiosidade',
    imagem: curiosidade1,
    descricao:
      'A citologia depende fortemente do uso de microscópios para estudar as células, uma vez que as células são muito pequenas para serem visualizadas a olho nu. A invenção do microscópio no século XVII foi um marco importante no desenvolvimento da citologia.',
  },
  {
    titulo: 'Segunda Curiosidade',
    imagem: curiosidade2,
    descricao:
      'A palavra "célula" foi introduzida pela primeira vez por Robert Hooke em 1665, quando ele observou cortes finos de cortiça sob um microscópio e notou a semelhança com as celas de um mosteiro, dando origem ao termo "célula".',
  },
  {
    titulo: 'Terceira Curiosidade',
    imagem: curiosidade3,
    descricao:
      'A citologia revelou que existem inúmeras formas e funções de células. Desde as células simples de bactérias até as complexas células eucarióticas que compõem organismos multicelulares, a diversidade celular é impressionante.',
  },
  {
    titulo: 'Quarta Curiosidade',
    imagem: curiosidade4,
    descricao:
      'A citologia desempenha um papel fundamental na medicina, especialmente na detecção precoce de doenças como o câncer. A citologia é usada em testes como a citologia cervical (Papanicolau) para a detecção de células anormais no colo do útero.',
  },
  {
    titulo: 'Quinta Curiosidade',
    imagem: curiosidade5,
    descricao:
      'A citologia tem sido crucial para nossa compreensão da biologia celular e dos processos que ocorrem dentro das células. Isso inclui a divisão celular, a síntese de proteínas, o metabolismo e muito mais. O estudo das células é essencial para a biologia moderna.',
  },
];

const Curiosidades = () => {
  return (
    <section id="curiosidades" className="curiosidades">
      <div style={{ height: '1px' }}></div>
      <div className="titulo branco">
        <h2 className="titulo-texto">
          <span>5</span> Curiosidades Sobre Citologia
        </h2>
        <p>Descubra 5 fascinantes curiosidades sobre o incrível mundo da citologia!</p>
      </div>

      <div className="contente">
        {curiosidades.map((item, index) => (
          <div className="caixa" key={index}>
            <div
              className="imagem-topo"
              style={{
                backgroundImage: `url(${item.imagem})`,
              }}
            />
            <div className="texto">
              <h2>{item.titulo}</h2>
              <p>{item.descricao}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Curiosidades;