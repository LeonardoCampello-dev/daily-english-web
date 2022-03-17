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

export type BaseModalProps = {
  title: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | 'full'
  onOpenButton: ReactNode
  footer?: ReactNode
}
