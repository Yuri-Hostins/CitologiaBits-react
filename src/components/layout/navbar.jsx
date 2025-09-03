// src/components/Navbar.jsx
import React, { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import '../../styles/layout/navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [isFixed, setIsFixed] = useState(false);
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsFixed(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={isFixed ? 'navegacao-fixa' : ''}>
      {isHome ? (
        <ScrollLink to="home" smooth duration={500} className="logo">
          Citologia<span>Bits</span>
        </ScrollLink>
      ) : (
        <RouterLink to="/" className="logo">
          Citologia<span>Bits</span>
        </RouterLink>
      )}

      <ul className="navegacao">
        {isHome ? (
          <>
            <li><ScrollLink to="home" smooth duration={500} spy offset={-60} activeClass="ativo">Home</ScrollLink></li>
            <li><ScrollLink to="sobre" smooth duration={500} spy offset={-60} activeClass="ativo">Sobre</ScrollLink></li>
            <li><ScrollLink to="conteudos" smooth duration={500} spy offset={-60} activeClass="ativo">Conteúdos</ScrollLink></li>
            <li><ScrollLink to="curiosidades" smooth duration={500} spy offset={-60} activeClass="ativo">Curiosidades</ScrollLink></li>
            <li><ScrollLink to="contato" smooth duration={500} spy offset={-60} activeClass="ativo">Contato</ScrollLink></li>
          </>
        ) : (
          <>
            <li><RouterLink to="/">Home</RouterLink></li>
            <li><RouterLink to="/#sobre">Sobre</RouterLink></li>
            <li><RouterLink to="/#conteudos">Conteúdos</RouterLink></li>
            <li><RouterLink to="/#curiosidades">Curiosidades</RouterLink></li>
            <li><RouterLink to="/#contato">Contato</RouterLink></li>
          </>
        )}
      </ul>
    </header>
  );
};

export default Navbar;