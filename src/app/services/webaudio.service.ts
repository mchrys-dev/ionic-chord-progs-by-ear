import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebaudioService {

  C: any = null;
  Cm: any = null;
  Dm: any = null;
  Em: any = null;
  F: any = null;
  Fm: any = null;
  G: any = null;
  Am: any = null;
  Ab: any = null;

  sounds: any[] = [
    'Cb', 'C', 'Cm', 'Csus4', 'C7', 'Csharpm', 'Csharp7', 'Db', 'Dbm', 'D', 'Dm', 'Dsus4', 'Dsharpm', 'Dsharp7', 'D7',
    'Eb', 'Ebm', 'Ebsus4', 'Eb7', 'E', 'Em', 'Esus4', 'E7', 'Fb', 'F', 'Fm', 'Fsus4', 'F7', 'Fsharp', 'Fsharpm', 'Fsharpsus4', 'Fsharp7',
    'Gb', 'G', 'Gm', 'Gsus4', 'G7', 'Gsharpm', 'Gsharp7', 'Ab', 'Abm', 'A', 'Am', 'Asus4', 'A7', 
    'Bb', 'Bbm', 'Bbsus4', 'Bb7', 'B', 'Bm', 'Bsus4', 'B7'
  ];
  buffer: any = null;
  audioCtx = new AudioContext();

  sources: any[] = [];

  constructor() { 
    this.sounds.forEach(function(this: any, soundName: any) {
      this.loadSound(this.audioCtx, this.buffer, soundName);
    }.bind(this));
  }

  loadSound(this: any, audioCtx: any, buffer: any, bufferName: any) {
    const request = new XMLHttpRequest();
    request.open("GET", "assets/sounds/" + bufferName + ".mp3");
    request.responseType = "arraybuffer";
    request.onload = function(this: any) {
      let undecodedAudio = request.response;
      audioCtx.decodeAudioData(undecodedAudio, (data: any) => {
        buffer = data;
        this.setSoundReady(buffer, bufferName);
      });
    }.bind(this);
    request.send();
  }

  setSoundReady(this: any, buffer: any, bufferName: any) {
    this[bufferName] = buffer;
  }

  play(buffer: any, time: any) {
    const source = this.audioCtx.createBufferSource();
    source.buffer = buffer;

    this.sources.push(source);

    source.connect(this.audioCtx.destination);
    source.start(this.audioCtx.currentTime + time);
  };

  stopAll() {
    this.sources.forEach(function(source) {
      source.stop();
    });
  }
}
