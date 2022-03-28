import { Badge, BadgeProps } from '@chakra-ui/react'
import { ComponentType } from 'react'

export const BaseBadge: ComponentType<BadgeProps> = ({ children, ...props }) => {
  return <Badge {...props}>{children}</Badge>
}
