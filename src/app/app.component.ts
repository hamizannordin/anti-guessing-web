import { Component } from '@angular/core';
import { BetItem } from 'src/model/betItem';
import { DrawItem } from 'src/model/drawItem';
import { WinnerItem } from 'src/model/winnerItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'anti-guessing-web';
  betList: BetItem[] = [];
  drawItem: undefined;
  winnerItem: WinnerItem = new WinnerItem();
}
