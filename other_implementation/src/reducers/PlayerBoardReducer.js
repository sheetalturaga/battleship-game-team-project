
import generateEmptyBoard, { checkIfValidCoordinate } from './PlayerBoardAction';
import {generateRandomNumber, incrementCounter, checkIfAllShipsHit, destroyShips, addUsedSquare} from './PlayerBoardAction';

export default function PlayerBoardReducer(state, action) {
    
    if (state === undefined) {
        return generateEmptyBoard()

    }

    if (action.type === "CREATE_GAME_BOARD") {
        alert("created a game board!")
    }
    // if (action.boardType === "computer") {
    //     return state;
    // }
    if (action.type === 'onClick') {
        const value = state[action.x][action.y];
        const boardType = action.boardType;

        if (boardType === 'computer') {
            let xCoord = generateRandomNumber(0, state.length - 1);
            let yCoord = generateRandomNumber(0, state.length - 1);
            while (!checkIfValidCoordinate(state, xCoord, yCoord)) {
                xCoord = generateRandomNumber(0, state.length - 1);
                yCoord = generateRandomNumber(0, state.length - 1);
                continue;
            }

            if (state[xCoord][yCoord] === 'sc') {
                incrementCounter('scout');
                checkIfAllShipsHit('scout') ? destroyShips(state, 'scout') : state[xCoord][yCoord] = 'O';
                if (state[xCoord][yCoord] = 'O') {
                addUsedSquare(xCoord, yCoord)}
            } else if (state[xCoord][yCoord] === 'sb') {
                incrementCounter('submarine');
                checkIfAllShipsHit('submarine') ? destroyShips(state, 'submarine') : state[xCoord][yCoord] = 'O';
                if (state[xCoord][yCoord] = 'O') {
                    addUsedSquare(xCoord, yCoord)}
            } else if (state[xCoord][yCoord] === 'de') {
                incrementCounter('destroyer');
                checkIfAllShipsHit('destroyer') ? destroyShips(state, 'destroyer') : state[xCoord][yCoord] = 'O';
                if (state[xCoord][yCoord] = 'O') {
                    addUsedSquare(xCoord, yCoord)}
            } else if (state[xCoord][yCoord] === 'ac') {
                incrementCounter('aircraft');
                checkIfAllShipsHit('aircraft') ? destroyShips(state, 'aircraft') : state[xCoord][yCoord] = 'O';
                if (state[xCoord][yCoord] = 'O') {
                    addUsedSquare(xCoord, yCoord)}
            
                // } else if (state[xCoord][yCoord] === 'O') {
            //     state[xCoord][yCoord] = 'O';
            } else {
                state[xCoord][yCoord] = 'X';
                addUsedSquare(xCoord, yCoord);
            }
        }

        return [...state];
    }

    if (action.type === 'RESET' || action.type === 'RESET_GAMEBOARD_ONLY') {
        for (let i = 0; i < state.length; i++) {
            for (let j = 0; j < state.length; j++){
                state[i][j] = '';
            }
        }
        return [...state];
    }
    return state;
}
