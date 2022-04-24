import { Component, OnInit } from '@angular/core';
import { TextsService } from 'src/app/services/texts.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private textsService: TextsService) { }

  ngOnInit() {
  }

  public getText(key: string) {
    return this.textsService.getText(key);
  }

}
