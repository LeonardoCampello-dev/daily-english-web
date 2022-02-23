import { DeleteIcon } from '@chakra-ui/icons'

import { Modal, ModalProps } from '../../../../../../../../presentational'
import { ComponentType } from 'react'

export const DeleteModal: ComponentType<DeleteModalProps> = ({ children, ...props }) => {
  return (
    <Modal
      title={props.title || 'Delete'}
      size={props.size || 'sm'}
      onOpenButton={<DeleteIcon ml={props.hasEditIcon ? '8px' : undefined} />}
    >
      {children}
    </Modal>
  )
}

type DeleteModalProps = { hasEditIcon?: boolean } & Partial<Omit<ModalProps, 'onOpenButton'>>
