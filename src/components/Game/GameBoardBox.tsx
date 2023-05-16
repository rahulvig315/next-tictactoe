
type Props = {
    currentPlayer: string;
    value: 'X' | 'O' | '';
}

export default function GameBoardBox({ currentPlayer, value }: Props) {
    return (
        <div className={`border-black border-2 bg-white w-36 h-36 hover:bg-sky-200 text-8xl p-7 ${value === 'O' ? 'text-red-500' : 'text-blue-500'}`}>
            {value}
        </div>
    )
}
