import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextsService {

  private lang: string;

  private texts = {
    appTitle: {
      en: 'Chord progs by ear',
      fr: 'Progressions d\'accords à l\'oreille'
    },
    cancel: {
      en: 'Cancel',
      fr: 'Annuler'
    },
    checkAns: {
      en: 'Check answers',
      fr: 'Corriger'
    },
    listenAgain: {
      en: 'Listen again',
      fr: 'Réécouter'
    },
    newProg: {
      en: 'New chord progression',
      fr: 'Nouvelle progression d\'accords'
    },
    no: {
      en: 'No',
      fr: 'Non'
    },
    ok: {
      en: 'OK',
      fr: 'OK'
    },
    resetScore: {
      en: 'Reset the score',
      fr: 'Réinitialiser le score'
    },
    resetScoreQuest: {
      en: 'Are you shure that you want to reset the score?',
      fr: 'Êtes-vous sûr(e) de vouloir réinitialiser le score?'
    },
    selLevel: {
      en: 'Selected level',
      fr: 'Niveau sélectionné'
    },
    settings: {
      en: 'Settings',
      fr: 'Options'
    },
    showRight: {
      en: 'Display right answers',
      fr: 'Afficher les bonnes réponses'
    },
    training: {
      en: 'Training',
      fr: 'Entraînement'
    },
    yes: {
      en: 'Yes',
      fr: 'Oui'
    }
  };

  constructor() { 
    this.getLanguage();
  }

  public getLanguage() {
    navigator.language.split('-')[0] === 'fr' ? this.lang = 'fr' : this.lang = 'en';

    return this.lang;
  }

  public getText(key: string) {
    return this.texts[key][this.lang];
  }
}
