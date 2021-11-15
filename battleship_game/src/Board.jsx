import Square from './Square';
import { useState } from 'react';
import './css/Board.css';

export const ROWS = 10;
export const COLUMNS = 10;

// export const SQUARE_OBJ = {
//     unique_id: '',
//     empty: 'empty',
//     hit: 'hit',
//     miss: 'miss',
//     ship_sunk: 'ship_sunk',
// };

export default function Board() {
    const [boardState, setBoard]= useState([
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '']
    ]);
    const boardComponent = [];

    for (let i = 0; i < boardState.length; i++) {
        let row = boardState[i];
        for (let j = 0; j < row.length; j++) {
            boardComponent.push((<Square symbol={boardState[i][j]} 
                onClick={setBoard} boardState={boardState} x={i} y={j} 
                />)) 
        }
    }

    return (<div id = "board">
        {boardComponent}
    </div>)
}