import { Players } from "@/types/game"
import { useState } from "react"
import GameBoardBox from "./GameBoardBox"

type Props = {
    currentPlayer: Players,
    setPlayer: (player: Players) => void,
}

type Plays = {
    'player1': number[],
    'player2': number[],
}

export default function GameBoard({ currentPlayer, setPlayer }: Props) {
    const [plays, setPlays] = useState<Plays>({
        'player1': [],
        'player2': [],
    })
    const updatePlayer = (box: number) => {
        setPlayer(currentPlayer === 'player1' ? 'player2' : 'player1')

    }


    return (
        <div className="cursor-pointer">
            <div>
                <div className="flex justify-center">
                    <GameBoardBox
                        box={1}
                        update={updatePlayer}
                        currentPlayer={currentPlayer}
                    />
                    <GameBoardBox
                        box={2}
                        update={updatePlayer}
                        currentPlayer={currentPlayer}
                    />
                    <GameBoardBox
                        box={3}
                        update={updatePlayer}
                        currentPlayer={currentPlayer}
                    />
                </div>
                <div className="flex justify-center">
                    <GameBoardBox
                        box={4}
                        update={updatePlayer}
                        currentPlayer={currentPlayer}
                    />
                    <GameBoardBox
                        box={5}
                        update={updatePlayer}
                        currentPlayer={currentPlayer}
                    />
                    <GameBoardBox
                        box={6}
                        update={updatePlayer}
                        currentPlayer={currentPlayer}
                    />
                </div>
                <div className="flex justify-center">
                    <GameBoardBox
                        box={7}
                        update={updatePlayer}
                        currentPlayer={currentPlayer}
                    />
                    <GameBoardBox
                        box={8}
                        update={updatePlayer}
                        currentPlayer={currentPlayer}
                    />
                    <GameBoardBox
                        box={9}
                        update={updatePlayer}
                        currentPlayer={currentPlayer}
                    />
                </div>
            </div>
            <h1>Current Player: {currentPlayer}</h1>
        </div>
    )
}