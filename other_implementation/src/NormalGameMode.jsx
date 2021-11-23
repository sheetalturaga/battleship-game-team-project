import React from 'react';
import './index.css';
import PlayerBoard from './PlayerBoard';
import ComputerBoard from './ComputerBoard';
import './css/Game.css';
import ResetButton from './ResetButton';
import './css/Board.css';
import { Link } from 'react-router-dom';
import HomeButton from './HomeButton';


export default function NormalGameMode() {
    return (
        <div>
            <div className = "container">
                <div class = 'align-title'><PlayerBoard />Player Board</div>
                <div class = 'align-title'><ComputerBoard />Computer Board</div>
                <div className="button-container">
                    <div className="button-padding"><ResetButton text="Reset Game"/></div>
                    <Link to="/"><HomeButton text="Home"/></Link>
                </div>
            </div>
        </div>
    )
}