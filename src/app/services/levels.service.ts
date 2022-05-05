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
    }
  ]

  constructor() { }

  getAll() {
    return this.levels;
  }
}
