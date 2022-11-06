import React from "react";

import '../styles/App.css';
import '../styles/Navbar.css';

const Navbar = () => {

    return ( 
        <div className="Navbar" marginBottom="0.5em">
            <nav>
                <a href="/">
                    <img src={process.env.PUBLIC_URL + "/assets/signature2.png"} alt="logo" id="logo" width="80" height="55"/>
                </a>
                <ul>
                    <li>
                        <a target="_blank" href="https://teodora-cozma-art.netlify.app/" rel="noreferrer" ><i class="fa fa-paint-brush"/></a>
                    </li>

                    <li>
                        <a target="_blank" href="https://github.com/teo-cozma" rel="noreferrer" ><i class="fab fa-github"/></a>
                    </li>
                    
                    <li>
                        <a target="_blank" href="https://www.linkedin.com/in/teo-cozma/" rel="noreferrer" ><i class="fab fa-linkedin"></i></a>
                    </li>

                    <li>
                        <a target="_blank" href="https://www.behance.net/teocozma" rel="noreferrer" ><i class="fab fa-behance"></i></a>                    
                    </li>
                </ul>
            </nav>
        </div> 
    );
}
 
export default Navbar;