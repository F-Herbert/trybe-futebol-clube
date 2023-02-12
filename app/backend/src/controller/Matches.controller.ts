import { Request, Response } from 'express';
import findAllMatchWithoutFilter, { insertMatch } from '../service/Matches.service';

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

    if (error) return res.status(status).json(message);

    return res.status(status).json(message);
  } catch (error) {
    console.log(error);
  }
};

export default findAll;
