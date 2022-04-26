import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KeysService {

  private keys = [
    {
      id: 1,
      I: 'C',
      IV:'F',
      V: 'G',
      vi: 'Am'
    }
  ];

  constructor() { }

  public getAll() {
    return this.keys;
  }
}
