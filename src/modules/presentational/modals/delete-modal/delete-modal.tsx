import { DeleteIcon } from '@chakra-ui/icons'

import { BaseModal } from 'modules/presentational'
import { ComponentType } from 'react'
import { DeleteModalProps } from './types'

export const DeleteModal: ComponentType<DeleteModalProps> = ({ children, ...props }) => {
  return (
    <BaseModal
      title={props.title || 'Delete'}
      size={props.size || 'sm'}
      onOpenButton={<DeleteIcon ml={props.hasEditIcon ? '8px' : undefined} />}
    >
      {children}
    </BaseModal>
  )
}
