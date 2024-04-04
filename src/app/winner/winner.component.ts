import { Component } from '@angular/core';
import { WinnerItem } from 'src/model/winnerItem';

@Component({
  selector: 'app-winner',
  templateUrl: './winner.component.html',
  styleUrls: ['./winner.component.css', '../app.component.css']
})
export class WinnerComponent {
  winnerItem: WinnerItem | undefined;

  // winnerAbsoluteList = this.winnerItem.winnerAbsoluteList = ['123','123'];
  // winnerAlmostList = this.winnerItem.winnerAlmostList = ['234'];
  // firstRunnerUpAbsoluteList = this.winnerItem.firstRunnerUpAbsoluteList = ['123','123'];
  // firstRunnerUpAlmostList = this.winnerItem.firstRunnerUpAlmostList = ['234'];
  // secondRunnerUpAbsoluteList = this.winnerItem.secondRunnerUpAbsoluteList = ['123','123'];
  // secondRunnerUpAlmostList = this.winnerItem.secondRunnerUpAlmostList = ['234'];
}
