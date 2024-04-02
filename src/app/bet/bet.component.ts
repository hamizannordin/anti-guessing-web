import { Component } from '@angular/core';
import { BetItem } from 'src/model/betItem';

@Component({
  selector: 'app-bet',
  templateUrl: './bet.component.html',
  styleUrls: ['./bet.component.css', '../app.component.css']
})
export class BetComponent {
  betList: BetItem[] = [];
}
