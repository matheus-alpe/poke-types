import { useEffect, useState } from 'react'

export const useIcon = (fileName: string) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<any>()
  const [image, setImage] = useState<string>()

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await import(`../assets/icons/${fileName}.png`)
        setImage(response.default)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    fetchImage()
  }, [fileName])

  return {
    loading,
    error,
    image,
  }
}
