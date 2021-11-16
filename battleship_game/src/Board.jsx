import Square from './Square';
import { useState } from 'react';
import './css/Board.css';

export const ROWS = 10;
export const COLUMNS = 10;
export const coordsOfShipsPlaced = [];
export const SQUARE_OBJ = {
    empty: 'empty',
    hit: 'hit',
    miss: 'miss',
    destroyed_ship: 'destroyed_ship',
};

export const SHIPS_OBJ = {
    scout: 2,
    submarine: 3,
    destroyer: 4,
    aircraft: 5,
}

export const DIRECTION_ARR = ["horizontal", "vertical"];


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
    placingShips(boardComponent)
    return (<div id = "board">
        {boardComponent}
    </div>)
}

export const xyToIndex = (x, y) => {
    return x * ROWS + y;
}

export const generateRandomNumber = (start, end) => {
    return Math.floor(Math.random() * (end - start + 1) + start);
}

// export const checkIfValidPosition = () => {

// }

export const generateRandomCoordinates = (boardComponent, length, directionForShip) => {
    const x = 0;
    const y = 0;
    if (directionForShip === 'horizontal' && length <= boardComponent.length && length > boardComponent[0].length) {
        x = generateRandomNumber(0, boardComponent.length - length);
        y = generateRandomNumber(0, boardComponent.length - 1);
    }
    else {
        x = generateRandomNumber(0, boardComponent.length - 1);
        y = generateRandomNumber(0, boardComponent.length - length);
    }
    coordsOfShipsPlaced.push(xyToIndex(x, y))
    return [x, y]
}
// 0, 1, 2, 3, 4 
// a, a, a, x, a 5-5 = 0
// a, a, a, x, a 5-4
// a, a, a, x, x 5-2+1 = 4
// a, a, a, a, a 5-3+1 = 3
// randomly generate x,y coord for ship
// set board to 'O'
// push square and set color for ship
export const placingShips = (boardComponent) => { 
    for (const ship in SHIPS_OBJ) {
        let directionForShip = _.shuffle(DIRECTION_ARR[0]);
        const horizontalCoord = generateRandomCoordinates(boardComponent, SHIPS_OBJ.ship, directionForShip);
        const coordX = horizontalCoord[0];
        const coordY = horizontalCoord[1];
        if (directionForShip === 'horizontal') {
            for (let i = coordX; i < coordX + SHIPS_OBJ.ship; i++) {
                boardComponent[i][coordY] = 'Y';
            }
        } else if (directionForShip === 'vertical') {
            for (let i = coordY; i < coordY + SHIPS_OBJ.ship; i++) {
                boardComponent[coordX][i] = 'Y';
            }
        }
    }
} 