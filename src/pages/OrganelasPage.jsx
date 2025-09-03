import React from 'react';
import Navbar from '../components/layout/navbar';
import Footer from '../components/layout/footer';
import ComponenteConteudo from '../components/ComponenteConteudo';
import BannerConteudos from '../components/BannerConteudos';
import organelas from '../conteudos/organelas/organelas';

import "../styles/Conteudos.css"

const CitoplasmaPage = () => {

  document.title = 'Organelas | CitologiaBits';

  return (
    <>
      <Navbar />
      <BannerConteudos titulo="Organelas"
        descricao="Aqui você encont Aqui você encontrará um conteúdo abrangente sobre as organelas, incluindo tópicos como:"
        topicos="Introdução às Organelas Celulares, Membrana Celular, Núcleo Celular, Cloroplastos entre outros. "
        videoUrl="https://www.youtube.com/embed/SDKLfxyBwZ8?start=707"
      />
      <ComponenteConteudo secoes={organelas} />
      <Footer />
    </>
  );
};


export default CitoplasmaPage;
