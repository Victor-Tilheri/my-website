import React from 'react';
import './SkillsSection.css';
import Html5Icon from './assets/tech/html5.png';
import Css3Icon from './assets/tech/css3.png';
import NodeIcon from './assets/tech/node.png';
import MySQLIcon from './assets/tech/mysql.png';
import ReactIcon from './assets/tech/react.png';
import JavaScriptIcon from './assets/tech/js.png';
import BootstrapIcon from './assets/tech/bootstrap.png';
import ExpressIcon from './assets/tech/express.png';
import MongoDBIcon from './assets/tech/mongodb.png';

import SkillsImg from './assets/skills.png';

function SkillsSection() {
    return (
        <section className="skills-section">
            <h1 className="section-title">Habilidades</h1>
            <div className="skills-container">
                <div className="text-container">
                    <div className="front-end">
                        <h3 className="tech-type">Front-end</h3>
                        <ul>
                            <li><img className="tech-icon" alt="javascript icon" src={JavaScriptIcon}/>JavaScript ES6</li>
                            <li><img className="tech-icon" alt="html5" src={Html5Icon}/>HTML5</li>
                            <li><img className="tech-icon" alt="css3 icon" src={Css3Icon}/>CSS3</li>
                            <li><img className="tech-icon" alt="react icon" src={ReactIcon}/>React</li>
                            <li><img className="tech-icon" alt="bootstrap icon" src={BootstrapIcon}/>Bootstrap</li>
                        </ul>
                    </div>
                    <div className="back-end">
                        <h3 className="tech-type">Back-end</h3>
                        <ul>
                            <li><img className="tech-icon" alt="node icon" src={NodeIcon}/>Node</li>
                            <li><img className="tech-icon" alt="express icon" src={ExpressIcon}/>Express</li>
                            <li><img className="tech-icon" alt="mysql icon" src={MySQLIcon}/>MySQL</li>
                            <li><img className="tech-icon" alt="mongodb icon" src={MongoDBIcon}/>MongoDB</li>
                        </ul>
                    </div>
                </div>
                <img className="skills-img" alt="coder" src={SkillsImg} />
            </div>
        </section>
    )
}

export default SkillsSection
