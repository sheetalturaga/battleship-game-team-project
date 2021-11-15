import React from 'react';

export default function Welcome() {
    return (
        <div>
            <h3>BATTLESHIP</h3>
            <h4>Here are the rules for the game: </h4>
            <p>You must place 5 ships onto your board.
                You and the opponent will take turns firing onto each
                other's boards. When someone makes a hit, the tile 
                will turn red. Else, it turns gray. When an entire ship
                is hit, the tiles will turn black. Whoever hits all ships, 
                WINS!
            </p>
            <h4>Start Game</h4>
            <span>
                <button>Normal Game</button>
                <button>Free Play</button>
            </span>
            
        </div>
    )
}