import { Component, OnInit } from '@angular/core';
import { BetItem } from 'src/model/betItem';
import { BetService } from 'src/service/bet/bet.service';
import { CompetitionService } from 'src/service/competition/competition.service';

@Component({
  selector: 'app-bet',
  templateUrl: './bet.component.html',
  styleUrls: ['./bet.component.css', '../app.component.css', '../../styles.css']
})
export class BetComponent implements OnInit {
  betList: string[] = [];
  inputBox: string = '';
  totalBox: string = '';

  constructor(private betService: BetService, private competitionService: CompetitionService) { }
  ngOnInit(): void {
    this.competitionService.currentFlag.subscribe(flag => {
      if(flag)
        this.clearBet();
    });
  }

  clearBet() {
    this.betList = [];
  }

  createBet() {
    let competitionId = this.competitionService.getCompetitionId();
    let combinationInput = this.inputBox;
    let betItem = new BetItem(competitionId, [combinationInput]);
    //console.log(betItem);
    this.betService.createBet(betItem)
      .then(response => {
        //console.log(response);
        this.betList.push(combinationInput);
      }).catch(reason => { console.error(reason); });
    this.inputBox = '';
  }

  createRandomBet() {
    let competitionId = this.competitionService.getCompetitionId();
    this.betService.createRandomBet(this.totalBox)
      .then(response => {
        //console.log(response);
        response.forEach(combination => {
          this.betList.push(combination);
        });
        let betItem = new BetItem(competitionId, response);
        this.betService.createBet(betItem)
          .then().catch(reason => { console.error(reason); });
      })
      .catch(reason => { console.error(reason); });
  this.totalBox = '';
  }
}
