import React from 'react';
import { Link } from 'react-router-dom'

function Nav(props) {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
        </nav>
    );
}

export default Nav;