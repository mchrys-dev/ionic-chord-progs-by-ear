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
    // Niveau 3
    {
      id: 17,
      chordIds: [1, 6, 4, 2, 5],
      respChordIds: [1, 2, 4, 5, 6],
      levelId: 3
    },
    {
      id: 18,
      chordIds: [1, 4, 2, 5, 1],
      respChordIds: [1, 2, 4, 5, 6],
      levelId: 3
    },
    {
      id: 19,
      chordIds: [1, 4, 2, 5, 6],
      respChordIds: [1, 2, 4, 5, 6],
      levelId: 3
    },
    {
      id: 20,
      chordIds: [1, 2, 5, 1, 5],
      respChordIds: [1, 2, 4, 5, 6],
      levelId: 3
    },
    {
      id: 21,
      chordIds: [1, 2, 5, 6, 5],
      respChordIds: [1, 2, 4, 5, 6],
      levelId: 3
    },
    {
      id: 22,
      chordIds: [1, 6, 2, 5, 1],
      respChordIds: [1, 2, 4, 5, 6],
      levelId: 3
    },
    {
      id: 23,
      chordIds: [1, 6, 2, 5, 6],
      respChordIds: [1, 2, 4, 5, 6],
      levelId: 3
    },
    // Niveau 4
    {
      id: 24,
      chordIds: [1, 6, 3, 4, 5],
      respChordIds: [1, 2, 3, 4, 5, 6],
      levelId: 4
    },
    {
      id: 25,
      chordIds: [1, 3, 4, 5, 1],
      respChordIds: [1, 2, 3, 4, 5, 6],
      levelId: 4
    },
    {
      id: 26,
      chordIds: [1, 3, 4, 5, 6],
      respChordIds: [1, 2, 3, 4, 5, 6],
      levelId: 4
    },
    {
      id: 27,
      chordIds: [1, 3, 4, 2, 5],
      respChordIds: [1, 2, 3, 4, 5, 6],
      levelId: 4
    },
    {
      id: 28,
      chordIds: [1, 2, 3, 4, 5],
      respChordIds: [1, 2, 3, 4, 5, 6],
      levelId: 4
    },
    {
      id: 29,
      chordIds: [1, 3, 6, 2, 5],
      respChordIds: [1, 2, 3, 4, 5, 6],
      levelId: 4
    },
    {
      id: 30,
      chordIds: [1, 3, 6, 4, 5],
      respChordIds: [1, 2, 3, 4, 5, 6],
      levelId: 4
    },
    // Niveau 5
    {
      id: 31,
      chordIds: [1, 6, 4, 11, 5],
      respChordIds: [1, 2, 3, 4, 5, 11, 6],
      levelId: 5
    },
    {
      id: 32,
      chordIds: [7, 10, 8, 11, 9],
      respChordIds: [7, 8, 9, 11, 10],
      levelId: 5
    },
    {
      id: 33,
      chordIds: [1, 6, 2, 11, 5],
      respChordIds: [1, 2, 3, 4, 5, 11, 6],
      levelId: 5
    },
    {
      id: 34,
      chordIds: [1, 4, 2, 11, 5],
      respChordIds: [1, 2, 3, 4, 5, 11, 6],
      levelId: 5
    },
    {
      id: 35,
      chordIds: [1, 4, 11, 5, 1],
      respChordIds: [1, 2, 3, 4, 5, 11, 6],
      levelId: 5
    },
    {
      id: 36,
      chordIds: [7, 8, 11, 9, 7],
      respChordIds: [7, 8, 9, 11, 10],
      levelId: 5
    },
    {
      id: 37,
      chordIds: [1, 4, 11, 5, 6],
      respChordIds: [1, 2, 3, 4, 5, 11, 6],
      levelId: 5
    },
    {
      id: 38,
      chordIds: [7, 8, 11, 9, 10],
      respChordIds: [7, 8, 9, 11, 10],
      levelId: 5
    },
    {
      id: 39,
      chordIds: [1, 2, 11, 5, 1],
      respChordIds: [1, 2, 3, 4, 5, 11, 6],
      levelId: 5
    },
    {
      id: 40,
      chordIds: [1, 2, 11, 5, 6],
      respChordIds: [1, 2, 3, 4, 5, 11, 6],
      levelId: 5
    },
  ];

  constructor() { }

  getAll() {
    return this.phrases;
  }
}
