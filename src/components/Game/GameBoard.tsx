import GameBoardBox from "./GameBoardBox"

type Props = {}

export default function GameBoard({ }: Props) {
    return (
        <div className="cursor-pointer">
            <div className="flex">
                <GameBoardBox />
                <GameBoardBox />
                <GameBoardBox />
            </div>
            <div className="flex">
                <GameBoardBox />
                <GameBoardBox />
                <GameBoardBox />
            </div>
            <div className="flex">
                <GameBoardBox />
                <GameBoardBox />
                <GameBoardBox />
            </div>
        </div>
    )
}