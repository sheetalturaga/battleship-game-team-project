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

export default function ComputerBoard() {
    const [clickCountGlobalState, countDispatch] = useContext(BoardClickCountContext);
    const dispatch = useDispatch()
    const gameType = useParams().gameType;
    const clickCount = useSelector((state) => state.clickCount)
    const boardState = useSelector((state) => state.computerBoard)
    // const board = boardState.ga
    // boardAction[gameBoard];
    // useEffect(() => dispatch({type: "CREATE_GAME_BOARD", gameType}), [])
    const boardComponent = [];

    for (let i = 0; i < 10; i++) {
        let row = boardState[i];
        for (let j = 0; j < 10; j++) {
            boardComponent.push((<Square symbol={boardState[i][j]} x={i} y={j} boardType = "computer"/>))
        }
    }
    // const [state, dispatch] = useReducer((state, action) => { 
    //     const { type } = action; switch(action) { 
    //         case 'action description': 
    //         const newState = 
    //         return newState; 
    //     default: throw new Error() } }, [])
    return (
        <div>
            {/* <h3>{"This is a " + gameType + " game"}</h3> */}
            {/* <h1>{clickCount}</h1> */}
            {/* <h1>{"Global State Counter: " + clickCountGlobalState}</h1> */}
                <div id="board">
            {boardComponent}
            </div>
            {/* <ResetButton text="Reset, pls"/>
            <ResetGameBoardOnly text="Game board only, pls" /> */}
        </div>
    )
}