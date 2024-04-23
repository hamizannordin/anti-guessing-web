import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import { DrawItem } from 'src/model/drawItem';

@Injectable({
  providedIn: 'root'
})
export class DrawService {

  private drawObservable = new BehaviorSubject(false);
  drawFlag = this.drawObservable.asObservable();

  constructor(private api: ApiService) { }

  drawNumber(competitionId: string): Promise<DrawItem> {
    return new Promise(resolve => {
      this.api.apiGet(environment.API_URL + "/draw/" + competitionId)
        .then(response => { 
          resolve(response);
        })
        .catch(reason => console.error(reason));
    });
  }

  setDrawFlag(status: boolean) {
    this.drawObservable.next(status);
  }
}
