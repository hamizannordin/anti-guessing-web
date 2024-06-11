import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { BetItem } from 'src/model/betItem';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BetService {

  constructor(private api: ApiService) { }

  async createBet(betItem: BetItem): Promise<BetItem> {
    return new Promise(resolve => {
      this.api.apiPost(environment.API_URL + '/bet/detail', betItem)
        .then(response => { resolve(response); })
        .catch(reason => { console.error(reason); })
    });
  }

  async createRandomBet(total: string): Promise<string[]> {
    return new Promise(resolve => {
      this.api.apiGet(environment.API_URL + '/bet/random/combination?total=' + total)
        .then(response => { resolve(response); })
        .catch(reason => { console.error(reason) });
    });
  }

  async searchBetCombination(competitionId: string, combination: string): Promise<BetItem[]> {
    return new Promise(resolve => {
      this.api.apiGet(environment.API_URL + '/bet/search?competition-id=' + competitionId + '&combination=' + combination)
        .then(response => resolve(response))
        .catch(reason => console.error(reason));
    });
  }
}
