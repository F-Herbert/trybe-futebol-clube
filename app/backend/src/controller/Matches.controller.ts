import { Request, Response } from 'express';
import findAllMatchWithoutFilter,
{ insertMatch, finishMatche, updateMatche } from '../service/Matches.service';

const findAll = async (req: Request, res:Response) => {
  try {
    const inProgress: string = req.query.inProgress as string;
    const { error, message, status } = await findAllMatchWithoutFilter(inProgress);
    if (!error) return res.status(status).json(message);
    return res.status(status).json(message);
  } catch (error) {
    console.log(error);
  }
};

export const createMatche = async (req: Request, res: Response) => {
  try {
    const payload = req.body;

    const { message, error, status } = await insertMatch(payload);

    if (error) return res.status(status).json({ message });

    return res.status(status).json(message);
  } catch (error) {
    console.log(error);
  }
};

export const finshMatch = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { error, status, message } = await finishMatche(Number(id));

    if (error) return res.status(status).json(message);

    return res.status(status).json({ message });
  } catch (error) {
    console.log(error);
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const { homeTeamGoals, awayTeamGoals } = req.body;
    const { id } = req.params;
    const { error, status, message } = await updateMatche(Number(id), homeTeamGoals, awayTeamGoals);
    if (error) return res.status(500).json('internal error');
    return res.status(status).json(message);
  } catch (error) {
    console.log(error);
  }
};

export default findAll;
