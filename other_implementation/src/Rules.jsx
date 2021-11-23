import React from 'react';
import './css/WelcomePage.css';
import { Link } from 'react-router-dom';

export default function Rules() {

    return (<div className="WelcomePage">
        <h1> Rules of the Game </h1>
        
        <ol>
            <li>Four ships will be placed randomly on both boards</li>
            <li>You and the opponent will take turns firing onto each
                other's boards</li>
            <li>When someone makes a hit, the tile 
                will turn RED. Else, it turns Gray.</li>
            <li>When an entire ship
                is hit, the tiles will turn black</li>
            <li>Whoever hits all ships, 
                WINS!</li>
        </ol>

        <Link to={"/"}>Home</Link>
    </div>)

}