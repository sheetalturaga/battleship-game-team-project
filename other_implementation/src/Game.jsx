import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PlayerBoard from './PlayerBoard';
import ComputerBoard from './ComputerBoard';
import './css/Game.css';
import ResetButton from './ResetButton';
import { useState } from 'react';
// import ResetGameBoardOnly from './ResetGameBoardOnlyFunction'
// import Board from './Board';

export default function Game() {
    // const [playerTurn, setPlayer] = useState('player')
    return (
        <div>
            <div class = "container">
                <div><PlayerBoard />PlayerBoard</div>
                <ResetButton text="Reset Game"/>
                {/* <ResetGameBoardOnly text="Game board only, pls" /> */}
                <div><ComputerBoard />ComputerBoard</div>
            </div>
            {/* <ResetButton text="Reset Game"/>
            <ResetGameBoardOnly text="Game board only, pls" /> */}
        </div>
    )
}