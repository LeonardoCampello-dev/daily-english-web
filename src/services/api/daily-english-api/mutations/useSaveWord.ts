import { useCallback, useMemo } from 'react'
import { useIsMutating, useMutation, UseMutationResult, useQueryClient } from 'react-query'

import { Word } from '../../../../domain/entities'
import { WordCreateAndUpdateRequestDTO } from '../word/interfaces/dto/word-create-and-update-request'
import { useDailyEnglishWordAPI } from '../word/useDailyEnglishWordAPI'

export const useSaveWord = (
  id: string
): UseMutationResult<Word, unknown, WordCreateAndUpdateRequestDTO, Word> => {
  const { endpoint, create, update } = useDailyEnglishWordAPI()

  const queryClient = useQueryClient()

  const mutationKey = useMemo(() => [endpoint, id], [endpoint, id])

  const mutationFn = useCallback(
    async (word: WordCreateAndUpdateRequestDTO) => {
      if (id) {
        return await update(id, word)
      }

      return await create(word)
    },
    [id, create, update]
  )

  const mutation = useMutation<Word, unknown, WordCreateAndUpdateRequestDTO, Word>(
    mutationKey,
    mutationFn,
    {
      onError: () => {
        console.log('error')
      },
      onSuccess: data => {
        if (id) {
          queryClient.setQueryData(mutationKey, data)

          return
        }
      }
    }
  )

  return mutation
}

export const useIsSavingWord = (id: string): boolean => {
  const { endpoint } = useDailyEnglishWordAPI()

  const mutationKey = useMemo<string[]>(() => [endpoint, id], [endpoint, id])

  return Boolean(useIsMutating(mutationKey))
}
