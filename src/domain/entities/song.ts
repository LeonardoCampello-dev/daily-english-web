import { DateRecords } from '../../types';

interface Entity {
  id: string;

  title: string;
  author: string;

  url: string;

  note?: string;
  subject: string;

  keywords?: string[];

  deleted: boolean;
}

export type Song = Entity & DateRecords;
