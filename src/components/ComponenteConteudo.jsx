import React from 'react';

const ComponenteConteudo = ({ secoes, acoes }) => {
  return (
    <main>
      <section className="container-conteudo">
        <div className="background-conteudo">
          <div className="conteudo">
            {secoes.map((secao, index) => (
              <div key={index}>
                <h2 className="titulo-conteudo">{secao.titulo}</h2>

                {secao.conteudo.map((item, i) => {
                  if (item.tipo === 'paragrafo') {
                    return (
                      <p className="texto-conteudo" key={i}>
                        {item.texto}
                      </p>
                    );
                  }

                  if (item.tipo === 'imagem') {
                    return (
                      <figure key={i} className="imagem-com-legenda">
                        <img
                          className="imagem-conteudo"
                          src={item.src}
                          alt={item.alt}
                        />
                        {item.legenda && <figcaption>{item.legenda}</figcaption>}
                      </figure>
                    );
                  }

                  if (item.tipo === 'lista' && Array.isArray(item.itens)) {
                    return (
                      <ul key={i} className="lista-conteudo">
                        {item.itens.map((li, liIndex) => (
                          <li
                            className="item-conteudo"
                            key={liIndex}
                            dangerouslySetInnerHTML={{ __html: li }}
                          />
                        ))}
                      </ul>
                    );
                  }
                  if (item.tipo === 'botoes') {
                    return (
                      <div key={i} className="botoes-citoquest">
                        {item.botoes.map((btn, idx) => (
                          <button
                            key={idx}
                            className={`botao-citoquest ${btn.desabilitado ? 'desabilitado' : ''}`}
                            disabled={btn.desabilitado}
                            onClick={() => {
                              if (!btn.desabilitado && acoes[btn.acao]) {
                                acoes[btn.acao]();
                              }
                            }}
                          >
                            {btn.texto}
                          </button>
                        ))}
                      </div>
                    );
                  }
                  if (item.tipo === 'paragrafo-com-link') {
                    return (
                      <p className="texto-conteudo" key={i}>
                        {item.texto}{' '}
                        <a
                          href={item.link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-conteudo"
                        >
                          {item.link.texto}
                        </a>
                      </p>
                    );
                  }
                  if (item.tipo === 'subtitulo') {
                    return (
                      <h3 className="subtitulo-conteudo" key={i}>
                        {item.texto}
                      </h3>
                    );
                  }

                  return null;
                })}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ComponenteConteudo;
