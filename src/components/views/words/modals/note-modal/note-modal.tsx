import { BaseButton } from '../../../../buttons'
import { Modal } from '../../../../presentational'

import { ComponentType } from 'react'

export const NoteModal: ComponentType<NoteModalProps> = ({ children, hasNote }) => {
  return (
    <Modal
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
    </Modal>
  )
}

type NoteModalProps = {
  hasNote: boolean
}
