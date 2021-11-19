export const SHIPS_OBJ = {
    scout: 2,
    submarine: 3,
    destroyer: 4,
    aircraft: 5,
}

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

function generatePlayerBoard() {
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
    for (let row = 0; row < defaultState.gameBoard.length; row++) {
        for (let column = 0; column < defaultState.gameBoard[0].length; column++) {
            defaultState.gameBoard[row][0] = 'Y';
        }
    }
    return defaultState.gameBoard;
}



export default function PlayerBoardReducer(state, action) {
    
    if (state === undefined) {
        return generatePlayerBoard()

    }

    if (action.type === "CREATE_GAME_BOARD") {
        alert("created a game board!")
    }
    // if (action.boardType === "computer") {
    //     return state;
    // }
    if (action.type === 'player-turn') {
        const value = state[action.x][action.y];
        const boardType = action.boardType;

        if (boardType === 'computer') {
            return state;
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
