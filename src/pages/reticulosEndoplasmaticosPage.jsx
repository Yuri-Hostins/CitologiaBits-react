import React from 'react';
import Navbar from '../components/layout/navbar';
import Footer from '../components/layout/footer';
import ComponenteConteudo from '../components/ComponenteConteudo';
import BannerConteudos from '../components/BannerConteudos';
import Vacuolos from '../conteudos/Vacuolos/Vacuolos';

import "../styles/Conteudos.css"

const VacuolosPage = () => {

  document.title = 'Vacúolos | CitologiaBits';

  return (
    <>
      <Navbar />
      <BannerConteudos titulo="Reticulos Endoplasmaticos"
        descricao="Aqui você encontrará um conteúdo abrangente sobre as Vacuolos, incluindo tópicos como: "
        topicos="Retículo Endoplasmático: Introdução e Estrutura, Retículo Endoplasmático Rugoso (RER), Retículo Endoplasmático Liso (REL) e entre outros."
        videoUrl="https://www.youtube.com/embed/bqiAJF_OpjA?start=52"
      />
      <ComponenteConteudo secoes={Vacuolos} />
      <Footer />
    </>
  );
};


export default VacuolosPage;
