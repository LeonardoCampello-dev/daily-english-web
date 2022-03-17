import {
  Alert as ChakraAlert,
  AlertDescription,
  AlertIcon,
  AlertProps as ChakraAlertProps,
  AlertTitle,
  CloseButton
} from '@chakra-ui/react'

import { ComponentType, ReactNode } from 'react'

export const Alert: ComponentType<AlertProps> = ({
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
      <ChakraAlert
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
      </ChakraAlert>
    )
  }

  return (
    <ChakraAlert status={status} variant={variant} borderRadius={4}>
      {!hideIcon && <AlertIcon />}

      <AlertTitle>{title}</AlertTitle>

      {description && <AlertDescription>{description}</AlertDescription>}

      {!hideCloseButton && <CloseButton position="absolute" right="8px" top="8px" />}
    </ChakraAlert>
  )
}

type AlertProps = {
  title: string
  description?: string | JSX.Element | ReactNode | (string | JSX.Element | ReactNode)[]
  hideIcon?: boolean
  hideCloseButton?: boolean
  renderInColumns?: boolean
} & Pick<ChakraAlertProps, 'variant' | 'status'>
