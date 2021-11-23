import React from 'react';
import './index.css';
import ComputerBoard from './ComputerBoard';
import './css/Game.css';
import ResetButton from './ResetButton';
import HomeButton from './HomeButton';
import { Link } from 'react-router-dom';

export default function FreePlayMode() {
    return (
        <div>
            <div class = "container">
                <div class = 'align-title'><ComputerBoard />Computer Board</div>
                <div className="button-container">
                    <div className="button-padding"><ResetButton text="Reset Game"/></div>
                    <Link to="/"><HomeButton text="Home"/></Link>
                </div>
            </div>
            
        </div>
    )
}