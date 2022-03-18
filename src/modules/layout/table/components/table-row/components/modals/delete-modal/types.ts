import { BaseModalProps } from '../../../../../../../presentational/modals/base-modal/types'

export type DeleteModalProps = { hasEditIcon?: boolean } & Partial<
  Omit<BaseModalProps, 'onOpenButton'>
>
