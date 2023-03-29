import React, { useEffect, useState } from 'react'
import apiClient, { CanceledError } from '../services/api-client'

export interface Game {
  id: number
  name: string
  background_image: string
}

interface FetchGamesResponse {
  id: number
  results: Game[]
}

function useGames() {
  const [games, setGames] = useState<Game[]>()
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()
    apiClient
      .get<FetchGamesResponse>('/games', { signal: controller.signal })
      .then(res => {
        setGames(res.data.results)
      })
      .catch(err => {
        if (err instanceof CanceledError) return
        setError(err.message)
      })
    return () => controller.abort()
  }, [])
  return { games, error, setGames, setError }
}

export default useGames
