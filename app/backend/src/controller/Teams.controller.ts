import { Request, Response } from 'express';
import findAllTeams from '../service/Teams.service';

const findAll = async (_req:Request, res: Response) => {
  try {
    const { status, error, message } = await findAllTeams();
    if (!error) return res.status(status).json(message);
    return res.status(status).json(message);
  } catch (error) {
    console.log(error);
  }
};

export default findAll;
