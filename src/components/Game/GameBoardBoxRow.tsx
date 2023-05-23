import { Players } from "@/types/game";
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
                <GameBoardBox box={box} key={box} update={updatePlayer} player={currentPlayer as Players} />
            )))}
        </div>
    )
}

export default GameBoardBoxRow