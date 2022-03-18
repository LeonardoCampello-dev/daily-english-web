import { DeleteIcon } from '@chakra-ui/icons'

import { ComponentType } from 'react'
import { BaseModal } from '../../../../../../../presentational'
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
