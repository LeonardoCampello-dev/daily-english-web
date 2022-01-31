import { DateRecords } from '../../types';

interface Entity {
  id: string;

  word: string;
  translation: string;

  note?: string;

  deleted: boolean;
}

export type Word = Entity & DateRecords;
