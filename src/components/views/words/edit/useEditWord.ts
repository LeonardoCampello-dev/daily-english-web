import { useCallback, useEffect } from 'react'

import {
  useIsSavingWord,
  useSaveWord
} from '../../../../services/api/daily-english-api/mutations/useSaveWord'

import { useGetWordById } from '../../../../services/api/daily-english-api/queries/useGetWordById'
import { WordCreateAndUpdateRequestDTO } from '../../../../services/api/daily-english-api/word/interfaces/dto/word-create-and-update-request'

import { useEditWordForm } from './useEditWordForm'

export const useEditWord = ({ id }: useEditWordProps) => {
  const { controllers, formState, handleSubmit, setValue } = useEditWordForm()

  const { mutateAsync: saveWord } = useSaveWord(id)

  const isSaving = useIsSavingWord(id)

  const onSubmit = useCallback(
    (data: WordCreateAndUpdateRequestDTO) => {
      saveWord(data)
    },
    [saveWord]
  )

  const { data, isLoading, isFetching } = useGetWordById(id)

  useEffect(() => {
    if (data) {
      setValue('word', data.word)
      setValue('translation', data.translation)
      setValue('note', data.note)
    }
  }, [data, setValue])

  return {
    controllers,
    formState,
    handleSubmit,
    isSaving,
    isLoading,
    isFetching,
    onSubmit
  }
}

type useEditWordProps = {
  id?: string
}
