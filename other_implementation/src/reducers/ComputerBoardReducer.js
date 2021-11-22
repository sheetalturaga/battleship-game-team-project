//TODO
//1. Generate ai player
//2. turn sunk ships black GOOD
//3. tracking GOOD and 
//4. return winner 
//5. two game modes, free play and normal game
//6.Overlapping ships
import generateEmptyBoard from './ComputerBoardAction';
import {incrementCounter, checkIfAllShipsHit, destroyShips} from './ComputerBoardAction';


export default function ComputerBoardReducer(state, action) {
    if (state === undefined) {
        return generateEmptyBoard()
    }
    if (action.type === "CREATE_GAME_BOARD") {
        alert("created a game board!")
    }
    if (action.type === 'onClick') {
        const value = state[action.x][action.y]; //change state
        const boardType = action.boardType;
        if (boardType === 'player') {
            return state;
        }
        if (value === 'sc') {
            incrementCounter('scout');
            checkIfAllShipsHit('scout') ? destroyShips(state, 'scout') : state[action.x][action.y] = 'O';
        } else if (value === 'sb') {
            incrementCounter('submarine');
            checkIfAllShipsHit('submarine') ? destroyShips(state, 'submarine') : state[action.x][action.y] = 'O';
        } else if (value === 'de') {
            incrementCounter('destroyer');
            checkIfAllShipsHit('destroyer') ? destroyShips(state, 'destroyer') : state[action.x][action.y] = 'O';
        } else if (value === 'ac') {
            incrementCounter('aircraft');
            checkIfAllShipsHit('aircraft') ? destroyShips(state, 'aircraft') : state[action.x][action.y] = 'O';
        } else if (value === 'O') {
            state[action.x][action.y] = 'O';
        } else {
            state[action.x][action.y] = 'X';
        }
        
        
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
