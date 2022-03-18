import { EditIcon } from '@chakra-ui/icons'

import { BaseModal } from 'modules/presentational'
import { ComponentType } from 'react'
import { EditModalProps } from './types'

export const EditModal: ComponentType<EditModalProps> = ({ children, ...props }) => {
  return (
    <BaseModal
      title={props.title || 'Edit'}
      size={props.size || 'sm'}
      onOpenButton={props.onOpenButton ? props.onOpenButton : <EditIcon />}
    >
      {children}
    </BaseModal>
  )
}
