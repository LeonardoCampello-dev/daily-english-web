import { Tr, Td } from '@chakra-ui/react'

import { ComponentType, ReactNode } from 'react'

import { DeleteModal, EditModal } from './actions/modals'

export const TableRow: ComponentType<TableRowProps> = ({ columns, actions }) => {
  return (
    <Tr>
      {columns.map((column, index) => (
        <Td key={index} px={2} textAlign="center">
          {column}
        </Td>
      ))}

      <Td px={2} textAlign="center">
        {actions?.edit?.content && (
          <EditModal title={actions.edit.title}>{actions?.edit.content}</EditModal>
        )}

        {actions?.delete?.content && (
          <DeleteModal title={actions.delete.title} hasEditIcon>
            {actions?.delete.content}
          </DeleteModal>
        )}
      </Td>
    </Tr>
  )
}

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
