import React, { useEffect } from 'react';
import Navbar from '../components/layout/navbar';
import Banner from '../components/homepage/Banner';
import Sobre from '../components/homepage/Sobre';
import Conteudo from '../components/homepage/Conteudos';
import Curiosidades from '../components/homepage/Curiosidades';
import Contato from '../components/homepage/Contato';
import Footer from '../components/layout/footer';

import '../styles/HomePage.css';

const HomePage = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3, // 30% da seção visível ativa o título
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          switch (id) {
            case 'home':
              document.title = 'CitologiaBits';
              break;
            case 'sobre':
              document.title = 'Sobre | CitologiaBits';
              break;
            case 'conteudos':
              document.title = 'Conteúdos | CitologiaBits';
              break;
            case 'curiosidades':
              document.title = 'Curiosidades | CitologiaBits';
              break;
            case 'contato':
              document.title = 'Contato | CitologiaBits';
              break;
            default:
              document.title = 'CitologiaBits';
          }
        }
      });

    }, observerOptions);

    sections.forEach(section => observer.observe(section));




    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      <Navbar />
      <Banner />
      <Sobre />
      <Conteudo />
      <Curiosidades />
      <Contato />
      <Footer />
    </>
  );
};

export default HomePage;