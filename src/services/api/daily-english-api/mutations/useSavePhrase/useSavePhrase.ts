import { useToast } from '@chakra-ui/react'

import { useCallback, useMemo } from 'react'
import { useIsMutating, useMutation, UseMutationResult, useQueryClient } from 'react-query'

import { Phrase } from 'domain/entities'
import { GetAllRequestResponse } from 'services/api/daily-english-api/interfaces'
import { PhraseCreateAndUpdateRequestDTO } from 'services/api/daily-english-api/phrase/interfaces'
import { useDailyEnglishPhraseAPI } from 'services/api/daily-english-api/phrase/useDailyEnglishPhraseAPI'
import { toastDefaultOptions } from 'utils/toast'

export const useSavePhrase = (
  id = ''
): UseMutationResult<Phrase, unknown, PhraseCreateAndUpdateRequestDTO, Phrase> => {
  const toast = useToast()

  const { endpoint, create, update } = useDailyEnglishPhraseAPI()

  const queryClient = useQueryClient()

  const mutationKey = useMemo(() => [endpoint, id], [endpoint, id])

  const mutationFn = useCallback(
    async (phrase: PhraseCreateAndUpdateRequestDTO) => {
      if (id) {
        return await update(id, phrase)
      }

      return await create(phrase)
    },
    [id, create, update]
  )

  const mutation = useMutation<Phrase, unknown, PhraseCreateAndUpdateRequestDTO, Phrase>(
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
        const previousPhraseList =
          queryClient.getQueryData<GetAllRequestResponse<Phrase>>('phrases')

        queryClient.setQueryData(mutationKey, data)

        if (id) {
          if (previousPhraseList) {
            const changedItemIndex = previousPhraseList.items.findIndex(item => item.id === data.id)

            previousPhraseList.items[changedItemIndex] = data

            queryClient.setQueryData<GetAllRequestResponse<Phrase>>('phrases', {
              items: [...previousPhraseList.items],
              count: previousPhraseList.items.length
            })
          }

          toast({
            description: 'Translation updated successfully 😎',
            status: 'success',
            ...toastDefaultOptions
          })

          return
        }

        if (previousPhraseList) {
          previousPhraseList.items.push(data)

          queryClient.setQueryData<GetAllRequestResponse<Phrase>>('phrases', {
            items: [...previousPhraseList.items],
            count: previousPhraseList.items.length
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

export const useIsSavingPhrase = (id = ''): boolean => {
  const { endpoint } = useDailyEnglishPhraseAPI()

  const mutationKey = useMemo<string[]>(() => [endpoint, id], [endpoint, id])

  return Boolean(useIsMutating(mutationKey))
}
