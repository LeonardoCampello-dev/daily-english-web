import { EditIcon } from '@chakra-ui/icons'

import { Modal, ModalProps } from '../../../../../../../../presentational'
import { ComponentType } from 'react'

export const EditModal: ComponentType<EditModalProps> = ({ children, ...props }) => {
  return (
    <Modal title={props.title || 'Edit'} size={props.size || 'sm'} onOpenButton={<EditIcon />}>
      {children}
    </Modal>
  )
}

type EditModalProps = Partial<Omit<ModalProps, 'onOpenButton'>>