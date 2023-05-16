"use client";
import { GameModes, Players } from "@/types/game";
import { useState } from "react";
import GameBoard from "./GameBoard";
import GameHeader from "./GameHeader";
import GameMenu from "./GameMenu";

export default function Game() {
    const [player, setPlayer] = useState<Players>('player1');
    const [gameMode, setGameMode] = useState<GameModes>('');
    return (
        <div className="text-center">
            <GameHeader gameMode={gameMode} />
            <GameMenu setGameMode={setGameMode} gameMode={gameMode} />
            {gameMode !== '' &&
                <GameBoard currentPlayer={player} setPlayer={setPlayer} />
            }
        </div>
    )
}
