import { Symbols } from "@/types/game";
import { useState } from "react";

type Props = {
    box: number;
    currentPlayer: string;
    update: (box: number) => void;
}

export default function GameBoardBox({ box, currentPlayer, update }: Props) {
    const [value, setValue] = useState<Symbols>('');
    const onClick = () => {
        setValue(currentPlayer === 'player1' ? 'X' : 'O');
        update(box);
    }
    return (
        <button className={`border-black border-2 bg-white w-36 h-36 ${!value && 'hover:bg-sky-200'} text-8xl p-7 ${value === 'O' ? 'text-red-500' : 'text-blue-500'}`} disabled={value !== ''} onClick={onClick}>
            {value}
        </button>
    )
}
