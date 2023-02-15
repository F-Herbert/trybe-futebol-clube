import { Request, Response } from 'express';
import leaderboardService from '../service/Leaderboards.Teams.service';

const mountLeaderboardHome = async (req: Request, res: Response): Promise<Response> => {
  const result = await leaderboardService.mountLeaderboard('"home"');

  return res.status(200).json(result.message);
};

export const mountLeaderboardAway = async (req: Request, res: Response): Promise<Response> => {
  const result = await leaderboardService.mountLeaderboard('"away"');

  return res.status(200).json(result.message);
};

export const mountLeaderboar = async (req: Request, res: Response): Promise<Response> => {
  const result = await leaderboardService.mountLeaderboard('"home", "away"');

  return res.status(200).json(result.message);
};

export default mountLeaderboardHome;
