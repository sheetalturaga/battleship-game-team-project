import React from 'react';
import { useDispatch } from 'react-redux';
import ComputerBoard from './ComputerBoard';
import PlayerBoard from './PlayerBoard';

export default function PlayerTurn() {
    const playerTurn = "player-turn" === ComputerBoard ? ComputerBoard : PlayerBoard;

    const dispatch = useDispatch();

    return (
        <div onClick = {
            () => dispatch({
                type: "player-turn",
            })}>

        </div>
    )
}