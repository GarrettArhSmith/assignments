import React, { useContext } from 'react';
import './UnitChanger.css'
import { Context } from '../../../Context'

function UnitChanger(props) {
    const {changeUnit} = useContext(Context)

    return (
        <select onChange={e => changeUnit(e.target.value)}>
            <option value="f">°F</option>
            <option value="c">°C</option>
        </select>
    );
}

export default UnitChanger;