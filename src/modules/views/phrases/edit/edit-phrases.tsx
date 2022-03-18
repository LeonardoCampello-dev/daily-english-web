import { Box, ButtonGroup } from '@chakra-ui/react'

import { ComponentType } from 'react'

import { EditPhraseFormSkeleton } from './components'
import { BaseButton } from 'modules/buttons'
import { BaseButtonColorsEnum } from 'modules/buttons/base-button/enums'
import { BaseInput } from 'modules/inputs'
import { BaseFormControl } from 'modules/forms'
import { BaseSelect } from 'modules/selects'
import { BaseTextarea } from 'modules/textareas'
import { EditPhraseProps } from './types'
import { useEditPhrase } from './useEditPhrase'

export const EditPhrase: ComponentType<EditPhraseProps> = ({ id }) => {
  const {
    controllers,
    formState,
    isLoading,
    isFetching,
    isSaving,
    onSubmit,
    handleSubmit,
    tenseSelectOptions
  } = useEditPhrase({ id })

  if (isLoading || isFetching || isSaving) {
    return <EditPhraseFormSkeleton />
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box px={4} py={4}>
        <BaseFormControl
          isInvalid={Boolean(formState.errors.translation?.message)}
          label={'Phrase'}
          labelHtmlFor={'phrase'}
          errorMessage={formState.errors.phrase?.message}
          field={
            <BaseInput id="phrase" controller={controllers.phrase} placeholder="type the phrase" />
          }
        />

        <BaseFormControl
          mt={4}
          isInvalid={Boolean(formState.errors.translation?.message)}
          label={'Translation'}
          labelHtmlFor={'translation'}
          errorMessage={formState.errors.translation?.message}
          field={
            <BaseInput
              id="translation"
              controller={controllers.translation}
              placeholder="type the translation"
            />
          }
        />

        <BaseFormControl
          mt={4}
          label={'Note'}
          labelHtmlFor={'note'}
          field={<BaseTextarea id="note" controller={controllers.note} placeholder="type a note" />}
        />

        <BaseFormControl
          mt={4}
          isInvalid={Boolean(formState.errors.tense?.message)}
          label={'Verbe tense'}
          labelHtmlFor={'verbe-tense'}
          field={
            <BaseSelect
              id="verbe-tense"
              controller={controllers.tense}
              options={tenseSelectOptions}
              placeholder="select the verb tense"
            />
          }
        />

        <ButtonGroup display="flex" alignItems="center" justifyContent="flex-end" mt={4}>
          <BaseButton colorScheme={BaseButtonColorsEnum.ERROR}>Cancel</BaseButton>

          <BaseButton colorScheme={BaseButtonColorsEnum.SUCCESS} type="submit" isLoading={isSaving}>
            {id ? 'Save' : 'Create'}
          </BaseButton>
        </ButtonGroup>
      </Box>
    </form>
  )
}
