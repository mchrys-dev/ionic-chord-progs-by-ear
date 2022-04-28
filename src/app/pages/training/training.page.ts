import { Component, OnInit } from '@angular/core';
import { LevelsService } from 'src/app/services/levels.service';
import { PhrasesService } from 'src/app/services/phrases.service';
import { StorageService } from 'src/app/services/storage.service';
import { TextsService } from 'src/app/services/texts.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.page.html',
  styleUrls: ['./training.page.scss'],
})
export class TrainingPage implements OnInit {

  private levels = [];
  private selLevel = {
    id: 0,
    description: {
      en: '',
      fr: ''
    }
  };
  private phrases = [];
  private selPhrase: Object;

  constructor(
    private textsService: TextsService,
    private storageService: StorageService,
    private levelsService: LevelsService,
    private phrasesService: PhrasesService
  ) { }

  ngOnInit() {
    this.levels = this.levelsService.getAll();
    this.selLevel = this.levels.find(level => level.id === this.storageService.getSelLevelId());
    this.phrases = this.phrasesService.getAll().filter(phrase => phrase.levelId === this.selLevel.id);
  }

  public getText(key: string) {
    return this.textsService.getText(key);
  }

  public generateProg() {
    this.selPhrase = this.phrases[Math.floor(Math.random()*this.phrases.length)];
    console.log(this.selPhrase);
  }
}
