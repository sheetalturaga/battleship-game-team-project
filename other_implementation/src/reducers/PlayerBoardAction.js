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
    scout: 'sct',
    submarine: 'sbe',
    destroyer: 'der',
    aircraft: 'act'
}

export const COUNTER = {
    scout: 0,
    submarine: 0,
    destroyer: 0,
    aircraft: 0
}

export const DIRECTION_ARR = ['horizontal', 'vertical'];

export const AVAILABLE_SPACES = [];

export const TRACKING_USED_SQUARE = [];



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
    isComputerTurn:false
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
    }

    let gameBoardPlacerHolder = defaultState.gameBoard;
    for (let row = 0; row < gameBoardPlacerHolder.length; row++) {
        for (let column = 0; column < gameBoardPlacerHolder.length; column++) {
            AVAILABLE_SPACES.push([row, column]);
        }
    }

    for (let ship in SHIPS_OBJ) {
        let directionForShip = DIRECTION_ARR[Math.floor((Math.random()*DIRECTION_ARR.length))];
        let horizontalCoord = generateRandomCoordinates(gameBoardPlacerHolder, SHIPS_OBJ[ship], directionForShip);
        let coordX = horizontalCoord[0];
        let coordY = horizontalCoord[1];

        while (!validCoordinate(coordX, coordY, SHIPS_OBJ[ship], directionForShip)) {
            horizontalCoord = generateRandomCoordinates(gameBoardPlacerHolder, SHIPS_OBJ[ship], directionForShip);
            coordX = horizontalCoord[0];
            coordY = horizontalCoord[1];
            break;
        } 
        if (directionForShip === 'horizontal') {
            for (let i = coordX; i < coordX + SHIPS_OBJ[ship]; i++) {
                MAP_OF_SHIP_COORDS[ship].push([i, coordY]);
                let index = findIndexToDelete(i, coordY);
                AVAILABLE_SPACES.splice(index, 1);
                
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
                
                defaultState.gameBoard[coordX][i] = UNIQUE_IDS[ship];
                if (MAP_OF_SHIP_COORDS[ship].length === 3 * SHIPS_OBJ[ship]) {
                    generateShipCoordinates(ship, SHIPS_OBJ[ship], MAP_OF_SHIP_COORDS[ship].length);
                }
            }
        }
    }

    return defaultState.gameBoard;
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

export const validCoordinate = (xCoord, yCoord, length, directionForShip) => {
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

export const addUsedSquare = (xCoord, yCoord) => {
    TRACKING_USED_SQUARE.push([xCoord, yCoord]);
}

export const checkIfValidCoordinate = (state, xCoord, yCoord) => {
    for (let i = 0; i < TRACKING_USED_SQUARE.length; i++) {
        if (TRACKING_USED_SQUARE[i][0] === xCoord && TRACKING_USED_SQUARE[i][1] === yCoord) {
            return false;
        }
    }
    return true;
}