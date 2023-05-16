import GameBoardBox from "./GameBoardBox"

type Props = {}

export default function GameBoard({ }: Props) {
    return (
        <div className="cursor-pointer">
            <div className="flex justify-center">
                <GameBoardBox />
                <GameBoardBox />
                <GameBoardBox />
            </div>
            <div className="flex justify-center">
                <GameBoardBox />
                <GameBoardBox />
                <GameBoardBox />
            </div>
            <div className="flex justify-center">
                <GameBoardBox />
                <GameBoardBox />
                <GameBoardBox />
            </div>
        </div>
    )
}