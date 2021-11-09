import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PlayerBoard from './PlayerBoard';
import ComputerBoard from './ComputerBoard';

export default function Game() {
    return (
        <div>
            Welcome to BattleShip
            <PlayerBoard />
            <div>PlayerBoard</div>
            <ComputerBoard />
            <div>ComputerBoard</div>
        </div>
    )
}