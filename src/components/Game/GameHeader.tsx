import { GameModes } from "@/types/game"

type Props = {
    gameMode: GameModes,
}

const gameModesText: Record<string, any> = {
    '': "Test your skills against another player or CPU",
    'pvp': 'Player 1 vs. Player 2',
    'pvc': 'Player vs. CPU',
}



export default function GameHeader({ gameMode }: Props) {
    return (
        <>
            <h1 className="text-8xl font-light p-5 text-blue-500">
                Tic Tac Toe
            </h1>
            <h3 className={`text-xl font-extralight text-green-500 ${gameMode === '' && 'italic'}`}>
                {gameModesText[gameMode]}
            </h3 >
        </>
    )
}
