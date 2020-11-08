import React, { useContext } from 'react';
import { Context } from './Context'

function Slider(props) {
    const {dimensions, setDimensions, setChance} = useContext(Context)

    function changeDimensions(e) {
        setDimensions(e.target.value)
        const rand = Math.random()
        setChance(rand <= 0.1 ? 0.1 : rand)
    }

    return (
        <>
            <h1>{dimensions} x {dimensions}</h1>
            <input type="range" min="2" max="15" value={dimensions} className="dimSlider" onChange={changeDimensions} />
        </>
    );
}

export default Slider;