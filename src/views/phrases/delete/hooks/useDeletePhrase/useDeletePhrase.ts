import { useDeletePhrase } from 'services/api/daily-english-api/mutations/useDeletePhrase'

export const useDeletePhraseModal = () => {
  const { isLoading: isDeleting, mutateAsync: deletePhrase } = useDeletePhrase()

  return { isDeleting, deletePhrase }
}
