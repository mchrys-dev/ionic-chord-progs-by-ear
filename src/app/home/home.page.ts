import { Component } from '@angular/core';
import { TextsService } from '../services/texts.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private textsService: TextsService) {
     
  }

  public getText(key: string) {
    return this.textsService.getText(key);
  }

}
