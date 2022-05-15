import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LevelsService {

  private levels = [
    {
      id: 1,
      description: {
        en: 'I or i, IV or iv and V',
        fr: 'I ou i, IV ou iv et V'
      }
    },
    {
      id: 2,
      description: {
        en: 'vi or bVI',
        fr: 'vi ou bVI'
      }
    },
    {
      id: 3,
      description: {
        en: 'ii',
        fr: 'ii'
      }
    },
    {
      id: 4,
      description: {
        en: 'iii',
        fr: 'iii'
      }
    },
    {
      id: 5,
      description: {
        en: 'Vsus4',
        fr: 'Vsus4'
      }
    },
    {
      id: 6,
      description: {
        en: 'V7',
        fr: 'V7'
      }
    },
  ]

  constructor() { }

  getAll() {
    return this.levels;
  }
}
