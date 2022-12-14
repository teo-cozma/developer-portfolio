import React from "react";
import Cards from "../components/Cards";
import arrow from "../images/arrow.png"

import '../styles/App.css';
import '../styles/Cards.css';

const Home = () => {

    const ScrollToSection = () => {
        const Portfolio = document.getElementById('Portfolio');
        if (Portfolio) {
            Portfolio.scrollIntoView({ behavior: 'smooth'});
        }
    }
        
    return ( 
        <div className="portfolio-content">

            <main>
                <section id="Presentation">

                    <div className="titles">
                        <h1>Hello, I'm Teo!</h1>
                        <h2>Junior Web Developer | Code initiate | Constant learner</h2>
                        <br/>
                    </div>

                    <div className="description">
                        
                        <p>I am a web developer, consistently learning about tools and technologies for both frontend and backend development. 
                        When working on projects, I harness my creative, technical, and organizational skills, which allow me to structure the development of a project and also adapt my focus, when necessary, from a big-picture vision to zooming in on the small but crucial details.
                        <br />
                        <br />
                        I am looking to become an experienced professional in a challenging environment where I will sharpen and branch out my skillset. 
                        </p>
                        <br /><br />
                        {/* <a href="../assets/Teodora_Cozma_CV_EN.pdf" download="Teodora_Cozma_CV">Here is my CV.</a> */}
                             
                    
                    </div>

                    <br /><br /><br /> 

                    <div className="call-to-action">
                        <a href="#portfolio" id="CTA" onClick={ScrollToSection}>
                            <b>Check out my work</b>
                        </a>
                    </div>
                    
                </section>

                <section id="Portfolio">
                    <h2>Portfolio</h2>
                    <Cards/> 
                </section>

                {/* <section id="About">
                    <h2>About</h2>
                    <About/>
                </section> */}
                
                {/* <section id="Contact">
                    <h2>Contact</h2>
                    <Contact/>
                </section> */}

                <div id="back_to_top">
                    {/* <a href="/"> */}
                        <img src={arrow} alt="back_to_top_arrow" width="30"
                        onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}
                        />
                    {/* </a> */}
                    
                </div>
            </main>

        </div>
     );
}
 
export default Home;