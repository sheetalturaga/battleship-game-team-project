import React from 'react';
import { Link } from 'react-router-dom';

export default function WelcomePage() {

    return (<div class="WelcomePage">
        <h5>
        Here are the rules for the game: 
        </h5>
        <ol>
            <li>5 ships will be placed on both boards.</li>
            <li>You and the opponent will take turns firing onto each
                other's boards.</li>
            <li>When someone makes a hit, the tile 
                will turn red. Else, it turns gray.</li>
            <li>When an entire ship
                is hit, the tiles will turn black.</li>
            <li>Whoever hits all ships, 
                WINS!</li>
        </ol>
        <Link to={"/gameBoard/PlayerVSComputer"}>
            <button type = "button">
            Play Game
            </button>
        </Link>
    </div>)

}