//TODO
//1. Generate ai player GOOD
//2. turn sunk ships black GOOD
//3. tracking GOOD
//4. return winner 
//5. two game modes, free play and normal game
//6.Overlapping ships
import generateEmptyBoard from './ComputerBoardAction';
import {incrementCounter, checkIfAllShipsHit, destroyShips, turnPlayerTurnFalse} from './ComputerBoardAction';


export default function ComputerBoardReducer(state, action) {
    if (state === undefined) {
        return generateEmptyBoard()
    }
    if (action.type === "CREATE_GAME_BOARD") {
        alert("created a game board!")
    }
    if (action.type === 'onClick') {
        const value = state.gameBoard[action.x][action.y]; //change state
        const boardType = action.boardType;
        if (boardType === 'player') {
            return state;
        }
        if (value === 'sc') {
            incrementCounter('scout');
            checkIfAllShipsHit('scout') ? destroyShips(state, 'scout') : state.gameBoard[action.x][action.y] = 'O';
        } else if (value === 'sb') {
            incrementCounter('submarine');
            checkIfAllShipsHit('submarine') ? destroyShips(state, 'submarine') : state.gameBoard[action.x][action.y] = 'O';
        } else if (value === 'de') {
            incrementCounter('destroyer');
            checkIfAllShipsHit('destroyer') ? destroyShips(state, 'destroyer') : state.gameBoard[action.x][action.y] = 'O';
        } else if (value === 'ac') {
            incrementCounter('aircraft');
            checkIfAllShipsHit('aircraft') ? destroyShips(state, 'aircraft') : state.gameBoard[action.x][action.y] = 'O';
        } else if (value === 'O') {
            state.gameBoard[action.x][action.y] = 'O';
        } else {
            state.gameBoard[action.x][action.y] = 'X';
        }
        state.isPlayerTurn = false;
        // turnPlayerTurnFalse();
        // check winning condition
        return state;
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
