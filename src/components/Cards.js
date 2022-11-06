import * as React from 'react';
import { projects } from "../data/projects.js";

// Importing stylesheet
import '../styles/Cards.css';


const Cards = () => {
    
    return ( 
        <div className='portfolio'>
            {projects.map((project) => (

                <div className="project"
                    style={{
                        backgroundColor: project.color,
                    }}
                >
                    <div className='imgbox'>
                        <img src={project.image} alt="projects"
                        width="100%" height="100%"
                        className='image'
                        />
                        
                        <div className='card'
                            style={{
                                backgroundColor: project.color2,
                            }}
                        >
                            <h4>{project.subtitle}</h4>
                            <h2 className="title">{project.title}</h2>
                            <p>{project.description}</p>

                            <div className='links'>
                                {project.links.map((link) => (
                                    <ul>
                                        <li>
                                            <a href={link.site}><h3>{link.cta}</h3></a>
                                        </li>
                                        
                                        <li>
                                            <a target="_blank" href={link.repo} rel="noreferrer" ><i class="fab fa-github"/></a>
                                        </li>
                                    </ul>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                
            ))}
        </div>
    );
}
 
export default Cards;
