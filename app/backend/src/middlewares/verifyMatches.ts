import { NextFunction, Request, Response } from 'express';
import { findOneTeam } from '../service/Teams.service';

const verifyMatches = async (req:Request, res: Response, next: NextFunction) => {
  try {
    const { homeTeamId, awayTeamId } = req.body;
    const team1 = await findOneTeam(homeTeamId);
    const team2 = await findOneTeam(awayTeamId);

    if (team1.error || team2.error) {
      return res.status(404).json({ message: 'There is no team with such id!' });
    }

    return next();
  } catch (error) {
    console.log(error);
  }
};

export default verifyMatches;
