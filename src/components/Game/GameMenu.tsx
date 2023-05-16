import Button from "../shared/Button"

type Props = {}

export default function GameMenu({ }: Props) {
    return (
        <>
            <h2 className="text-3xl font-light">
                Choose your game mode
            </h2>
            <div className="flex justify-center">
                <Button>Player vs. Player</Button>
                <Button>Player vs. CPU</Button>
            </div>
        </>
    )
}