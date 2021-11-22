import React from 'react';
import './index.css';
import PlayerBoard from './PlayerBoard';
import ComputerBoard from './ComputerBoard';
import './css/Game.css';
import ResetButton from './ResetButton';


export default function NormalGameMode() {
    return (
        <div>
            <div class = "container">
                <div><PlayerBoard />PlayerBoard</div>
                <ResetButton text="Reset Game"/>
                {/* <ResetGameBoardOnly text="Game board only, pls" /> */}
                <div><ComputerBoard />ComputerBoard</div>
            </div>
        </div>
    )
}