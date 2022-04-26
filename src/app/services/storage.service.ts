import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private selLevelId: number = 1;

  constructor() {
     
  }

  getSelLevelId() {
    if(localStorage.getItem('selLevelId') !== null) {
      this.selLevelId = parseInt(localStorage.getItem('selLevelId'));
    }
    return this.selLevelId;
  }

  setSelLevelId(id: number) {
    this.selLevelId = id;
    localStorage.setItem('selLevelId', id.toString());
  }
}
