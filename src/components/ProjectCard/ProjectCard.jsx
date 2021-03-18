import React from 'react';
import './ProjectCard.css';

function ProjectCard(props) {
    return (
        <div className="project-card">
            <img src={props.projectImg} alt="project 1"/>
            <div className="project-info">
                <h3>{props.projectName}</h3>
                <p>{props.projectDesc}</p>
                <div className="buttons-container">
                {props.projectDemo ? <a href="#"target="_blank"><i className="fas fa-eye"></i> Visualizar</a> : <span></span>}
                    <a href={props.projectGithub} target="_blank"><i className="fab fa-github"></i> Github</a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
