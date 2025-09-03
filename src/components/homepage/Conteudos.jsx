import React from 'react';
import citoplasma from '../../assets/img/homepage/conteudos/citoplasma.png';
import organelas from '../../assets/img/homepage/conteudos/organelas.webp';
import ribossomos from '../../assets/img/homepage/conteudos/ribossomos.png';
import lisossomos from '../../assets/img/homepage/conteudos/lisossomos.png';
import peroxissomos from '../../assets/img/homepage/conteudos/peroxissomos.png';
import vacuolos from '../../assets/img/homepage/conteudos/vacuolos.png';
import retiEndoplasmatico from '../../assets/img/homepage/conteudos/reticulos endoplasmatico.webp';
import complexoGolgi from '../../assets/img/homepage/conteudos/complexo de golgi.jpg';
import centriolos from '../../assets/img/homepage/conteudos/centriolos-background.webp';
import mitocondrias from '../../assets/img/homepage/conteudos/mitocondrias.jpg';
import glioxissomos from '../../assets/img/homepage/conteudos/glioxissomos.webp';
import quiz from '../../assets/img/homepage/conteudos/citologia quiz.png';
import jogoPalavra from '../../assets/img/homepage/conteudos/jogo da palavra.png';

const conteudos = [
  { titulo: 'Citoplasma', img: citoplasma, desc: 'Organela com gel viscoso abriga processos celulares. Descubra mais clicando abaixo.', link: '/conteudos/citoplasma' },
  { titulo: 'Organelas', img: organelas, desc: 'Pequenas estruturas celulares realizam funções específicas. Descubra mais clicando abaixo.', link: '/conteudos/organelas' },
  { titulo: 'Ribossomos', img: ribossomos, desc: 'Responsáveis pela síntese de proteínas. Descubra mais clicando abaixo.', link: '/conteudos/ribossomos' },
  { titulo: 'Lisossomos', img: lisossomos, desc: 'Organelas de digestão celular. Descubra mais clicando abaixo.', link: '/assets/pages/lisossomos' },
  { titulo: 'Peroxissomos', img: peroxissomos, desc: 'Envolvidos em processos de detox celular. Descubra mais clicando abaixo.', link: '/assets/pages/peroxissomos' },
  { titulo: 'Vacúolos', img: vacuolos, desc: 'Armazenam substâncias e mantêm a turgidez. Descubra mais clicando abaixo.', link: '/assets/pages/vacuolos' },
  { titulo: 'Retículos Endoplasmáticos', img: retiEndoplasmatico, desc: 'Rede intracelular: liso sintetiza, rugoso modula proteínas. Descubra mais clicando abaixo.', link: '/assets/pages/reti-endoplasmatico' },
  { titulo: 'Complexo Golgiense', img: complexoGolgi, desc: 'Empacota e distribui proteínas. Descubra mais clicando abaixo.', link: '/assets/pages/complexo-golgiense' },
  { titulo: 'Centríolos', img: centriolos, desc: 'Essenciais na divisão celular, organizam os microtúbulos. Descubra mais clicando abaixo.', link: '/assets/pages/centriolos' },
  { titulo: 'Mitocôndrias', img: mitocondrias, desc: 'Centrais energéticas celulares produzem ATP. Descubra mais clicando abaixo.', link: '/assets/pages/mitocondria' },
  { titulo: 'Glioxissomos', img: glioxissomos, desc: 'Envolvidos no metabolismo de lipídios em plantas. Descubra mais clicando abaixo.', link: '/assets/pages/mitocondria' },
  { titulo: 'CitoQuest', img: quiz, desc: 'Quiz desafiador para testar seus conhecimentos até agora. As regras e instruções aparecerão ao iniciar o jogo. Descubra mais clicando abaixo.', link: '/games/cito-quest' },
  { titulo: 'CitoPuzzle', img: jogoPalavra, desc: 'Segundo jogo desafiador: um quiz com caça-palavras para testar ainda mais seus conhecimentos. Descubra mais clicando abaixo.', link: '/games/cito-puzzle' },
];

const Conteudos = () => {
  const scroll = (direction) => {
    const slider = document.querySelector('.card-content');
    const scrollAmount = direction === 'left' ? -320 : 320;
    slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <section className="conteudos" id="conteudos">
      <div className="titulo">
        <h2 className="titulo-texto"><span>C</span>onteúdos</h2>
        <p>
          Aqui você encontra todo o conteúdo necessário para estudar sobre a fascinante citologia!
        </p>
      </div>

      <div className="slider">
        <button className="btn" id="prev" onClick={() => scroll('left')}>
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
          </svg>
        </button>

        <div className="card-content">
          {conteudos.map((item, index) => (
            <div className="card" key={index}>
              <div className="card-img">
                <img src={item.img} alt={item.titulo} />
              </div>
              <div className="card-text">
                <h2>{item.titulo}</h2>
                <p>{item.desc}</p>
                <a className="botao" href={item.link}>Ver Mais</a>
              </div>
            </div>
          ))}
        </div>

        <button className="btn" id="next" onClick={() => scroll('right')}>
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Conteudos;
