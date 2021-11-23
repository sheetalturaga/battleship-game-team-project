
import { Square } from "./Square"
import './css/Board.css'
import { useSelector } from 'react-redux';

export default function PlayerBoard() {

    const boardState = useSelector((state) => state.playerBoard)
    const boardComponent = [];

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            boardComponent.push((<Square symbol={boardState[i][j]} x={i} y={j} boardType = "player"/>))
        }
    }

    return (
        <div>
            <div id="board">{boardComponent}</div>
        </div>
    )
}