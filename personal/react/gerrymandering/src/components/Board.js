import React, { useContext } from 'react';
import { Context } from './Context'

function Board(props) {
    const {dimensions} = useContext(Context)

    const board = []

    for (let i = 1; i <= dimensions; i++) {
        for (let j = 1; j <= dimensions; j++) {
            board.push(<div className="square" style={{backgroundColor: Math.random() >= 0.5 ? "lightcoral" : "lightblue"}}></div>)
        }
    }

    return (
        <div className="board" style={{
                gridTemplateColumns: `repeat(${dimensions}, calc((100vh / ${dimensions}) - (20vh / ${dimensions}) - 20px))`,
                gridAutoRows: `calc((100vh / ${dimensions}) - (20vh / ${dimensions}) - 20px)`
            }}>
            {board}
        </div>
    );
}

export default React.memo(Board);