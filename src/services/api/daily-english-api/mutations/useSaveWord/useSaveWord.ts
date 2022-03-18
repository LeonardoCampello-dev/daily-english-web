import { useToast } from '@chakra-ui/react'

import { useCallback, useMemo } from 'react'
import { useIsMutating, useMutation, UseMutationResult, useQueryClient } from 'react-query'

import { Word } from 'domain/entities'
import { GetAllRequestResponse } from 'services/api/daily-english-api/interfaces'
import { WordCreateAndUpdateRequestDTO } from 'services/api/daily-english-api/word/interfaces'
import { useDailyEnglishWordAPI } from 'services/api/daily-english-api/word/useDailyEnglishWordAPI'
import { toastDefaultOptions } from 'utils/toast'

export const useSaveWord = (
  id = ''
): UseMutationResult<Word, unknown, WordCreateAndUpdateRequestDTO, Word> => {
  const toast = useToast()

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
        toast({
          description: 'There was an error while performing the update 🙁',
          status: 'error',
          ...toastDefaultOptions
        })
      },
      onSuccess: data => {
        const previousWordList = queryClient.getQueryData<GetAllRequestResponse<Word>>('words')

        queryClient.setQueryData(mutationKey, data)

        if (id) {
          if (previousWordList) {
            const changedItemIndex = previousWordList.items.findIndex(item => item.id === data.id)

            previousWordList.items[changedItemIndex] = data

            queryClient.setQueryData<GetAllRequestResponse<Word>>('words', {
              items: [...previousWordList.items],
              count: previousWordList.items.length
            })
          }

          toast({
            description: 'Translation updated successfully 😎',
            status: 'success',
            ...toastDefaultOptions
          })

          return
        }

        if (previousWordList) {
          previousWordList.items.push(data)

          queryClient.setQueryData<GetAllRequestResponse<Word>>('words', {
            items: [...previousWordList.items],
            count: previousWordList.items.length
          })
        }

        toast({
          description: 'Translation created successfully 🥳',
          status: 'success',
          ...toastDefaultOptions
        })
      }
    }
  )

  return mutation
}

export const useIsSavingWord = (id = ''): boolean => {
  const { endpoint } = useDailyEnglishWordAPI()

  const mutationKey = useMemo<string[]>(() => [endpoint, id], [endpoint, id])

  return Boolean(useIsMutating(mutationKey))
}
