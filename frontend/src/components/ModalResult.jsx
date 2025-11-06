import React from 'react'
export default function ModalResult({ score, onClose }) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bgblack/50">
            <div className="bg-white text-black p-6 rounded max-w-sm w-full">
                <h2 className="text-xl font-bold">Resultado da rodada</h2>
                <p className="mt-2">Pontos: {score}</p>
                <div className="mt-4 flex gap-2">
                    <button onClick={onClose} className="py-2 px-4 bg-blue-600 textwhite rounded">Fechar</button>
                </div>
            </div>
        </div>
    )
}
