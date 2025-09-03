// src/components/footer.jsx
import React from 'react';
import '../../styles/layout/footer.css'; // caso tenha um CSS próprio

const footer = () => {
    const anoInicio = 2022;
    const anoAtual = new Date().getFullYear();


    return (
        <footer className="rodape">
            <p>&copy; CitologiaBits {anoInicio} - {anoAtual}</p>
            <p>Desenvolvido por Yuri Hostins Raimundo</p>
        </footer>
    );
};

export default footer;
