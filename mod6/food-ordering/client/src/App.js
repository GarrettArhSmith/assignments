import React, { useContext } from 'react'
import './App.css';
import { Switch, Route } from 'react-router-dom'
import { UserContext } from './context/UserProvider'
import Navbar from './components/Navbar'
import Auth from './components/Auth'
import Home from './components/Home'


function App() {
    const { token, logout } = useContext(UserContext)

    return (
        <div className="App">
            { token && <Navbar logout={logout} /> }
            <Switch>
                <Route exact path="/">
                    { token ? <Home /> : <Auth /> }
                </Route>
            </Switch>
        </div>
    );
}

export default App;
