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
      respChordIds: [1, 4, 5],
      levelId: 1
    },
    {
      id: 2,
      chordIds: [7, 8, 7, 9, 7],
      respChordIds: [7, 8, 9],
      levelId: 1
    },
    {
      id: 3,
      chordIds: [1, 5, 1, 4, 1],
      respChordIds: [1, 4, 5],
      levelId: 1
    },
    {
      id: 4,
      chordIds: [7, 9, 7, 8, 7],
      respChordIds: [7, 8, 9],
      levelId: 1
    },
    {
      id: 5,
      chordIds: [1, 4, 5, 1, 5],
      respChordIds: [1, 4, 5],
      levelId: 1
    },
    {
      id: 6,
      chordIds: [7, 8, 9, 7, 9],
      respChordIds: [7, 8, 9],
      levelId: 1
    },
    {
      id: 7,
      chordIds: [1, 5, 1, 4, 5],
      respChordIds: [1, 4, 5],
      levelId: 1
    },
    {
      id: 8,
      chordIds: [7, 9, 7, 8, 9],
      respChordIds: [7, 8, 9],
      levelId: 1
    },
    // niveau 2
    {
      id: 9,
      chordIds: [1, 6, 4, 5, 1],
      respChordIds: [1, 4, 5, 6],
      levelId: 2
    },
    {
      id: 10,
      chordIds: [7, 10, 8, 9, 7],
      respChordIds: [7, 8, 9, 10],
      levelId: 2
    },
    {
      id: 11,
      chordIds: [1, 6, 4, 5, 6],
      respChordIds: [1, 4, 5, 6],
      levelId: 2
    },
    {
      id: 12,
      chordIds: [7, 10, 8, 9, 10],
      respChordIds: [7, 8, 9, 10],
      levelId: 2
    },
    {
      id: 13,
      chordIds: [1, 5, 6, 4, 5],
      respChordIds: [1, 4, 5, 6],
      levelId: 2
    },
    {
      id: 14,
      chordIds: [7, 9, 10, 8, 9],
      respChordIds: [7, 8, 9, 10],
      levelId: 2
    },
    {
      id: 15,
      chordIds: [1, 4, 1, 5, 6],
      respChordIds: [1, 4, 5, 6],
      levelId: 2
    },
    {
      id: 16,
      chordIds: [7, 8, 7, 9, 10],
      respChordIds: [7, 8, 9, 10],
      levelId: 2
    },
  ];

  constructor() { }

  getAll() {
    return this.phrases;
  }
}
