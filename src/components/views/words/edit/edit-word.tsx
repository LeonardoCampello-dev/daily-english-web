import { Box, ButtonGroup } from '@chakra-ui/react'

import { ComponentType } from 'react'
import { BaseButton, BaseButtonColorsEnum } from '../../../buttons'
import { BaseFormControl } from '../../../forms'

import { BaseInput } from '../../../inputs'
import { BaseTextarea } from '../../../textareas'
import { EditWordFormSkeleton } from './components/form-skeleton'

import { useEditWord } from './useEditWord'

export const EditWord: ComponentType<EditWordProps> = ({ id }) => {
  const { controllers, formState, isLoading, isFetching, isSaving, onSubmit, handleSubmit } =
    useEditWord({ id })

  if (isLoading || isFetching || isSaving) {
    return <EditWordFormSkeleton />
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box px={4} py={4}>
        <BaseFormControl
          isInvalid={Boolean(formState.errors.translation?.message)}
          label={'Word'}
          labelHtmlFor={'word'}
          errorMessage={formState.errors.word?.message}
          field={<BaseInput id="word" controller={controllers.word} placeholder="type the word" />}
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

type EditWordProps = {
  id?: string
}
