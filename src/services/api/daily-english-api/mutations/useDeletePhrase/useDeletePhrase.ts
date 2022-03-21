import { useToast } from '@chakra-ui/react'

import { useCallback, useMemo } from 'react'
import { useMutation, UseMutationResult, useQueryClient } from 'react-query'

import { Phrase } from 'domain/entities'
import { useDailyEnglishPhraseAPI } from 'services/api/daily-english-api/phrase/useDailyEnglishPhraseAPI'
import { toastDefaultOptions } from 'utils/toast'

export const useDeletePhrase = (): UseMutationResult<Phrase, unknown, string> => {
  const toast = useToast()

  const { endpoint, deleteOneById } = useDailyEnglishPhraseAPI()

  const queryClient = useQueryClient()

  const mutationKey = useMemo(() => [endpoint], [endpoint])

  const mutationFn = useCallback(deleteOneById, [deleteOneById])

  const mutation = useMutation<Phrase, unknown, string>(mutationKey, mutationFn, {
    onError: () => {
      toast({
        description: 'Error performing deletion 🙁',
        status: 'error',
        ...toastDefaultOptions
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries()

      toast({
        description: 'Success on deleting',
        status: 'success',
        ...toastDefaultOptions
      })
    }
  })

  return mutation
}
