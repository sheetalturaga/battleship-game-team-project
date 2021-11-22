export const SPACE_LENGTH = 100;

export const SHIPS_OBJ = {
    scout: 2,
    submarine: 3,
    destroyer: 4,
    aircraft: 5,
}

export const MAP_OF_SHIP_COORDS = {
    scout: [],
    submarine: [],
    destroyer: [],
    aircraft: []
}

export const UNIQUE_IDS = {
    scout: 'sc',
    submarine: 'sb',
    destroyer: 'de',
    aircraft: 'ac'
}

export const COUNTER = {
    scout: 0,
    submarine: 0,
    destroyer: 0,
    aircraft: 0
}

// export const TURN = {
//     isPlayerTurn: true
// }

// export function turnPlayerTurnFalse() {
//     TURN.isPlayerTurn = false;
// }

export const DIRECTION_ARR = ['horizontal', 'vertical'];

export const AVAILABLE_SPACES = [];

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
    ['', '', '', '', '', '', '', '', '', '']],
    isPlayerTurn: true,
    //useselector, to check if t/f
}

export default function generateEmptyBoard() {
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
        isPlayerTurn: true,
  

    }

    let gameBoardPlacerHolder = defaultState.gameBoard;
    // let gameBoardPlacerHolder = defaultState.gameBoard;
    // defaultState.gameBoard = placeshipfunction(gameBoardPlacerHolder)
    for (let row = 0; row < gameBoardPlacerHolder.length; row++) {
        for (let column = 0; column < gameBoardPlacerHolder.length; column++) {
            AVAILABLE_SPACES.push([row, column]);
        }
    }
    //remove i, j from availabke spaces
    //when generating coords, check if i, j exist, if it doesnt then use function to check that the spaces are available for the direction
    // TODO OVERLAPPING SHIP COORDINATES
    for (let ship in SHIPS_OBJ) {
        let directionForShip = DIRECTION_ARR[Math.floor((Math.random()*DIRECTION_ARR.length))];
        let horizontalCoord = generateRandomCoordinates(gameBoardPlacerHolder, SHIPS_OBJ[ship], directionForShip);
        let coordX = horizontalCoord[0];
        let coordY = horizontalCoord[1];
        // console.log(AVAILABLE_SPACES);
        while (!validCoordinate(coordX, coordY, SHIPS_OBJ[ship], directionForShip)) {
            horizontalCoord = generateRandomCoordinates(gameBoardPlacerHolder, SHIPS_OBJ[ship], directionForShip);
            // console.log("generating new coordinates");
            coordX = horizontalCoord[0];
            coordY = horizontalCoord[1];
            break;
        } 
        if (directionForShip === 'horizontal') {
            for (let i = coordX; i < coordX + SHIPS_OBJ[ship]; i++) {
                MAP_OF_SHIP_COORDS[ship].push([i, coordY]);
                let index = findIndexToDelete(i, coordY);
                AVAILABLE_SPACES.splice(index, 1);
                // console.log("horizontal splice " + AVAILABLE_SPACES[0]);
                defaultState.gameBoard[i][coordY] = UNIQUE_IDS[ship];
                if (MAP_OF_SHIP_COORDS[ship].length === 3 * SHIPS_OBJ[ship]) {
                    generateShipCoordinates(ship, SHIPS_OBJ[ship], MAP_OF_SHIP_COORDS[ship].length);
                }
            } 
        }else {
            for (let i = coordY; i < coordY + SHIPS_OBJ[ship]; i++) {
                MAP_OF_SHIP_COORDS[ship].push([coordX, i]);
                let index = findIndexToDelete(coordX, i);
                AVAILABLE_SPACES.splice(index, 1);
                // console.log("vertical splice " + AVAILABLE_SPACES[0]);
                defaultState.gameBoard[coordX][i] = UNIQUE_IDS[ship];
                if (MAP_OF_SHIP_COORDS[ship].length === 3 * SHIPS_OBJ[ship]) {
                    generateShipCoordinates(ship, SHIPS_OBJ[ship], MAP_OF_SHIP_COORDS[ship].length);
                }
            }
        }
    }
    return defaultState;
}

function findIndexToDelete(xCoord, yCoord) {
    for (let i = 0; i < SPACE_LENGTH; i++) {
        if (AVAILABLE_SPACES[i] === [xCoord, yCoord]) {
            return i;
        }
    }
}

function coordinateExists(xCoord, yCoord) {
    for (let i = 0; i < SPACE_LENGTH; i++) {
        if (AVAILABLE_SPACES[i] === [xCoord, yCoord]) {
            return true;
        }
    }
    return false;
}

function validCoordinate(xCoord, yCoord, length, directionForShip) {
    if (directionForShip === 'horizontal') {
        for (let i = 0; i < length; i++) {
            if (!coordinateExists(xCoord, yCoord + i)) {
                return false;
            }
        }
        return true;
    } else {
        for (let i = 0; i < length; i++) {
            if (!coordinateExists(xCoord + i, yCoord)) {
                return false;
            }
        }
        return true;
    }

}

function generateShipCoordinates(ship, length, arrLength) {
        MAP_OF_SHIP_COORDS[ship].splice(0, arrLength - length); 
    console.log(MAP_OF_SHIP_COORDS);
}

function generateRandomCoordinates(gameboard, length, directionForShip){
    let x = 0;
    let y = 0;
    if (directionForShip === 'horizontal') {
        x = generateRandomNumber(0, gameboard.length - length);
        y = generateRandomNumber(0, gameboard.length - 1);
    }
    else {
        x = generateRandomNumber(0, gameboard.length - 1);
        y = generateRandomNumber(0, gameboard.length - length);
    }
    return [x, y]
}

export const generateRandomNumber = (start, end) => {
    return Math.floor(Math.random() * (end - start + 1) + start);
}

export const incrementCounter = (ship) => {
    COUNTER[ship] += 1;
}

export const checkIfAllShipsHit = (ship) => {
    if (COUNTER[ship] === SHIPS_OBJ[ship]) {
        return true;
    }
}

export const destroyShips = (state, ship) => {
    for (let i = 0; i < SHIPS_OBJ[ship]; i++) {
        let coordX = MAP_OF_SHIP_COORDS[ship][i][0];
        let coordY = MAP_OF_SHIP_COORDS[ship][i][1];
        state[coordX][coordY] = 'S';
    }
}

// function playerTurn() {

// }