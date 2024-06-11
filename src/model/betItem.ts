export class BetItem {

    competitionId: any;
    combination: string[];
    combinationInString: any;

    constructor(competitionId: string, combination: string[]) { 
        this.competitionId = competitionId;
        this.combination = combination;
    };
}