import { Component, OnInit } from '@angular/core';
import { CompetitionService } from '../../service/competition/competition.service';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css', '../../styles.css']
})
export class CompetitionComponent implements OnInit {
  competitionName: string = crypto.randomUUID();
  competitionId: string | undefined;
  competitionService: CompetitionService;

  constructor(competitionService: CompetitionService) {
    this.competitionService = competitionService;
    this.createNewCompetition();

  }
  ngOnInit(): void {
    this.competitionService.currentFlag.subscribe();
  }

  resetCompetition() {
    this.competitionName = crypto.randomUUID();
    this.createNewCompetition();
    this.competitionService.setResetFlag(true);
  }

  async createNewCompetition() {
    try {
      await this.competitionService.createCompetition(this.competitionName)
        .then((response) => {
          //console.log(response);
          this.competitionId = response;
        })
        .catch((reason) => {
          console.error(reason);
        });
      console.log('competition id: ', this.competitionId);
    }
    catch (error) {
      console.error(error);
    }
  }
}