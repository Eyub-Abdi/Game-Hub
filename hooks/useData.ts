import { useEffect, useState } from 'react'
import apiClient, { CanceledError } from '../services/api-client'

interface FetchResponse<T> {
  count: number
  results: T[]
}

function useData<T>(endpoint: string) {
  const [data, setData] = useState<T[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState()

  useEffect(() => {
    const controller = new AbortController()

    setIsLoading(true)
    apiClient
      .get<FetchResponse<T>>(endpoint, { signal: controller.signal })
      .then(res => {
        setData(res.data.results)
        setIsLoading(false)
      })
      .catch(err => {
        if (err instanceof CanceledError) return
        setIsLoading(false)
        setError(err.message)
      })
    return () => controller.abort()
  }, [])

  return { data, error, isLoading }
}

export default useData
