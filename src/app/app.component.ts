import { Component } from '@angular/core';
import { BetComponent } from './bet/bet.component';
import { CompetitionComponent } from './competition/competition.component';
import { DrawComponent } from './draw/draw.component';
import { WinnerComponent } from './winner/winner.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // providers: [BetComponent, CompetitionComponent, DrawComponent, WinnerComponent]
})
export class AppComponent {
  title = 'anti-guessing-web';
  bet: any;
  competition: String | undefined;
  draw: any;
  winner: any;

  // constructor(
  //   bet: BetComponent,
  //   competition: CompetitionComponent,
  //   draw: DrawComponent,
  //   winner: WinnerComponent) {
  //   this.bet = bet.betList;
  //   this.competition = competition.competitionName;
  //   this.draw = draw.drawItem;
  //   this.winner = winner.winnerItem;
  // }
}
