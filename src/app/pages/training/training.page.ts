import { Component, OnInit } from '@angular/core';
import { TextsService } from 'src/app/services/texts.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.page.html',
  styleUrls: ['./training.page.scss'],
})
export class TrainingPage implements OnInit {

  constructor(private textsService: TextsService) { }

  ngOnInit() {
  }

  public getText(key: string) {
    return this.textsService.getText(key);
  }

}
