import { Request, Response } from 'express';
import findAllMatchWithoutFilter from '../service/Matches.service';

const findAll = async (req: Request, res:Response) => {
  try {
    const { inProgress } = req.query as any;
    const { error, message, status } = await findAllMatchWithoutFilter(inProgress);
    if (!error) return res.status(status).json(message);
    return res.status(status).json(message);
  } catch (error) {
    console.log(error);
  }
};

export default findAll;
