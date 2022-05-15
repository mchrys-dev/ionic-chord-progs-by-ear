import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChordsService {

  private chords = [
    {
      id: 0,
      name: ''
    },
    // Accords diatoniques en majeur
    {
      id: 1,
      name: 'I'
    },
    {
      id: 2,
      name: 'ii'
    },
    {
      id: 3,
      name: 'iii'
    },
    {
      id: 4,
      name: 'IV'
    },
    {
      id: 5,
      name: 'V'
    },
    {
      id: 6,
      name: 'vi'
    },
    // Accords diatoniques en mineur
    {
      id: 7,
      name: 'i'
    },
    {
      id: 8,
      name: 'iv'
    },
    {
      id: 9,
      name: 'V'
    },
    {
      id: 10,
      name: 'bVI'
    },
    {
      id: 11,
      name: 'Vsus4'
    },
    {
      id: 12,
      name: 'V7'
    },
    {
      id: 13,
      name: 'V7/V'
    },
    {
      id: 14,
      name: 'V7/vi'
    },
  ]

  constructor() { }

  public getAll() {
    return this.chords;
  }
}
