import React, { useState, useEffect, useRef } from 'react'
import { POINTS_HIT, POINTS_MISS, BINS } from '../utils/constants'
import TrashItem from './TrashItem'
import Bin from './Bin'
import Scoreboard from './Scoreboard'
import ModalResult from './ModalResult'
import { postRound } from '../utils/api'
export default function GameBoard({ player, items = [], reloadItems }) {
    const [index, setIndex] = useState(0)
    const [score, setScore] = useState(0)
    const [roundItems, setRoundItems] = useState(items)
    const [showResult, setShowResult] = useState(false)
    const current = roundItems[index]
    const roundSize = roundItems.length || 12
    useEffect(() => {
        setRoundItems(items)
        setIndex(0)
        setScore(0)
    }, [items])
    async function finishRound(finalScore) {
        setShowResult(true)
        try {
            await postRound(player, finalScore)
        } catch (err) { console.error('Erro ao salvar rodada', err) }
    }
    function handleAnswer(category) {
        let diff = (category === current?.category) ? POINTS_HIT : POINTS_MISS
        setScore(s => s + diff)
        const next = index + 1
        if (next >= roundSize) {
            finishRound(score + diff)
        } else {
            setIndex(next)
        }
    }
    if (!current) return <div className="mt-6 text-center">Carregando
        itens...</div>
    return (
        <div className="max-w-4xl mx-auto">
            <Scoreboard score={score} index={index + 1} total={roundSize} />
            <div className="flex flex-col md:flex-row items-center gap-4 mt-6">
                <div className="flex-1 flex items-center justify-center p-4">
                    <TrashItem item={current} onAnswer={handleAnswer} />
                </div>
                <div className="w-full md:w-96 grid grid-cols-2 gap-3">
                    {BINS.map(bin => (
                        <Bin key={bin.id} bin={bin} onDrop={handleAnswer} />
                    ))}
                </div>
            </div>
            {showResult && <ModalResult score={score}
                onClose={() => { setShowResult(false); reloadItems() }} />}
        </div>
    )
}