import { BaseButton } from '../../../buttons'
import { BaseModal } from '../..'

import { ComponentType } from 'react'

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

type NoteModalProps = {
  hasNote: boolean
}
