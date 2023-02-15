// import Match from '../database/models/Match.model';

export interface IBodyMatches {
  homeTeamId: number;
  awayTeamId: number;
  homeTeamGoals: number;
  awayTeamGoals: number;
}

export default interface IMatchesResponse {
  id: number;
  homeTeamId:number ;
  homeTeamGoals: number;
  awayTeamId: number;
  awayTeamGoals:number;
  inProgress: boolean;
  homeTeam: {
    teamName: string;
  },
  awayTeam: {
    teamName:string
  }
}
