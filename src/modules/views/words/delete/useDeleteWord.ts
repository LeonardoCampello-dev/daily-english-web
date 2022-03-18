import { useDeleteWord } from '../../../../services/api/daily-english-api/mutations/useDeleteWord'

export const useDeleteWordModal = () => {
  const { isLoading: isDeleting, mutateAsync: deleteWord } = useDeleteWord()

  return { isDeleting, deleteWord }
}
