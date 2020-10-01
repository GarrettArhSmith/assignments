import React, { useContext } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import './SavedList.css'
import { Context } from '../../../Context'

import Saved from './Saved';

function SavedList(props) {
    const {saved} = useContext(Context)
    return (
        <ul className="savedList">
            <h3>Saved Locations</h3>
            {saved.map((city, i) => <Link to="">
                <Saved 
                    key={city.city_name + city.state_code + i} 
                    cityName={city.city_name} 
                    stateCode={city.state_code} 
                />
            </Link>
            )}
        </ul>
    );
}

export default SavedList;