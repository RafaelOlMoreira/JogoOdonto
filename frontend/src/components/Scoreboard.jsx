import React from 'react'
export default function Scoreboard({ score, index, total }) {
    return (
        <div className="flex items-center justify-between bg-[#202020] p-3 rounded">
            <div>Rodada: {index}/{total}</div>
            <div>Pontos: {score}</div>
        </div>
    )
}
