import axios from 'axios'
import { setupCache, buildWebStorage } from 'axios-cache-interceptor'
import { useEffect, useState } from 'react'

const AxiosInstance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
})

export const pokeApi = setupCache(AxiosInstance, {
  storage: buildWebStorage(localStorage, 'axios-cache:')
})

export function useApi<T>(route: string): {
  loading: boolean
  error: any
  state: T
} {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<any>()
  const [state, setState] = useState<T>({} as T)

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
