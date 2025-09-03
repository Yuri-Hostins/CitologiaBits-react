import React, { useState } from 'react';
import Navbar from '../components/layout/navbar';
import Footer from '../components/layout/footer';
import BannerConteudos from '../components/BannerConteudos';
import CitoQuest from '../components/citoquest';

import "../styles/Conteudos.css"
import "../styles/games/citoQuest.css"

const CitoQuestPage = () => {


    document.title = 'CitoQuest | CitologiaBits';

    const [modalUmJogadorAberto, setModalUmJogadorAberto] = useState(false);
    const [modalMultijogadorAberto, setModalMultijogadorAberto] = useState(false);

    const acoes = {
        abrirModalUmJogador: () => setModalUmJogadorAberto(true),
        abrirModalMultijogador: () => setModalMultijogadorAberto(true),
    };

    return (
        <>
            <Navbar />
            <BannerConteudos titulo="CitoQuest: O jogo de perguntas do CitologiaBits"
                descricao="Bem-vindo ao CitoQuest do CitologiaBits! Explore o emocionante universo das células através de perguntas desafiadoras abordando:"
                topicos="Citoplasma, Organelas e Lisossomos, entre outros. Divirta-se e torne-se um especialista em citologia com o CitoQuest! "
            />
            <CitoQuest />
            <Footer />
        </>
    );
};


export default CitoQuestPage;
