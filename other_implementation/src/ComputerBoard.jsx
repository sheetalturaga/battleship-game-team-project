import React, { useContext, useEffect, useState } from 'react';
import { Square } from "./Square"
import './css/Board.css'
import { useSelector } from 'react-redux';
import ResetButton from './ResetButton';
import ResetGameBoardOnly from './ResetGameBoardOnlyFunction'
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import boardAction from './reducers/ComputerBoardAction'
import { BoardClickCountContext } from './BoardClickCountProvider';

const GAMEBOARD_LENGTH = 10;

export default function ComputerBoard() {
    const [clickCountGlobalState, countDispatch] = useContext(BoardClickCountContext);
    const dispatch = useDispatch()
    const gameType = useParams().gameType;
    const clickCount = useSelector((state) => state.clickCount);
    const boardState = useSelector((state) => state.computerBoard);
    // const [boardState, setState] = useState();
    const boardComponent = [];

    for (let i = 0; i < GAMEBOARD_LENGTH; i++) {
        for (let j = 0; j < GAMEBOARD_LENGTH; j++) {
            boardComponent.push((<Square symbol={boardState.gameBoard[i][j]} x={i} y={j} boardType = "computer"/>))
        }
    }

    
    return (
        <div>
            <div id="board">
            {boardComponent}
            </div>
        </div>
    )
}