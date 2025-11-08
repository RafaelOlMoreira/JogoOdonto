import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import LoginForm from './components/LoginForm'
import GameBoard from './components/GameBoard'
import Ranking from './components/Ranking'
import Footer from './components/Footer'
import { getItems } from './utils/api'
import { DEFAULT_ROUND_SIZE } from './utils/constants'
export default function App() {
  const [player, setPlayer] = useState(null)
  const [items, setItems] = useState([])
  useEffect(() => {
    if (player) {
      loadItems();
    }
  }, [player])
  async function loadItems() {
    const list = await getItems(DEFAULT_ROUND_SIZE)
    setItems(list)
  }
  return (
    <div className="min-h-screen bg-[#1f1f1f] text-white">
      <Header />
      <main className="p-4">
        {!player ? (
          <LoginForm onLogin={setPlayer} />
        ) : (
          <>
            <GameBoard player={player} items={items}
              reloadItems={loadItems} />
            <Ranking />
          </>
        )}
      </main>
      <Footer />
    </div>
  )
}
