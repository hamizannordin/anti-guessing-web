import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  private resetFlag = new BehaviorSubject(false);
  currentFlag = this.resetFlag.asObservable();

  private createCompetitionRequest = {
    competitionName: String()
  }

  private competitionDetailResponse = {
    competitionName: String(),
    competitionId: String(),
    complete: Boolean()
  }

  constructor(private api: ApiService) {
  }

  async createCompetition(competitionName: string): Promise<string> {
    this.createCompetitionRequest.competitionName = competitionName;
    //console.log(this.createCompetitionRequest);
    return new Promise(resolve => {
      this.api.apiPost(environment.API_URL + '/competition/detail', this.createCompetitionRequest)
        .then((response) => {
          //console.log(response);
          this.competitionDetailResponse = response;
          resolve(this.competitionDetailResponse.competitionId);
        })
        .catch((reason) => {
          console.error(reason);
        });
    });
  }

  getCompetitionId(): string {
    return this.competitionDetailResponse.competitionId;
  }

  setResetFlag(status: boolean) {
    this.resetFlag.next(status);
  }
}
