import React from 'react';
import './css/WelcomePage.css';
import { Link } from 'react-router-dom';

export default function WelcomePage() {

    return (<div className="WelcomePage">
        <h1> WELCOME TO BATTLESHIP </h1>
        <h3> Sink all your Opponent's Ships Before they sink you! </h3>
            <button type = "buttonA">
             <Link to={"/gameBoard/PlayerVSComputer"}>Normal Game Mode</Link>
            </button>
            
            <button type = "buttonB">
            <Link to={"/gameBoard/PlayerVSPlayer"}>Free Play Mode</Link>
            </button>
            
            <button type = "buttonC">
             <Link to={"/gameBoard/Rules"}>Rules</Link>
            </button>
        
    </div>)

}