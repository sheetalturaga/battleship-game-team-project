export const SHIPS_OBJ = {
    scout: 2,
    submarine: 3,
    destroyer: 4,
    aircraft: 5,
}

export const DIRECTION_ARR = ['horizontal', 'vertical'];

const defaultState = {
    count: 0,
    gameBoard: [['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''], 
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', '']]
}

function generateComputerBoard() {
    let defaultState = {
        count: 0,
        gameBoard: [['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '']],
  

    }
    // insert random boats
    // for (let row = 0; row < defaultState.gameBoard.length; row++) {
    //     for (let column = 0; column < defaultState.gameBoard[0].length; column++) {
    //         defaultState.gameBoard[row][0] = 'Y';
    //     }
    // }
    let gameBoardPlacerHolder = defaultState.gameBoard;
    // defaultState.gameBoard = placeshipfunction(gameBoardPlacerHolder)

    // TODO OVERLAPPING SHIP COORDINATES
    for (let ship in SHIPS_OBJ) {
        let directionForShip = DIRECTION_ARR[Math.floor((Math.random()*DIRECTION_ARR.length))];
        

        // console.log(directionForShip);
        const horizontalCoord = generateRandomCoordinates(gameBoardPlacerHolder, SHIPS_OBJ[ship], directionForShip);
        let coordX = horizontalCoord[0];
        // console.log("ship length: " + SHIPS_OBJ[ship] + "coordx " + coordX)
        let coordY = horizontalCoord[1];
        // console.log("coordy " + coordY)
        if (directionForShip === 'horizontal') {
            for (let i = coordX; i < coordX + SHIPS_OBJ[ship]; i++) {
                defaultState.gameBoard[i][coordY] = 'Y';
            }
        } else {
            // console.log("vertical HERE");
            for (let i = coordY; i < coordY + SHIPS_OBJ[ship]; i++) {
                defaultState.gameBoard[coordX][i] = 'Y';
            }
        }
    }
    return defaultState.gameBoard;
}

function generateRandomCoordinates(gameboard, length, directionForShip){
    let x = 0;
    let y = 0;
    // && length <= gameboard.length && length > gameboard[0].length
    if (directionForShip === 'horizontal') {
        x = generateRandomNumber(0, gameboard.length - length);
        y = generateRandomNumber(0, gameboard.length - 1);
    }
    else {
        x = generateRandomNumber(0, gameboard.length - 1);
        y = generateRandomNumber(0, gameboard.length - length);
    }
    // coordsOfShipsPlaced.push(xyToIndex(x, y))
    return [x, y]
}

export const generateRandomNumber = (start, end) => {
    return Math.floor(Math.random() * (end - start + 1) + start);
}

export default function ComputerBoardReducer(state, action) {
    if (state === undefined) {
        return generateComputerBoard()
    }
    if (action.type === "CREATE_GAME_BOARD") {
        alert("created a game board!")
    }
    if (action.type === 'player-turn') {
        const value = state[action.x][action.y];
        const boardType = action.boardType;
        if (boardType === 'player') {
            return state;
        }
        if (value === 'Y') {
            state[action.x][action.y] = 'O';
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
