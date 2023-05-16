import GameBoardBox from "./GameBoardBox";

type Props = {
    boxes: number[];
    currentPlayer: string;
    updatePlayer: (box: number) => void;
}

function GameBoardBoxRow({ boxes, currentPlayer, updatePlayer }: Props) {
    return (
        <div className="flex justify-center">
            {boxes.map((box => (
                <GameBoardBox
                    key={box}
                    box={box}
                    update={updatePlayer}
                    currentPlayer={currentPlayer}
                />
            )))}
        </div>
    )
}

export default GameBoardBoxRow