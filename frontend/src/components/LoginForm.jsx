import React, { useState } from 'react'
import { createPlayer } from '../utils/api'
export default function LoginForm({ onLogin }) {
    const [identifier, setIdentifier] = useState('')
    const [loading, setLoading] = useState(false)
    async function submit(e) {
        e.preventDefault()
        if (!identifier.trim()) return alert('Informe seu nome, matrícula ou email')
        setLoading(true)
        try {
            const res = await createPlayer(identifier.trim())
            onLogin(res.identifier)
        } catch (err) {
            console.error(err)
            alert('Erro ao criar jogador')
        } finally { setLoading(false) }
    }
    return (
        <form onSubmit={submit} className="max-w-md mx-auto bg-[#262626] p-4
rounded">
            <label className="block mb-2">Identificador (nome, matrícula ou email)</label>
            <input value={identifier} onChange={e => setIdentifier(e.target.value)} placeholder='Informe seu identificador...'
                className="w-full p-2 rounded text-black" />
            <button disabled={loading} className="mt-3 w-full py-2 rounded bg-blue-600 hover:bg-blue-700">Entrar</button>
        </form>
    )
}
