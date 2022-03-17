import { useCallback } from 'react'

export const useReloadPage = () => {
  const handleReloadPage = useCallback(() => {
    window.location.reload()
  }, [])

  return { handleReloadPage }
}
