import React from 'react';
import Navbar from '../components/layout/navbar';
import Footer from '../components/layout/footer';
import ComponenteConteudo from '../components/ComponenteConteudo';
import BannerConteudos from '../components/BannerConteudos';
import Ribossomos from '../conteudos/Ribossomos/Ribossomos';

import "../styles/Conteudos.css"

const RibossomosPage = () => {

  document.title = 'Ribossomos | CitologiaBits';

  return (
    <>
      <Navbar />
      <BannerConteudos titulo="Ribossomos"
        descricao="Aqui você encontrará um conteúdo abrangente sobre as Ribossomos, incluindo tópicos como: "
        topicos="Introdução aos Ribossomos, Estrutura dos Ribossomos, Função dos Ribossomos, Localização dos Ribossomos e entre outros. "
        videoUrl="https://www.youtube.com/embed/SDKLfxyBwZ8?start=707"
      />
      <ComponenteConteudo secoes={Ribossomos} />
      <Footer />
    </>
  );
};


export default RibossomosPage;
