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
    ok: {
      en: 'OK',
      fr: 'OK'
    },
    cancel: {
      en: 'Cancel',
      fr: 'Annuler'
    },
    selLevel: {
      en: 'Selected level',
      fr: 'Niveau sélectionné'
    },
    settings: {
      en: 'Settings',
      fr: 'Options'
    },
    training: {
      en: 'Training',
      fr: 'Entraînement'
    },
    
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
