import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private selLevelId: number;

  constructor() {
    
  }

  getSelLevelId() {
    localStorage.getItem('selLevellId') === null ? this.selLevelId = 1 : this.selLevelId = parseInt(localStorage.getItem('selLevelId'));
    return this.selLevelId;
  }

  setSelLevelId(id: number) {
    localStorage.setItem('selLevelId', id.toString());
  }
}
