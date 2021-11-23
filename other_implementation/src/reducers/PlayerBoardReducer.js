
import generateEmptyBoard, { checkIfValidCoordinate } from './PlayerBoardAction';
import {generateRandomNumber, incrementCounter, checkIfAllShipsHit, destroyShips, addUsedSquare} from './PlayerBoardAction';

export default function PlayerBoardReducer(state, action) {
    
    if (state === undefined) {
        return generateEmptyBoard()

    }

    if (action.type === "CREATE_GAME_BOARD") {
        alert("created a game board!")
    }

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

            if (state[xCoord][yCoord] === 'sct') {
                incrementCounter('scout');
                checkIfAllShipsHit('scout') ? destroyShips(state, 'scout') : state[xCoord][yCoord] = 'O';
                if (state[xCoord][yCoord] === 'O') {
                addUsedSquare(xCoord, yCoord)}
            } else if (state[xCoord][yCoord] === 'sbe') {
                incrementCounter('submarine');
                checkIfAllShipsHit('submarine') ? destroyShips(state, 'submarine') : state[xCoord][yCoord] = 'O';
                if (state[xCoord][yCoord] === 'O') {
                    addUsedSquare(xCoord, yCoord)}
            } else if (state[xCoord][yCoord] === 'der') {
                incrementCounter('destroyer');
                checkIfAllShipsHit('destroyer') ? destroyShips(state, 'destroyer') : state[xCoord][yCoord] = 'O';
                if (state[xCoord][yCoord] === 'O') {
                    addUsedSquare(xCoord, yCoord)}
            } else if (state[xCoord][yCoord] === 'act') {
                incrementCounter('aircraft');
                checkIfAllShipsHit('aircraft') ? destroyShips(state, 'aircraft') : state[xCoord][yCoord] = 'O';
                if (state[xCoord][yCoord] === 'O') {
                    addUsedSquare(xCoord, yCoord)}
            } else {
                state[xCoord][yCoord] = 'X';
                addUsedSquare(xCoord, yCoord);
            }
        }

        return [...state];
    }

    if (action.type === 'RESET' || action.type === 'RESET_GAMEBOARD_ONLY') {
        state = generateEmptyBoard();
        return state;
    }
    return state;
}
