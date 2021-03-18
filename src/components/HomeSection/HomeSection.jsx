import React from 'react';
import './HomeSection.css';

function HomeSection() {
    return (
        <section className="home-section">
            <div className="center-box">
                <h1 className="first-line">Olá, meu nome é <b>Victor Tilheri</b></h1>
                <h1 className="second-line">Desenvolvedor Web Fullstack Júnior</h1>
                <button className="download-cv-btn">Baixar Currículo</button>
            </div>
        </section>
    )
}

export default HomeSection
