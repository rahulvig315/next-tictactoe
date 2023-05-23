"use client";
import { GameModes } from "@/types/game";
import { useState } from "react";
import GameBoard from "./GameBoard";
import GameHeader from "./GameHeader";
import GameMenu from "./GameMenu";

export default function Game() {
    const [gameMode, setGameMode] = useState<GameModes>('');
    return (
        <div className="text-center">
            <GameHeader gameMode={gameMode} />
            <GameMenu setGameMode={setGameMode} gameMode={gameMode} />
            {gameMode !== '' &&
                <GameBoard />
            }
        </div>
    )
}
