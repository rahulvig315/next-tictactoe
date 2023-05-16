"use client";
import { useState } from "react";
import GameBoard from "./GameBoard";
import GameHeader from "./GameHeader";
import GameMenu from "./GameMenu";

export default function Game() {
    const [player, setPlayer] = useState('player1');
    return (
        <div className="text-center">
            <GameHeader />
            <GameMenu />
            <GameBoard />
        </div>
    )
}
