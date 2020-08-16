import React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function NavBar() {
    return(
        <div className="navBar">
            <span><a href="#" className="logo">Start Bootstrap</a></span>
            <ul>
                <a href="#"><li>HOME</li></a>
                <a href="#"><li>ABOUT</li></a>
                <a href="#"><li>SAMPLE POST</li></a>
                <a href="#"><li>CONTACT</li></a>
            </ul>
            <button className="menu">MENU <FontAwesomeIcon icon={faBars} /></button>
        </div>
    )
}

export default NavBar