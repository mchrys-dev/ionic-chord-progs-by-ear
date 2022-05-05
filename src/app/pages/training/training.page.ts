import { Component, OnInit } from '@angular/core';
import { findItemLabel } from '@ionic/core/dist/types/utils/helpers';
import { ChordsService } from 'src/app/services/chords.service';
import { FunctionsService } from 'src/app/services/functions.service';
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
  private randKey = {};

  public selectsDisabled = true;
  public buttonsDisabled = [
    false, true, true, true
  ];
  public questions = [
    {id: 0}, {id: 0}, {id: 0}, {id: 0}
  ];
  public responses = [
    {id: 0}, {id: 0}, {id: 0}, {id: 0}
  ];

  public isFeedbackVisible = false;
  public feedbackIcons = [
    {
      icon: '',
      color: ''
    },
    {
      icon: '',
      color: ''
    },
    {
      icon: '',
      color: ''
    },
    {
      icon: '',
      color: ''
    } 
  ];

  public showRightAns = false;

  public questStats = [];
  public rightAnsStats = [];

  public isModalVisible = false;

  constructor(
    private textsService: TextsService,
    private storageService: StorageService,
    private levelsService: LevelsService,
    private phrasesService: PhrasesService,
    private chordsService: ChordsService,
    private keysService: KeysService,
    private webAudioService: WebaudioService,
    private functionsService: FunctionsService
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

    this.questStats = this.storageService.getQuestStats();
    this.rightAnsStats = this.storageService.getRightAnsStats();
  }

  public getText(key: string) {
    return this.textsService.getText(key);
  }

  public generateProg() {
    this.isFeedbackVisible = false;
    this.showRightAns = false;
    this.selectsDisabled = false;
    this.buttonsDisabled = [true, false, false, true];
    this.responses = [
      {id: 0}, {id: 0}, {id: 0}, {id: 0}
    ];

    this.selPhrase = this.phrases[Math.floor(Math.random()*this.phrases.length)];
    this.randKey = this.keys[Math.floor(Math.random()*this.keys.length)];
    this.playPhrase();

    for(let i=0; i<this.questions.length; i++) {
      this.questStats.push(
        {
          levelId: this.selLevel.id,
          chordId: this.getQuestChords()[i].id
        }
      )
    }
    this.storageService.setQuestStats(this.questStats);
  }

  public playPhrase(this: any) {
    // On arrête toutes les sources actives
    this.webAudioService.stopAll();
    // On réinitialise l'array de sources
    this.webAudioService.sources = [];
    // On joue chaque source
    this.selPhrase.chordIds.forEach(function(this: any, chord: any, index: any) {
      this.webAudioService.play(this.webAudioService[this.randKey[this.getPhraseChords()[index].name]], 1.5*index);
    }.bind(this));
    // this.webAudioService.play(this.webAudioService[this.keys[0][this.phrasesChords[0].name]], 0);
    // this.webAudioService.play(this.webAudioService[this.keys[0][this.phrasesChords[1].name]], 1.5);
  }

  public checkAnswers() {
    this.webAudioService.stopAll();
    this.selectsDisabled = true;
    this.isFeedbackVisible = true;

    for(let i=0; i<this.responses.length; i++) {
      if(this.responses[i] === this.getQuestChords()[i]) {
        this.rightAnsStats.push(
          {
            levelId: this.selLevel.id,
            chordId: this.responses[i].id
          }
        );
        this.storageService.setRightAnsStats(this.rightAnsStats);

        this.feedbackIcons[i].icon = 'checkmark-outline';
        this.feedbackIcons[i].color = 'success';
      } else {
        this.feedbackIcons[i].icon = 'close-outline';
        this.feedbackIcons[i].color = 'danger';
      }
    }

    this.buttonsDisabled = [false, true, true, false];
  }

  public showRight() {
    this.webAudioService.stopAll();
    this.selectsDisabled = true;
    this.isFeedbackVisible = false;
    this.buttonsDisabled = [false, true, true, true];

    this.showRightAns = true;
  }

  public showModal() {
    this.isModalVisible = true;
  }

  public closeModal() {
    this.isModalVisible = false;
  }

  public resetStats() {
    this.questStats = [];
    this.rightAnsStats = [];

    this.storageService.setQuestStats(this.questStats);
    this.storageService.setRightAnsStats(this.rightAnsStats);

    this.isModalVisible = false;
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
    let respChords = [];
    let chord = {};

    this.selPhrase.respChordIds.forEach(function(id) {
      chord = this.chords.find(chord => chord.id === id);
      respChords.push(chord);
    }.bind(this));

    return respChords;

    // return this.chords.filter(chord => this.selPhrase.respChordIds.includes(chord.id));
  }

  public getPercentage(num1, num2)  {
    return this.functionsService.getPercentage(num1, num2);
  }
}
