import React from 'react'
export default function ModalResult({ score, onClose }) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bgblack/50">
            <div className="bg-white text-black p-6 rounded max-w-sm w-full text-center">
                <h2 className="text-xl font-bold">Resultado da rodada</h2>
                <p className="mt-2">Parabéns, você fez:</p>
                <p className="mt-2">{score} Pontos</p>
                <div className="mt-4 flex gap-2">
                    <button onClick={onClose} className="py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded text-center w-full">Fechar</button>
                </div>
            </div>
        </div>
    )
}
