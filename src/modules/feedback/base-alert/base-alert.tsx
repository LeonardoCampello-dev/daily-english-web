import { Alert, AlertDescription, AlertIcon, AlertTitle, CloseButton } from '@chakra-ui/react'

import { ComponentType } from 'react'
import { AlertProps } from './types'

export const BaseAlert: ComponentType<AlertProps> = ({
  title,
  description,
  hideIcon = false,
  hideCloseButton = false,
  status,
  variant,
  renderInColumns = false
}) => {
  if (renderInColumns) {
    return (
      <Alert
        status={status}
        variant={variant}
        borderRadius={4}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
      >
        {!hideIcon && <AlertIcon boxSize={8} />}

        <AlertTitle mt={4} mb={2}>
          {title}
        </AlertTitle>

        {description && <AlertDescription>{description}</AlertDescription>}

        {!hideCloseButton && <CloseButton position="absolute" right="8px" top="8px" />}
      </Alert>
    )
  }

  return (
    <Alert status={status} variant={variant} borderRadius={4}>
      {!hideIcon && <AlertIcon />}

      <AlertTitle>{title}</AlertTitle>

      {description && <AlertDescription>{description}</AlertDescription>}

      {!hideCloseButton && <CloseButton position="absolute" right="8px" top="8px" />}
    </Alert>
  )
}
