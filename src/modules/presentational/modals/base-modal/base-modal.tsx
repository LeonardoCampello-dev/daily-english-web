import {
  Modal as ChakraModal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure
} from '@chakra-ui/react'

import { cloneElement, ComponentType, Fragment, isValidElement, ReactNode } from 'react'
import { BaseModalProps } from './types'

export const BaseModal: ComponentType<BaseModalProps> = ({
  children,
  title,
  size = 'md',
  footer,
  onOpenButton
}) => {
  const { isOpen, onClose, onOpen } = useDisclosure()

  const generateOpenButtonWithAction = (button: ReactNode) => {
    if (isValidElement(button)) {
      return cloneElement(button, { onClick: onOpen })
    }
  }

  return (
    <Fragment>
      {generateOpenButtonWithAction(onOpenButton)}

      <ChakraModal isOpen={isOpen} onClose={onClose} size={size} isCentered closeOnEsc>
        <ModalOverlay />

        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />

          <ModalBody>{children}</ModalBody>

          {footer && <ModalFooter>{footer}</ModalFooter>}
        </ModalContent>
      </ChakraModal>
    </Fragment>
  )
}
