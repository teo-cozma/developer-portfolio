import * as React from 'react';
import { projects } from "../data/projects.js";

// Importing stylesheet
import '../styles/Cards.css';


const Cards = () => {

    return (
        <div className='portfolio'>
            {projects.map((project, id, idx) => (

                <div key={id} className="project" style={{ backgroundColor: project.color }}>
                    <div className='imgbox'>
                        <img src={project.image} alt="projects" style={{objectFit: project.style}}/>

                        <div className='card' style={{ backgroundColor: project.color2 }}>
                            <h4>{project.subtitle}</h4>
                            <h2 className="title">{project.title}</h2>
                            <p>{project.description}</p>

                            <div className='links'>
                                <ul>
                                    <li><a target="_blank" rel="noreferrer" href={project.site}><h3>{project.cta}</h3></a></li>
                                    <li><a target="_blank" href={project.repo} rel="noreferrer" ><i className="fab fa-github" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            ))}
        </div>
    );
}

export default Cards;
