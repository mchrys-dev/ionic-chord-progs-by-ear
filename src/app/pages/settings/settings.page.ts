import { Component, OnInit } from '@angular/core';
import { LevelsService } from 'src/app/services/levels.service';
import { StorageService } from 'src/app/services/storage.service';
import { TextsService } from 'src/app/services/texts.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  private lang: string;
  private levels = [];
  private selLevel = {};

  constructor(
    private textsService: TextsService,
    private levelsService: LevelsService,
    private storageService: StorageService
  ) { }

  ngOnInit() {
    this.lang = this.textsService.getLanguage();
    this.levels = this.levelsService.getAll();
    this.selLevel = this.levels.find(level => level.id === this.storageService.getSelLevelId());
  }

  public getText(key: string) {
    return this.textsService.getText(key);
  }

}
