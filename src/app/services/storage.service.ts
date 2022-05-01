import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private selLevelId: number = 1;
  private questStats = [];
  private rightAnsStats = [];

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

  getQuestStats() {
    if(localStorage.getItem('questStats') !== null) {
      this.questStats = JSON.parse(localStorage.getItem('questStats'));
    }
    return this.questStats;
  }

  setQuestStats(stats) {
    this.questStats = stats;
    localStorage.setItem('questStats', JSON.stringify(this.questStats));
  }

  getRightAnsStats() {
    if(localStorage.getItem('rightAnsStats') !== null) {
      this.rightAnsStats = JSON.parse(localStorage.getItem('rightAnsStats'));
    }
    return this.rightAnsStats;
  }

  setRightAnsStats(stats) {
    this.rightAnsStats = stats;
    localStorage.setItem('rightAnsStats', JSON.stringify(this.rightAnsStats));
  }
}
