import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";


function Footer(props) {
    return (
        <footer>
            <ul>
                <a href="https://github.com/GarrettArhSmith"><li><FaGithub /></li></a>
                <a href="https://www.linkedin.com/in/garrett-smith-b9712b98/"><li><FaLinkedin /></li></a>
                <a href="https://twitter.com/GarrettArhSmith"><li><FaTwitter /></li></a>
            </ul>
        </footer>
    );
}

export default Footer;