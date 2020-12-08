import React from 'react';
import { Link } from 'react-router-dom'

function Nav(props) {
    const { logout } = props

    return (
        <nav>
            <Link to="/" className="navLink">Home</Link>
            <Link to="/profile" className="navLink">Profile</Link>
            <button onClick={() => logout()} className="logout">Log Out</button>
        </nav>
    );
}

export default Nav;