import React, { useEffect, useState } from 'react'
import { Text } from '@chakra-ui/react'
import apiClient from '../services/api-client'

interface Game {
  id: number
  name: string
}

interface FetchGamesResponse {
  id: number
  results: Game[]
}

function GameGrid() {
  const [games, setGames] = useState<Game[]>()
  const [error, setError] = useState('')

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>('/xgames')
      .then(res => {
        setGames(res.data.results)
      })
      .catch(err => setError(err.message))
  }, [])
  return (
    <ul>
      {error && <Text>{error}</Text>}
      {games?.map(game => (
        <li key={game.id}>{game.name}</li>
      ))}
    </ul>
  )
}

export default GameGrid
