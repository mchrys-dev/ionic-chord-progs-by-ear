import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhrasesService {

  private phrases = [
    // niveau 1
    {
      id: 1,
      chordIds: [1, 4, 1, 5, 1],
      levelId: 1
    },
    {
      id: 2,
      chordIds: [1, 5, 1, 4, 1],
      levelId: 1
    },
    // niveau 2
    {
      id: 3,
      chordIds: [1, 6, 4, 5, 1],
      levelId: 2
    },
    {
      id: 4,
      chordIds: [1, 6, 4, 5, 6],
      levelId: 2
    }
  ];

  constructor() { }

  getAll() {
    return this.phrases;
  }
}
