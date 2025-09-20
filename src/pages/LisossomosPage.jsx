import React from 'react';
import Navbar from '../components/layout/navbar';
import Footer from '../components/layout/footer';
import ComponenteConteudo from '../components/ComponenteConteudo';
import BannerConteudos from '../components/BannerConteudos';
import Lisossomos from '../conteudos/Lisossomos/Lisossomos';

import "../styles/Conteudos.css"

const LisossomosPage = () => {

  document.title = 'Lisossomos | CitologiaBits';

  return (
    <>
      <Navbar />
      <BannerConteudos titulo="Lisossomos"
        descricao="Aqui você encontrará um conteúdo abrangente sobre as Ribossomos, incluindo tópicos como: "
        topicos="Introdução aos Lisossomos, Estrutura dos Lisossomos, Origem dos Lisossomos, Função dos Lisossomos e entre outros."
        videoUrl="https://www.youtube.com/embed/M3lgeuqmJBE?start=13"
      />
      <ComponenteConteudo secoes={Lisossomos} />
      <Footer />
    </>
  );
};


export default LisossomosPage;
