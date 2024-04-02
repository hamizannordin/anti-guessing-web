import { Component } from '@angular/core';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css']
})
export class CompetitionComponent {
  competitionName = crypto.randomUUID();

  resetCompetition() {
    this.competitionName = crypto.randomUUID();
    console.log(this.competitionName);
  }
}
