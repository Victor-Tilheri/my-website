import React from 'react';
import './AboutSection.css';
import CoderImg from './assets/coder.png';

function AboutSection() {
    return (
        <section className="about-section">
            <h1 className="section-title">Sobre</h1>
            <div className="about-container">
                <img className="about-img" alt="programmer" src={CoderImg}/>
                <div>
                    <p className="about-text">Olá, me chamo Victor, moro na cidade de São Paulo - SP, sou estudante de TI, faço Gestão em Tecnologia da Informação na FATEC. Possuo uma boa base em programação, pois iniciei bem cedo, em meados de 2012.</p>
                    <p className="about-text">Hoje desenvolvo sistemas desde o front-end, até o back-end. Utilizo as tecnologias mais atuais do ecossistema Javascript, bancos de dados relacionais e não-relacionais, possuo também conhecimentos sólidos em websockets.</p>
                    {/* <p className="about-text">Hoje me encontro cursando Gestão em Tecnologia da Informação, almejo cursar uma pós-graduação no exterior e, quem sabe, adquirir alguma experiência no mercado de trabalho lá fora.</p> */}
                </div>
            </div>
        </section>
    )
}

export default AboutSection
