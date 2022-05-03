import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KeysService {

  private keys = [
    {
      id: 1,
      I: 'C',
      i: 'Cm',
      IV: 'F',
      iv: 'Fm',
      V: 'G',
      bVI: 'Ab',
      vi: 'Am',
    },
    {
      id: 2,
      I: 'G',
      i: 'Gm',
      IV: 'C',
      iv: 'Cm',
      V: 'D',
      bVI: 'Eb',
      vi: 'Em',
    },
    {
      id: 3,
      I: 'F',
      i: 'Fm',
      IV: 'Bb',
      iv: 'Bbm',
      V: 'C',
      bVI: 'Db',
      vi: 'Dm',
    }
  ];

  constructor() { }

  public getAll() {
    return this.keys;
  }
}
