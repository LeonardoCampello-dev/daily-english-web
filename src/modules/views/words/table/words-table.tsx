import { AddIcon } from '@chakra-ui/icons'

import { ComponentType } from 'react'

import { EditWord } from '../edit'
import { useWordsTable } from './hooks'
import { BaseButton } from 'modules/buttons'
import { Table } from 'modules/layout'
import { EditModal } from 'modules/presentational'

export const WordsTable: ComponentType = () => {
  const { columns, isError, isFetching, isLoading, data, rows } = useWordsTable()

  return (
    <Table
      hasActions
      columns={columns}
      rows={rows}
      rowsCount={data?.items.length}
      isError={isError}
      isLoading={isLoading || isFetching}
      componentBeforeTable={
        <EditModal
          title="Add new word"
          onOpenButton={
            <BaseButton backgroundColor="primary.500" color="white" mb={2} leftIcon={<AddIcon />}>
              Add new word
            </BaseButton>
          }
        >
          <EditWord />
        </EditModal>
      }
    />
  )
}
