import { useDeleteWord } from 'services/api/daily-english-api/mutations'

export const useDeleteWordModal = () => {
  const { isLoading: isDeleting, mutateAsync: deleteWord } = useDeleteWord()

  return { isDeleting, deleteWord }
}
