import { BaseButton } from 'modules/buttons'
import { BaseModal } from 'modules/presentational'

import { ComponentType } from 'react'
import { NoteModalProps } from './types'

export const NoteModal: ComponentType<NoteModalProps> = ({ children, hasNote }) => {
  return (
    <BaseModal
      title="Notes"
      size="sm"
      onOpenButton={
        <BaseButton
          size="xs"
          backgroundColor="secondary.500"
          color="white"
          textAlign="center"
          disabled={hasNote ? false : true}
        >
          {hasNote ? 'View' : 'No note'}
        </BaseButton>
      }
    >
      {children}
    </BaseModal>
  )
}
