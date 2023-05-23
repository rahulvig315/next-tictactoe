import { Players, Symbols } from "@/types/game";
import { useState } from "react";

type Props = {
    box: number;
    player?: Players;
    update?: (box: number) => void;
}

export default function GameBoardBox({ box, player, update }: Props) {
    const [value, setValue] = useState<Symbols>('');
    const onClick = () => {
        console.log(player)
        setValue(player === 'p1' ? 'X' : 'O');
        update(box as number);
    }
    return (
        <button className={`border-black border bg-white w-36 h-36 ${!value && 'hover:bg-sky-200'} text-8xl p-7 ${value === 'O' ? 'text-red-500' : 'text-blue-500'}`} disabled={value !== ''} onClick={onClick}>
            {value}
        </button>
    )
}
