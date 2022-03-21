import { useCallback, useEffect, useMemo } from 'react'

import { useEditPhraseForm } from '..'
import { useIsSavingPhrase, useSavePhrase } from 'services/api/daily-english-api/mutations'
import { PhraseCreateAndUpdateRequestDTO } from 'services/api/daily-english-api/phrase/interfaces'
import { useGetPhraseById } from 'services/api/daily-english-api/queries'
import { TenseEnum } from 'types'
import { capitalize } from 'utils/formatters'

export const useEditPhrase = ({ id }: useEditPhraseProps) => {
  const { controllers, formState, handleSubmit, setValue } = useEditPhraseForm()

  const { mutateAsync: savePhrase } = useSavePhrase(id)

  const isSaving = useIsSavingPhrase(id)

  const onSubmit = useCallback(
    (data: PhraseCreateAndUpdateRequestDTO) => {
      savePhrase(data)
    },
    [savePhrase]
  )

  const { data, isLoading, isFetching } = useGetPhraseById(id)

  const tenseSelectOptions = useMemo(
    () =>
      Object.values(TenseEnum).map(tense => ({
        label: capitalize(tense),
        value: tense
      })),
    []
  )

  useEffect(() => {
    if (data) {
      setValue('phrase', data.phrase)
      setValue('translation', data.translation)
      setValue('note', data.note)
      setValue('tense', data.tense)
    }
  }, [data, setValue])

  return {
    controllers,
    formState,
    handleSubmit,
    isSaving,
    isLoading,
    isFetching,
    onSubmit,
    tenseSelectOptions
  }
}

type useEditPhraseProps = {
  id?: string
}
