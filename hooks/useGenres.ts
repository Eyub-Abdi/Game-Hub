import { useEffect, useState } from 'react'
import apiClient, { CanceledError } from '../services/api-client'

interface Genres {
  id: number
  name: string
  slug: string
}

interface FetchGrenresResponse {
  id: number
  results: Genres[]
}

function useGenres() {
  const [genres, setGenres] = useState<Genres[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState()

  useEffect(() => {
    setIsLoading(true)
    const controller = new AbortController()
    apiClient
      .get<FetchGrenresResponse>('/genres', { signal: controller.signal })
      .then(res => {
        setGenres(res.data.results)
        setIsLoading(false)
      })
      .catch(err => {
        setIsLoading(false)
        if (err instanceof CanceledError) return
        setError(err.message)
      })
    return () => controller.abort()
  }, [])

  return { genres, error, isLoading }
}

export default useGenres
