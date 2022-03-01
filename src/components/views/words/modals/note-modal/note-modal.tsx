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
          _hover={{ transition: '0.2s', filter: 'brightness(0.95)' }}
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
