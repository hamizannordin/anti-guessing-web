export class BetItem {

    competitionId: any;
    combination: String[];
    combinationInString: String | undefined;

    constructor(competitionId: String, combination: String[]) { 
        this.competitionId = competitionId;
        this.combination = combination;
    };
}