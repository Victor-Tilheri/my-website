import React from 'react';
import './ContactSection.css';
import EmailImage from './assets/email.png';

function ContactSection() {
    return (
        <section className="contact-section">
            <h1 className="section-title">Contato</h1>
            <div className="contact-container">
                <img src={EmailImage} alt="contact"/>
                <div className="contact-info">
                    <h3>Clique nos links abaixo para falar comigo</h3>
                    <a target="_blank" rel="noreferrer" href="mailto:victortilheri@gmail.com"><i className="far fa-envelope"></i> victortilheri@gmail.com</a>
                    <a target="_blank" rel="noreferrer" href="https://linkedin.com/in/victor-tilheri"><i className="fab fa-linkedin"></i> Victor Tilheri</a>
                    <a target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send?phone=11951640022&text=Ol%C3%A1,%20vim%20atrav%C3%A9s%20do%20seu%20site!"><i className="fab fa-whatsapp"></i> 11 951640022</a>
                </div>
            </div>
        </section>
    )
}

export default ContactSection
