import React from "react";

import '../styles/App.css';
import '../styles/Navbar.css';

const Navbar = () => {

    return ( 
        <div className="Navbar">
            <nav>
                <a href="/developer-portfolio">
                    <img src={process.env.PUBLIC_URL + "/assets/signature2.png"} alt="logo" id="logo" width="80" height="55"/>
                </a>
                <ul>
                    <li>
                        <a target="_blank" href="https://teodora-cozma.vercel.app/" rel="noreferrer" ><i className="fa fa-paint-brush"/></a>
                    </li>

                    <li>
                        <a target="_blank" href="https://github.com/teo-cozma" rel="noreferrer" ><i className="fab fa-github"/></a>
                    </li>
                    
                    <li>
                        <a target="_blank" href="https://www.linkedin.com/in/teo-cozma/" rel="noreferrer" ><i className="fab fa-linkedin"></i></a>
                    </li>

                    <li>
                        <a target="_blank" href="https://www.behance.net/teocozma" rel="noreferrer" ><i className="fab fa-behance"></i></a>                    
                    </li>
                </ul>
            </nav>
        </div> 
    );
}
 
export default Navbar;