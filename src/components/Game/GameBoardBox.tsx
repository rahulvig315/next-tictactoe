import { useState } from "react"

type Props = {
    currentPlayer: string;
}

export default function GameBoardBox({ }: Props) {
    const [value, setValue] = useState('')
    return (
        <div className="border-black border-2 bg-white w-36 h-36 hover:bg-sky-100">
            {value}
        </div>
    )
}
