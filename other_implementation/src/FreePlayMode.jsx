import React from 'react';
import './index.css';
import ComputerBoard from './ComputerBoard';
import './css/Game.css';
import ResetButton from './ResetButton';

export default function FreePlayMode() {
    return (
            <div class = "container">
                <div><ComputerBoard />ComputerBoard</div>
                <ResetButton text="Reset Game"/>
            </div>
    )
}