import { Button } from '@chakra-ui/react'

import { Modal } from '../../../presentational'
import { ComponentType } from 'react'

export const NoteModal: ComponentType = ({ children }) => {
  return (
    <Modal
      title="Notes"
      size="sm"
      onOpenButton={
        <Button
          size="xs"
          backgroundColor="secondary.500"
          color="white"
          textAlign="center"
          _hover={{ transition: '0.2s', filter: 'brightness(0.95)' }}
        >
          View
        </Button>
      }
    >
      {children}
    </Modal>
  )
}
