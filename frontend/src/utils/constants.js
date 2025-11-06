export const DEFAULT_ROUND_SIZE = 12
export const POINTS_HIT = 10
export const POINTS_MISS = -5
export const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:4000'
export const BINS = [
{ id: 'Infectante', label: 'Infectante', color: 'bg-red-600' },
{ id: 'Reciclável', label: 'Reciclável', color: 'bg-green-600' },
{ id: 'Químico', label: 'Químico', color: 'bg-yellow-600' },
{ id: 'Comum', label: 'Comum', color: 'bg-gray-600' },
{ id: 'Perfurocortante', label: 'Perfurocortante', color: 'bg-purple-600' }
]
