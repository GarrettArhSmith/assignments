import React, { useContext } from 'react';
import './SavedList.css'
import { Context } from '../../../Context'

import Saved from './Saved';

function SavedList(props) {
    const {saved} = useContext(Context)
    return (
        <ul className="savedList">
            <h3>Saved Locations</h3>
            {saved.map((city, i) => <Saved key={city.city_name + city.state_code + i} cityName={city.city_name} stateCode={city.state_code} />)}
        </ul>
    );
}

export default SavedList;