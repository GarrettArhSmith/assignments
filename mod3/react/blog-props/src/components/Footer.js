import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return(
        <footer>
            <ul>
                <li>
                    <span className="fa-stack fa-2x icon">
                        <FontAwesomeIcon icon={faCircle} className="fa-stack-2x"/>
                        <FontAwesomeIcon icon={faTwitter} className="fa-stack-1x" inverse />
                    </span>
                </li>
                <li>
                    <span className="fa-stack fa-2x icon">
                        <FontAwesomeIcon icon={faCircle} className="fa-stack-2x"/>
                        <FontAwesomeIcon icon={faFacebookF} className="fa-stack-1x" inverse />
                    </span>
                </li>
                <li>
                    <span className="fa-stack fa-2x icon">
                        <FontAwesomeIcon icon={faCircle} className="fa-stack-2x"/>
                        <FontAwesomeIcon icon={faGithub} className="fa-stack-1x" inverse />
                    </span>
                </li>
            </ul>
            <p>Copyright © Your Website 2020</p>
        </footer>
    )
}

export default Footer