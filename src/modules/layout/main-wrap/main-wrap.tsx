import { Box } from '@chakra-ui/react'
import { ComponentType } from 'react'

export const MainWrap: ComponentType = ({ children }) => {
  return (
    <Box width="95vw" mx="auto">
      {children}
    </Box>
  )
}
