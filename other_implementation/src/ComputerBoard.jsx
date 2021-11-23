
import { Square } from "./Square"
import './css/Board.css'
import { useSelector } from 'react-redux';

const GAMEBOARD_LENGTH = 10;

export default function ComputerBoard() {
    const boardState = useSelector((state) => state.computerBoard);
    const boardComponent = [];

    for (let i = 0; i < GAMEBOARD_LENGTH; i++) {
        for (let j = 0; j < GAMEBOARD_LENGTH; j++) {
            boardComponent.push((<Square symbol={boardState.gameBoard[i][j]} x={i} y={j} boardType = "computer"/>))
        }
    }
    
    return (
        <div>
            <div id="board">{boardComponent}</div>
        </div>
    )
}