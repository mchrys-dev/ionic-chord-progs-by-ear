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
    },
    {
      id: 4,
      I: 'D',
      i: 'Dm',
      IV: 'G',
      iv: 'Gm',
      V: 'A',
      bVI: 'Bb',
      vi: 'Bm',
    },
    {
      id: 5,
      I: 'Bb',
      i: 'Bbm',
      IV: 'Eb',
      iv: 'Ebm',
      V: 'F',
      bVI: 'Gb',
      vi: 'Gm',
    },
    {
      id: 6,
      I: 'A',
      i: 'Am',
      IV: 'D',
      iv: 'Dm',
      V: 'E',
      bVI: 'F',
      vi: 'Fsharpm',
    },
    {
      id: 7,
      I: 'Eb',
      i: 'Ebm',
      IV: 'Ab',
      iv: 'Abm',
      V: 'Bb',
      bVI: 'Cb',
      vi: 'Cm',
    },
    {
      id: 8,
      I: 'E',
      i: 'Em',
      IV: 'A',
      iv: 'Am',
      V: 'B',
      bVI: 'C',
      vi: 'Csharpm',
    },
    {
      id: 9,
      I: 'Ab',
      i: 'Abm',
      IV: 'Db',
      iv: 'Dbm',
      V: 'Eb',
      bVI: 'Fb',
      vi: 'Fm',
    },
    {
      id: 10,
      I: 'B',
      i: 'Bm',
      IV: 'E',
      iv: 'Em',
      V: 'Fsharp',
      bVI: 'G',
      vi: 'Gsharpm',
    },
  ];

  constructor() { }

  public getAll() {
    return this.keys;
  }
}
