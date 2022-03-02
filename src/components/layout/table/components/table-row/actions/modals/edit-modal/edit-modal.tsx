import { EditIcon } from '@chakra-ui/icons'

import { ComponentType } from 'react'
import { Modal, ModalProps } from '../../../../../../../presentational'

export const EditModal: ComponentType<EditModalProps> = ({ children, ...props }) => {
  return (
    <Modal
      title={props.title || 'Edit'}
      size={props.size || 'sm'}
      onOpenButton={props.onOpenButton ? props.onOpenButton : <EditIcon />}
    >
      {children}
    </Modal>
  )
}

type EditModalProps = Partial<ModalProps>
