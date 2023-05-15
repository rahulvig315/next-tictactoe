"use client";
import { useState } from "react";
import Button from "../shared/Button";
import GameBoard from "./GameBoard";

export default function GameMenu() {
    const [player, setPlayer] = useState('player1');
    // TODO: Turn each button into a separate game box with state
    return (
        <div>
            <h1 className="text-8xl m-2 font-light">Tic-Tac-Toe</h1>
            <h3 className="text-xl  mt-5 mb-5 font-extralight">Test your skills against another player or CPU</h3>
            <h2 className="text-3xl m-2 font-light">Choose your game mode</h2>
            <div className="flex justify-center m-2">
                <Button>Player vs. Player</Button>
                <Button>Player vs. CPU</Button>
            </div>
            <div className="flex justify-center">
                <GameBoard />
            </div>
            {/* TODO: Add Score & Player Move History */}
        </div>
    )
}
