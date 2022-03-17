import { EditIcon } from '@chakra-ui/icons'

import { ComponentType } from 'react'
import { BaseModal, BaseModalProps } from '../../../../../../../presentational'

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

type EditModalProps = Partial<BaseModalProps>
