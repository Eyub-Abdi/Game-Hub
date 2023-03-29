import React, { useEffect, useState } from 'react'
import apiClient, { CanceledError } from '../services/api-client'

export interface Platform {
  id: number
  name: string
  slug: string
}
export interface Game {
  id: number
  name: string
  background_image: string
  metacritic: number
  parent_platforms: { platform: Platform }[]
}

interface FetchGamesResponse {
  id: number
  results: Game[]
}

function useGames() {
  const [games, setGames] = useState<Game[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    setIsLoading(true)
    const controller = new AbortController()
    apiClient
      .get<FetchGamesResponse>('/games', { signal: controller.signal })
      .then(res => {
        setGames(res.data.results)
        setIsLoading(false)
      })
      .catch(err => {
        if (err instanceof CanceledError) return
        setError(err.message)
        setIsLoading(false)
      })
    return () => controller.abort()
  }, [])
  return { games, error, setGames, setError, isLoading }
}

export default useGames
