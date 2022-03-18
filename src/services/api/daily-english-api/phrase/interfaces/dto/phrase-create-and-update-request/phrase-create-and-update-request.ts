import { Tense } from '../../../../../../../types'

export interface PhraseCreateAndUpdateRequestDTO {
  phrase?: string
  translation?: string

  note?: string

  tense?: Tense

  associatedWords?: string[]
}
