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
    if(initialState === '') {
        backgroundColor = 'player-miss';
    }

        return (<div onClick={() => {
            const x = props.x;
            const y = props.y;

            const boardState = props.boardState;

            if(backgroundColor === 'background') {
                // check if its hit / miss
                // check if it's a ship
                setState('0');
                boardState[x][y] = 'ship-color';
                props.onClick([...boardState]);
            }
        }}id = "square"></div>)
}