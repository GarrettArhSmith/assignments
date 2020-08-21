import React from "react"

import NavBar from './NavBar'

function Header() {
    return(
        <header>
            <NavBar />
            <span>
                <h1>Clean Blog</h1>
                <p>A Blog Theme by Start Bootstrap</p>
            </span>
        </header>
    )
}

export default Header