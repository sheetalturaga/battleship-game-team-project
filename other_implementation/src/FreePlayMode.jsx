import React from 'react';
import './index.css';
import ComputerBoard from './ComputerBoard';
import './css/Game.css';
import ResetButton from './ResetButton';

export default function FreePlayMode() {
    return (
        <div>
            <div class = "container">
                {/* <ResetGameBoardOnly text="Game board only, pls" /> */}
                <div class = 'align-title'><ComputerBoard />Computer Board</div>
                <ResetButton text="Reset Game"/>
            </div>
        </div>
    )
}