import generateEmptyBoard from './ComputerBoardAction';
import {checkBoardIfValidShips, winOrLose, resetArray, resetCounter, resetMapOfShipCoords, incrementCounter, checkIfAllShipsHit, destroyShips} from './ComputerBoardAction';



export default function ComputerBoardReducer(state, action) {
    if (state === undefined) {
        state = generateEmptyBoard();
        while (!checkBoardIfValidShips(state)) {
            console.log("here");
            resetArray();
            resetMapOfShipCoords();
            state = generateEmptyBoard();
        }
        return state;
    }
    if (action.type === 'onClick') {
        const value = state.gameBoard[action.x][action.y];
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
        } else if (value === '') {
            state.gameBoard[action.x][action.y] = 'X';
        } else {
            if (winOrLose) {
                alert ("Game Over! YOU WON!")
            } else {
                return state;
            }
        }
        state.isPlayerTurn = false;
        
        return state;
    }
    
    

    if (action.type === 'RESET' || action.type === 'RESET_GAMEBOARD_ONLY') {
        state = generateEmptyBoard();
        resetMapOfShipCoords();
        resetCounter();
        return state;
    }
    return state;
}