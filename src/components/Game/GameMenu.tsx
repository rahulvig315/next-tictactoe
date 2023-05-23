import { GameModes } from "@/types/game"
import Button from "../shared/Button"

type Props = {
    gameMode: GameModes,
    setGameMode: (gameModes: GameModes) => void,
}

const ButtonTexts = {
    pvp: 'Player vs. Player',
    pvc: 'Player vs. CPU',
}


export default function GameMenu({ setGameMode, gameMode }: Props) {
    return (
        <>
            {gameMode === '' &&
                <>
                    <h2 className="text-3xl font-light text-red-500 p-10">
                        Choose your game mode
                    </h2>

                    <div className="flex justify-center">
                        {Object.entries(ButtonTexts).map(([key, value]) => (
                            <Button
                                key={key}
                                onClick={() => setGameMode(key as GameModes)}
                            >
                                {value}
                            </Button>
                        ))}
                    </div>
                </>
            }
        </>
    )
}