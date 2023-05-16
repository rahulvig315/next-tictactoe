import { Players } from "@/types/game"
import { useState } from "react"
import GameBoardBoxRow from "./GameBoardBoxRow"

type Props = {
    currentPlayer: Players,
    setPlayer: (player: Players) => void,
}

type Plays = {
    'player1': number[],
    'player2': number[],
}

const boxRows = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
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
                {
                    boxRows.map((row) => (
                        <GameBoardBoxRow key={row[0]} boxes={row} currentPlayer={currentPlayer} updatePlayer={updatePlayer} />
                    ))
                }

            </div>
            <h1>Current Player: {currentPlayer}</h1>
        </div>
    )
}