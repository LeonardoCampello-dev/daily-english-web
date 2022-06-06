import { useController, useForm } from 'react-hook-form'

import { PhraseCreateAndUpdateRequestDTO } from 'services/api/daily-english-api/phrase/interfaces'
import { phraseCreateAndUpdateFormValidationSchema } from 'validation/schemas'

export const useEditPhraseForm = () => {
  const { handleSubmit, formState, control, setValue } = useForm<PhraseCreateAndUpdateRequestDTO>({
    resolver: phraseCreateAndUpdateFormValidationSchema
  })

  const useEditPhraseFormControllers = () => {
    const phrase = useController<PhraseCreateAndUpdateRequestDTO, 'phrase'>({
      name: 'phrase',
      control,
      defaultValue: ''
    })

    const translation = useController<PhraseCreateAndUpdateRequestDTO, 'translation'>({
      name: 'translation',
      control,
      defaultValue: ''
    })

    const note = useController<PhraseCreateAndUpdateRequestDTO, 'note'>({
      name: 'note',
      control,
      defaultValue: ''
    })

    const tense = useController<PhraseCreateAndUpdateRequestDTO, 'tense'>({
      name: 'tense',
      control
    })

    return { phrase, translation, note, tense }
  }

  return {
    controllers: useEditPhraseFormControllers(),
    formState,
    handleSubmit,
    setValue
  }
}
