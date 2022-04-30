import { Component, OnInit } from '@angular/core';
import { findItemLabel } from '@ionic/core/dist/types/utils/helpers';
import { ChordsService } from 'src/app/services/chords.service';
import { KeysService } from 'src/app/services/keys.service';
import { LevelsService } from 'src/app/services/levels.service';
import { PhrasesService } from 'src/app/services/phrases.service';
import { StorageService } from 'src/app/services/storage.service';
import { TextsService } from 'src/app/services/texts.service';
import { WebaudioService } from 'src/app/services/webaudio.service';

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
  private selPhrase: {
    id: 0,
    chordIds: [0, 0, 0, 0, 0],
    respChordIds: number[],
    levelId: 0
  };
  private chords = [];
  private keys = [];

  public buttonsDisabled = [
    false, false, false, true
  ];
  public questions = [
    {}, {}, {}, {}
  ];
  public responses = [
    {}, {}, {}, {}
  ];

  public feedbackIcons = [
    {
      icon: '',
      color: ''
    },
    {
      icon: 'close-outline',
      color: 'success'
    },
    {
      icon: 'close-outline',
      color: 'success'
    },
    {
      icon: 'close-outline',
      color: 'success'
    }
  ];

  constructor(
    private textsService: TextsService,
    private storageService: StorageService,
    private levelsService: LevelsService,
    private phrasesService: PhrasesService,
    private chordsService: ChordsService,
    private keysService: KeysService,
    private webAudioService: WebaudioService
  ) { }

  ngOnInit() {
    this.levels = this.levelsService.getAll();
    this.selLevel = this.levels.find(level => level.id === this.storageService.getSelLevelId());
    this.phrases = this.phrasesService.getAll().filter(phrase => phrase.levelId === this.selLevel.id);
    this.chords = this.chordsService.getAll();
    this.keys = this.keysService.getAll();

    this.selPhrase = {
      id: 0,
      chordIds: [0, 0, 0, 0, 0],
      respChordIds: [0],
      levelId: 0
    };
  }

  public getText(key: string) {
    return this.textsService.getText(key);
  }

  public generateProg() {
    this.buttonsDisabled[0] = true;
    this.selPhrase = this.phrases[Math.floor(Math.random()*this.phrases.length)];
    this.playPhrase();
  }

  public playPhrase(this: any) {
    // On arrête toutes les sources actives
    this.webAudioService.stopAll();
    // On réinitialise l'array de sources
    this.webAudioService.sources = [];
    // On joue chaque source
    this.selPhrase.chordIds.forEach(function(this: any, chord: any, index: any) {
      this.webAudioService.play(this.webAudioService[this.keys[0][this.getPhraseChords()[index].name]], 1.5*index);
    }.bind(this));
    // this.webAudioService.play(this.webAudioService[this.keys[0][this.phrasesChords[0].name]], 0);
    // this.webAudioService.play(this.webAudioService[this.keys[0][this.phrasesChords[1].name]], 1.5);
  }

  public getFirstChord() {
    let firstChord = this.chords.find(chord => chord.id === this.selPhrase.chordIds[0]);
    return firstChord;
  }

  public getPhraseChords() {
    let phraseChords = [];
    for(let i=0; i<this.selPhrase.chordIds.length; i++)  {
      phraseChords.push(this.chords.find(chord => chord.id === this.selPhrase.chordIds[i]));
    }
    return phraseChords;
  }

  public getQuestChords() {
    for(let i=0; i<this.questions.length; i++) {
      this.questions[i] = this.chords.find(chord => chord.id === this.selPhrase.chordIds[i+1]);
    }
    return this.questions;
  }

  public getRespChords() {
    return this.chords.filter(chord => this.selPhrase.respChordIds.includes(chord.id));
  }
}
