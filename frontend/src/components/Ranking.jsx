import React, { useEffect, useState } from 'react'
import { getRanking } from '../utils/api'
export default function Ranking() {
    const [list, setList] = useState([])
    useEffect(() => { load() }, [])
    async function load() {
        const r = await getRanking(10)
        setList(r)
    }
    return (
        <section className="mt-6 bg-[#222] p-4 rounded">
            <h3 className="font-semibold">Ranking (Top 10)</h3>
            <ol className="mt-2 list-decimal ml-5">
                {list.map(s => (
                    <li key={s._id} className="mt-1">{s.playerIdentifier} — {s.points}
                        pts</li>
                ))}
            </ol>
        </section>
    )
}
