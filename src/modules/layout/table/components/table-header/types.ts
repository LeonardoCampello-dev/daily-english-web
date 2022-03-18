import { ReactNode } from 'react'

export type TableHeaderProps = {
  columns: (string | JSX.Element | ReactNode)[]
  hasActions: boolean
}
