import Square from './Square';
import { useState } from 'react';
import './ComputerBoard.css';

export default function ComputerBoard() {
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

    return (<div id = "computerboard">
        {boardComponent}
        ComputerBoard</div>)
}