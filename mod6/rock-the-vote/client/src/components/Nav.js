import React from 'react';
import { Link } from 'react-router-dom'

function Nav(props) {
    return (
        <nav>
            <Link to="/" className="navLink">Home</Link>
            <Link to="/profile" className="navLink">Profile</Link>
        </nav>
    );
}

export default Nav;