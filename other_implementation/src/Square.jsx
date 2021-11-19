// import SmallerSquare from "./SmallerSquare";
import React, { useContext, useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { BoardClickCountContext } from './BoardClickCountProvider';
import './css/Square.css';
import { useState } from "react";


// function exclamationReducer(state, action) {
//     if (action.type === "CLICK") {
//         if (action.symbol === 'X') {
//             return '!'
//         } else {
//             return '?'
//         }
//     }
//     return state;
// }
export const turns = ["player", "computer"];

export function Square(props) {
    const [globalCountState, globalCountDispatch] = useContext(BoardClickCountContext);
    let symbol = props.symbol;
    const boardType = props.boardType;
    // useEffect(() => alert(symbol + " just played"), [symbol]);
    // const [state, setState] = useState(props.symbol);

    let backgroundColor = 'background';

    if (symbol === 'X') {
        backgroundColor = 'player-miss';
    } else if (symbol === 'O') {
        backgroundColor = 'player-hit';
    } else if (symbol === 'Y') {
        backgroundColor = 'ship-color';
    }

    const dispatch = useDispatch();

    return (<div onClick={() => {
        dispatch({
            type: 'player-turn',
            x: props.x,
            y: props.y,
            boardType
        })
        globalCountDispatch({
            type: "boardClick",
            symbol,
        })
    }
    } id="square" class={backgroundColor}>
        {symbol}
    </div>);
}