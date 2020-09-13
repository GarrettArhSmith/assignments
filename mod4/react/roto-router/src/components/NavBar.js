import React from 'react';
import {Link, Switch, Route} from 'react-router-dom'
import Home from './routes/Home'
import About from './routes/About'
import Services from './routes/Services'

function NavBar(props) {
    return (
        <>
            <nav>
                <h1 className="logo">ROTO-<span className="secondary">ROUTER</span></h1>
                <ul>
                    <Link to="/" style={{flex: 1}}> <li>Home</li> </Link>
                    <Link to="/about" style={{flex: 1}}> <li>About</li> </Link>
                    <Link to="/services" style={{flex: 1}}> <li>Services</li> </Link>
                </ul>
            </nav>

            <Switch>
                <Route exact path="/"> <Home /> </Route>
                <Route path="/about"> <About /> </Route>
                <Route path="/services"> <Services /> </Route>
            </Switch>
        </>
    );
}

export default NavBar;