import { Component, OnInit } from '@angular/core';
import { DrawItem } from 'src/model/drawItem';
import { CompetitionService } from 'src/service/competition/competition.service';
import { DrawService } from 'src/service/draw/draw.service';

@Component({
  selector: 'app-draw',
  templateUrl: './draw.component.html',
  styleUrls: ['./draw.component.css']
})
export class DrawComponent implements OnInit {

  drawItem: DrawItem | undefined;

  constructor(private competitionService: CompetitionService, private drawService: DrawService) { }

  ngOnInit(): void {
    this.drawService.drawFlag.subscribe(flag => {
      if (flag)
        this.drawNumber();
    });
  }

  drawNumber() {
    let competitionId = this.competitionService.getCompetitionId();
    this.drawService.drawNumber(competitionId)
      .then(response => {
        this.drawItem = response;
      })
      .catch(reason => console.error(reason));
  }
}
