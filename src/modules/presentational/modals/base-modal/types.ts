import { ReactNode } from 'react'

export type BaseModalProps = {
  title: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | 'full'
  onOpenButton: ReactNode
  footer?: ReactNode
}
