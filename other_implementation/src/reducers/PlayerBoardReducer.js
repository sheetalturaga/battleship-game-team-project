
import generateEmptyBoard from './PlayerBoardAction';
import {incrementCounter, checkIfAllShipsHit, destroyShips} from './PlayerBoardAction';

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
            // const xCoord = generateRandomNumber(0, state.length);
            // const yCoord = generateRandomNumber(0, state.length);
            // while (checkIfValidCoordinate != true) {
            //     const xCoord = generateRandomNumber(0, state.length);
            //     const yCoord = generateRandomNumber(0, state.length);
            // }
            // state[xCoord][yCoord] = 'Y';
            return [...state];
        }
        
        // if (value === 'X') {
        //     state[action.x][action.y] = 'O';
        // } else {
        //     state[action.x][action.y] = 'X';
        // }
        // check winning condition

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
