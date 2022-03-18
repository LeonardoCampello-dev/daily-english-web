import { ReactNode } from 'react'

export type TableRowProps = {
  columns: (string | JSX.Element | ReactNode)[]
  actions?: {
    delete?: TableRowAction
    edit?: TableRowAction
  }
}

export type TableRowAction = {
  title?: string
  content: JSX.Element | ReactNode
}
