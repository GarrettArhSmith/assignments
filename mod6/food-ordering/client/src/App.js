import React, { useContext } from 'react'
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom'
import { UserContext } from './context/UserProvider'
import Navbar from './components/Navbar'
import Auth from './components/Auth'
import Home from './components/Home'
import Profile from './components/Profile'
import MyRestaurants from './components/MyRestaurants'
import Admin from './components/Admin'
import Cart from './components/Cart'
import RestaurantPage from './components/RestaurantPage';


function App() {
    const { token, logout, user: { roles } } = useContext(UserContext)

    return (
        <div className="App">
            { token && <Navbar 
                            logout={logout} 
                            userRoles={roles}
                        /> 
            }
            <Switch>
                <Route exact path="/">
                    { token ? <Home /> : <Auth /> }
                </Route>
                <Route path="/profile">
                    { token ? <Profile /> : <Auth /> }
                </Route>
                <Route path="/my-restaurants">
                    { (token && roles.includes("restaurant")) ?
                    <MyRestaurants /> : <Redirect to="/" />
                    }
                </Route>
                <Route path="/admin">
                    { (token && roles.includes("admin")) ?
                    <Admin /> : <Redirect to="/" />
                    }
                </Route>
                <Route path="/cart">
                    { token ? <Cart /> : <Auth /> }
                </Route>
                <Route path="/restaurant/:restaurantId">
                    { token ? <RestaurantPage /> : <Auth /> }
                </Route>
            </Switch>
        </div>
    );
}

export default App;
