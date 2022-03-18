import { useToast } from '@chakra-ui/react'

import { useCallback, useMemo } from 'react'
import { useMutation, UseMutationResult, useQueryClient } from 'react-query'

import { Word } from '../../../../../domain/entities'
import { toastDefaultOptions } from '../../../../../utils/toast/toast-default-options'
import { useDailyEnglishWordAPI } from '../../word/useDailyEnglishWordAPI'

export const useDeleteWord = (): UseMutationResult<Word, unknown, string> => {
  const toast = useToast()

  const { endpoint, deleteOneById } = useDailyEnglishWordAPI()

  const queryClient = useQueryClient()

  const mutationKey = useMemo(() => [endpoint], [endpoint])

  const mutationFn = useCallback(deleteOneById, [deleteOneById])

  const mutation = useMutation<Word, unknown, string>(mutationKey, mutationFn, {
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
