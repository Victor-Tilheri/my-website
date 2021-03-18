import React from 'react';
import './ProjectsSection.css';
import ProjectCard from '../ProjectCard/ProjectCard.jsx';

function ProjectsSection() {
    return (
        <section className="projects-section">
            <h1 className="section-title">Projetos</h1>
            <div className="projects-container">
                <ProjectCard 
                    projectName="Cryptocurrency Now" 
                    projectImg="https://media.giphy.com/media/eZYLbhCq3Obt2OdhEI/giphy.gif" 
                    projectDesc="Projeto desenvolvido em React, consome uma API externa e retorna dados sobre várias cripto-moedas em tempo real."
                    // projectDemo="#"
                    projectGithub="https://github.com/Victor-Tilheri/cryptocurrency-now"
                />
                <ProjectCard 
                    projectName="Orbs" 
                    projectImg="https://media.giphy.com/media/aUaawV2xmp0TwAq7E6/giphy.gif" 
                    projectDesc="Jogo desenvolvido em Node + Socket.IO, consiste em um clone do jogo mundialmente conhecido AgarIO."
                    // projectDemo="#"
                    projectGithub="https://github.com/Victor-Tilheri/orbs"
                />
                <ProjectCard 
                    projectName="DrawIT" 
                    projectImg="https://media.giphy.com/media/Efmqa3AxNmpoI76Mjg/giphy.gif" 
                    projectDesc="Projeto desenvolvido utilizando Node + Socket.IO, consiste em uma lousa virtual onde todos podem desenhar ao mesmo tempo."
                    // projectDemo="#"
                    projectGithub="https://github.com/Victor-Tilheri/DrawIT"
                />
            <h1>Veja mais em meu GitHub</h1>
            </div>
        </section>
    )
}

export default ProjectsSection
