import { Tr, Td } from '@chakra-ui/react'

import { ComponentType, ReactNode } from 'react'
import { DeleteModal, EditModal } from './actions/modals'

export const TableRow: ComponentType<TableRowProps> = ({ columns, actions }) => {
  return (
    <Tr>
      {columns.map(column => (
        <Td px={2} textAlign="center">
          {column}
        </Td>
      ))}

      <Td px={2} textAlign="center">
        {actions?.edit?.content && (
          <EditModal title={actions.edit.title || undefined}>{actions?.edit.content}</EditModal>
        )}
        {actions?.delete?.content && (
          <DeleteModal title={actions.delete.title || undefined} hasEditIcon>
            {actions?.delete.content}
          </DeleteModal>
        )}
      </Td>
    </Tr>
  )
}

type TableRowProps = {
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
