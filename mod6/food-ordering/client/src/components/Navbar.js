import React from 'react';
import { Link } from 'react-router-dom'

function Navbar(props) {
    const { logout } = props

    return (
        <nav>
            <Link to="/">HOME</Link>
            <button onClick={logout}>LOGOUT</button>
        </nav>
    );
}

export default Navbar;