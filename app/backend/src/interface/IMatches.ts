export default interface IMatchesErros {
  message: object | string;
  error: boolean;
  status: number
}

export interface IBodyMatches {
  homeTeamId: number;
  awayTeamId: number;
  homeTeamGoals: number;
  awayTeamGoals: number;
}
