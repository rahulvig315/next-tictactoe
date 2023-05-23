import { Players } from "@/types/game"
import { useState } from "react"
import GameBoardBoxRow from "./GameBoardBoxRow"

type Props = {
    player?: Players,
    setPlayer?: (player: Players) => void,
}

type Plays = {
    'p1': number[],
    'p2': number[],
}

const boxRows = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
export default function GameBoard({ }: Props) {
    const [player, setPlayer] = useState<Players>('p1');
    const [plays, setPlays] = useState<Plays>({
        'p1': [],
        'p2': [],
    })
    const updatePlayer = (box: number) => {
        setPlayer((player === 'p1' || player === '') ? 'p2' : 'p1')
    }


    return (
        <div className="cursor-pointer">
            <div className="border-collapse">
                {
                    boxRows.map((row) => (
                        <GameBoardBoxRow key={row[0]} boxes={row} updatePlayer={updatePlayer} currentPlayer={player} />
                    ))
                }

            </div>
            <h1>Current Player: <span className="text-red-500">{player}</span></h1>
        </div>
    )
}