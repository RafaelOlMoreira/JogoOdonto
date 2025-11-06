import axios from 'axios'
import { API_BASE } from './constants'
const api = axios.create({ baseURL: API_BASE })
export async function createPlayer(identifier) {
    const res = await api.post('/api/jogador', { identifier })
    return res.data
}
export async function getItems(limit = 12) {
    const res = await api.get('/api/itens', { params: { limit } })
    return res.data
}
export async function postRound(playerIdentifier, points) {
    const res = await api.post('/api/rodada', { playerIdentifier, points })
    return res.data
}
export async function getRanking(limit = 10) {
    const res = await api.get('/api/rodada/ranking', { params: { limit } })
    return res.data
}