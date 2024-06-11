import { Component, OnInit } from '@angular/core';
import { BetItem } from 'src/model/betItem';
import { DrawItem } from 'src/model/drawItem';
import { WinnerItem } from 'src/model/winnerItem';
import { BetService } from 'src/service/bet/bet.service';
import { CompetitionService } from 'src/service/competition/competition.service';
import { DrawService } from 'src/service/draw/draw.service';

@Component({
  selector: 'app-winner',
  templateUrl: './winner.component.html',
  styleUrls: ['./winner.component.css', '../app.component.css']
})
export class WinnerComponent implements OnInit {
  winnerItem: WinnerItem | undefined;
  winnerFlag: boolean = false;
  resultFlag: boolean = false;
  private substringIndexStart = 4;
  private substringIndexEnd = 8;

  constructor(
    private competitionService: CompetitionService,
    private betService: BetService,
    private drawService: DrawService) { }

  ngOnInit(): void {
    this.drawService.drawCombinationResult.subscribe(result => {
      if (result != null && result.competitionId != null) {
        this.searchBetCombination(result);
        this.resultFlag = true;
      }
    });
  }

  searchBetCombination(drawItem: DrawItem) {
    let winner = drawItem.draw0 as string, firstRunner = drawItem.draw1 as string,
      secondRunner = drawItem.draw2 as string;
    let competitionId = this.competitionService.getCompetitionId();

    let winnerList = this.createListForEachCategory(competitionId, winner);
    let firstRunnerList = this.createListForEachCategory(competitionId, firstRunner);
    let secondRunnerList = this.createListForEachCategory(competitionId, secondRunner);

    this.winnerItem = new WinnerItem();

    let winFlag = false, firstFlag = false, secondFlag = false;

    // console.log('winner list', winnerList);
    // console.log('first list', firstRunnerList);
    // console.log('second list', secondRunnerList);

    winnerList.then(winner => {
      console.log(winner);
      if (this.winnerItem != null) {
        this.winnerItem.winnerAbsoluteList = winner[0];
        this.winnerItem.winnerAlmostList = winner[1];
        winFlag = winner[0].length > 0 || winner[1].length > 0;
      }
    }
    ).catch();

    firstRunnerList.then(winner => {
      console.log(winner);
      if (this.winnerItem != null) {
        this.winnerItem.firstRunnerUpAbsoluteList = winner[0];
        this.winnerItem.firstRunnerUpAlmostList = winner[1];
        firstFlag = winner[0].length > 0 || winner[1].length > 0;
      }
    }
    ).catch();

    secondRunnerList.then(winner => {
      console.log(winner);
      if (this.winnerItem != null) {
        this.winnerItem.secondRunnerUpAbsoluteList = winner[0];
        this.winnerItem.secondRunnerUpAlmostList = winner[1];
        secondFlag = winner[0].length > 0 || winner[1].length > 0;
      }
    }
    ).catch();

    // if (winnerList != null) {
    //   this.winnerItem.winnerAbsoluteList = winnerList[0];
    //   this.winnerItem.winnerAlmostList = winnerList[1];
    //   console.log('winner absolute {}', this.winnerItem.winnerAbsoluteList);
    //   console.log('winner almost {}', this.winnerItem.winnerAlmostList);
    //   winFlag = winnerList[0].length > 0 || winnerList[1].length > 0;
    // }
    // if (firstRunnerList != null) {
    //   this.winnerItem.firstRunnerUpAbsoluteList = firstRunnerList[0];
    //   this.winnerItem.firstRunnerUpAlmostList = firstRunnerList[1];
    //   console.log('first absolute {}', this.winnerItem.firstRunnerUpAbsoluteList);
    //   console.log('first almost {}', this.winnerItem.firstRunnerUpAlmostList);
    //   firstFlag = firstRunnerList[0].length > 0 || firstRunnerList[1].length > 0;
    // }
    // if (secondRunnerList != null) {
    //   this.winnerItem.secondRunnerUpAbsoluteList = secondRunnerList[0];
    //   this.winnerItem.secondRunnerUpAlmostList = secondRunnerList[1];
    //   console.log('second absolute {}', this.winnerItem.secondRunnerUpAbsoluteList);
    //   console.log('second almost {}', this.winnerItem.secondRunnerUpAlmostList);
    //   secondFlag = secondRunnerList[0].length > 0 || secondRunnerList[1].length > 0;
    // }

    // this.winnerFlag = winFlag || firstFlag || secondFlag;
    // console.log(this.winnerFlag);
  }

  private async createListForEachCategory(competitionId: string, combination: string): Promise<string[][]> {
    let parentList: string[][] = [];
    let absoluteList: string[] = [];
    let almostList: string[] = [];
    return new Promise(resolve => {
      this.betService.searchBetCombination(competitionId,
        combination.substring(this.substringIndexStart, this.substringIndexEnd))
        .then(response => {
          response.forEach(bet => {
            console.log('bet', bet.combinationInString);
            if (bet.combinationInString === combination)
              absoluteList.push(bet.combinationInString);
            else
              almostList.push(bet.combinationInString);
          });
          parentList.push(absoluteList);
          parentList.push(almostList);
          resolve(parentList);
        })
        .catch(reason => {
          console.error(reason);
        });
    });
  }
}
