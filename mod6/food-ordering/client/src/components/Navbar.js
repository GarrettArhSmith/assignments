import React from 'react';
import { Link } from 'react-router-dom'

function Navbar(props) {
    const { logout, userRoles } = props

    return (
        <nav>
            <Link to="/">HOME</Link>
            <Link to="/profile">PROFILE</Link>
            { userRoles.includes("restaurant") &&
                <Link to="/my-restaurants">MY RESTAURANTS</Link> 
            }
            { userRoles.includes("admin") &&
                <Link to="/admin">ADMIN</Link>
            }
            <Link to="/cart">CART</Link>
            <button onClick={logout}>LOGOUT</button>
        </nav>
    );
}

export default Navbar;