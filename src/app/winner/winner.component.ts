import { Component } from '@angular/core';
import { WinnerItem } from 'src/model/winnerItem';

@Component({
  selector: 'app-winner',
  templateUrl: './winner.component.html',
  styleUrls: ['./winner.component.css', '../app.component.css']
})
export class WinnerComponent {
  winnerItem: WinnerItem = new WinnerItem();
}
