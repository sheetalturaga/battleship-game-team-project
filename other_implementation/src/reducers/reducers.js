import { combineReducers } from 'redux';
import clickReducer from './clickReducer';
import computerBoardReducer from './ComputerBoardReducer';
import playerBoardReducer from "./PlayerBoardReducer";

export default combineReducers({
    playerBoard: playerBoardReducer,
    clickCount: clickReducer,
    computerBoard: computerBoardReducer,
})