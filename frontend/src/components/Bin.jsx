import React from 'react'
export default function Bin({ bin, onDrop }) {
    return (
        <div className={`p-3 rounded min-h-[100px] flex flex-col items-center
justify-center ${bin.color}`}>
            <div className="font-semibold">{bin.label}</div>
            <button onClick={() => onDrop(bin.id)} className="mt-2 text-sm underline">Selecionar</button>
        </div>
    )
}
