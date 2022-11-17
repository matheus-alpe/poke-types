import axios from 'axios'
import { useEffect, useState } from 'react'

export const pokeApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
})

export function useApi<T>(route: string): {
  loading: boolean
  error: any
  state: T | undefined
} {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<any>()
  const [state, setState] = useState<T>()

  const fetchData = async () => {
    try {
      const response = await pokeApi.get<T>(route)
      setState(response.data)
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [route])

  return {
    loading,
    error,
    state,
  }
}
