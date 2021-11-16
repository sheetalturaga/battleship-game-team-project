import "./css/Square.css";
import { useState } from "react";

export default function Square(props) {
    // unselected: 'white'
    // selectedHit : 'red'
    // selectedMiss : 'gray'
    // hover: 'light grey'
    // shipColor: 'blue'
    // destroyedShip: 'black'

    // states == unselected, selected / hit, selected /miss, hover
    
    // position of each square selected
    // const position = {
    //     currentX : props.x ,
    //     currentY : props.y
    // };
    const [initialState, setState] = useState('');
    
    let backgroundColor = 'background';
    if(initialState === 'X') {
        backgroundColor = 'player-miss';
    }
    else if (initialState === 'O') {
        backgroundColor = 'player-hit';
    }

        return (<div onClick={() => {
            const x = props.x;
            const y = props.y;

            const boardState = props.boardState;

            //if it's a miss
            if(backgroundColor === 'background') {
                // check if its hit / miss
                // check if it's a ship
                setState('X');

                // boardState[x][y] = 'ship-color';
                props.onClick([...boardState]);
            }
            //if it's a hit
            // else if (backgroundColor === 'background') {
            //     setState('O');
            //     props.onClick([...boardState]);
            // }
        }}id = "square" class = {backgroundColor}></div>)
}