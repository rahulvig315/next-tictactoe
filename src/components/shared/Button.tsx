import React from 'react';

type Props = {
    children: React.ReactNode;
    onClick?: () => void;
}

function Button({ children, onClick }: Props) {
    return (
        <div className="bg-slate-600 cursor-pointer hover:bg-slate-400 text-white p-2 rounded-md m-3" onClick={onClick}>
            {children}
        </div>
    )
}

export default Button