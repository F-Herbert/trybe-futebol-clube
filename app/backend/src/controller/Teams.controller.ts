import { Request, Response } from 'express';
import { findAllTeams, findOneTeam } from '../service/Teams.service';

const findAll = async (_req:Request, res: Response) => {
  try {
    const { status, error, message } = await findAllTeams();
    if (!error) return res.status(status).json(message);
    return res.status(status).json(message);
  } catch (error) {
    console.log(error);
  }
};

const findOne = async (req:Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status, error, message } = await findOneTeam(Number(id));
    if (error) return res.status(status).json(message);
    return res.status(status).json(message);
  } catch (error) {
    console.log(error);
  }
};

export { findAll, findOne };
