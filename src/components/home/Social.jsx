import React from "react";
import {FiTwitter, FiGithub, FiLinkedin, FiInstagram} from "react-icons/fi";

const Social = () => {
    return (
        <div className="home__social">
            <a href="https://www.instagram.com/ramramsa.sa/?hl=en" className="home__social-icon" target="_blank">
                <FiInstagram />
            </a>
            <a href="https://github.com/CodeCraftman2" className="home__social-icon" target="_blank">
                <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/yagya-saini-05739a267/" className="home__social-icon" target="_blank">
                <FiLinkedin />
            </a>
        </div> 
    ); 
}

export default Social;