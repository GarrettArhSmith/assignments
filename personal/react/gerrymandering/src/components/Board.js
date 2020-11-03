import React, { useContext } from 'react';
import { Context } from './Context'
import Circle from './Circle'

function Board(props) {
    const {dimensions} = useContext(Context)

    const board = []

    for (let i = 1; i <= dimensions ** 2; i++) {
        board.push(<Circle />)
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