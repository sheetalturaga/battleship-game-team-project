import React from 'react';
import './index.css';
import PlayerBoard from './PlayerBoard';
import ComputerBoard from './ComputerBoard';
import './css/Game.css';
import ResetButton from './ResetButton';
import './css/Board.css';


export default function NormalGameMode() {
    return (
        <div>
            <div className = "container">
                <div class = 'align-title'><PlayerBoard />Player Board</div>
                <div class = 'align-title'><ComputerBoard />Computer Board</div>
                <ResetButton text="Reset Game"/>
            </div>
        </div>
    )
}