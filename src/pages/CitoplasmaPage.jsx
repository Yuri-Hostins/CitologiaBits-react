import React from 'react';
import Navbar from '../components/layout/navbar';
import Footer from '../components/layout/footer';
import ComponenteConteudo from '../components/ComponenteConteudo';
import BannerConteudos from '../components/BannerConteudos';
import citoplasma from '../conteudos/citoplasma/citoplasma';

import "../styles/Conteudos.css"

const CitoplasmaPage = () => {

  document.title = 'Citoplasma | CitologiaBits';

  return (
    <>
      <Navbar />
      <BannerConteudos titulo="Citoplasma"
        descricao="Aqui você encontrará um conteúdo abrangente sobre o citoplasma, incluindo tópicos como:"
        topicos="Introdução ao Citoplasma, Composição e Estrutura do Citoplasma, Funções do Citoplasma, entre outros."
        videoUrl="https://www.youtube.com/embed/nxB7HEJ_O6w?start=53"
      />
      <ComponenteConteudo secoes={citoplasma} />
      <Footer />
    </>
  );
};


export default CitoplasmaPage;
