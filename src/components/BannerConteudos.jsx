import React from 'react';

const BannerConteudos = ({ titulo, descricao, topicos, videoUrl }) => {
  return (
    <section className="banner-container">
      <div className="banner-conteudo">
        <div>
          <span>
            <strong>Citologia<span className="titulo-span">Bits</span></strong>
          </span>
          <h1>{titulo}</h1>
          <hr />
          <p>{descricao}</p>
          <p>
            <strong>{topicos}</strong>
          </p>

          {/* Apenas mostra esse parágrafo se tiver videoUrl */}
          {videoUrl && (
            <>
              <p>
                Além disso, disponibilizamos um vídeo explicativo para quem prefere uma abordagem audiovisual, complementando o conteúdo textual e oferecendo diferentes recursos para aprofundar seu conhecimento sobre o {titulo}.
              </p>
              <a
                href={videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="botao-video"
              >
                VÍDEO EXPLICATIVO
              </a>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default BannerConteudos;