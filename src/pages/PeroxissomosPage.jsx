import React from 'react';
import Navbar from '../components/layout/navbar';
import Footer from '../components/layout/footer';
import ComponenteConteudo from '../components/ComponenteConteudo';
import BannerConteudos from '../components/BannerConteudos';
import Peroxissomos from '../conteudos/Peroxissomos/Peroxissomos';

import "../styles/Conteudos.css"

const PeroxissomosPage = () => {

  document.title = 'Peroxissomos | CitologiaBits';

  return (
    <>
      <Navbar />
      <BannerConteudos titulo="Peroxissomos"
        descricao="Aqui você encontrará um conteúdo abrangente sobre as Ribossomos, incluindo tópicos como: "
        topicos="Peroxissomos: Introdução e Definição, Estrutura e Composição dos Peroxissomos, Funções dos Peroxissomos e entre outros."
        videoUrl="https://www.youtube.com/embed/klGDzvaeCn8?start=51"
      />
      <ComponenteConteudo secoes={Peroxissomos} />
      <Footer />
    </>
  );
};


export default PeroxissomosPage;
