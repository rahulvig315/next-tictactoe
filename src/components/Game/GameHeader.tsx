import { GameModes } from "@/types/game"

type Props = {
    gameMode: GameModes,
}

const gameModesText = {
    '': "Test your skills against another player or CPU",
    'pvp': 'Player 1 vs. Player 2',
    'pvc': 'Player vs. CPU',
}



export default function GameHeader({ gameMode }: Props) {
    return (
        <>
            <h1 className="text-8xl font-light">
                Tic-Tac-Toe
            </h1>
            <h3 className={`text-xl font-extralight ${gameMode === '' && 'italic'}`}>
                {gameModesText[gameMode]}
            </h3 >
        </>
    )
}
