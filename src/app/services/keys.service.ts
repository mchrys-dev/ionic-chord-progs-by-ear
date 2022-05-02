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
    }
  ];

  constructor() { }

  public getAll() {
    return this.keys;
  }
}
