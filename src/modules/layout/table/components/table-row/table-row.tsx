import { Tr, Td } from '@chakra-ui/react'

import { DeleteModal, EditModal } from 'modules/presentational'
import { ComponentType } from 'react'
import { TableRowProps } from './types'

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
