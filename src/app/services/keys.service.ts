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
      ii: 'Dm',
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
      ii: 'Am',
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
      ii: 'Gm',
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
      ii: 'Em',
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
      ii: 'Cm',
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
      ii: 'Bm',
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
      ii: 'Fm',
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
      ii: 'Fsharpm',
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
      ii: 'Bbm',
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
      ii: 'Csharpm',
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
