import { Request, Response } from 'express';
import Login from '../service/Login.service';

const findeUser = async (req:Request, res:Response) => {
  try {
    const { email, password } = req.body;
    const { message, status, error } = await Login(email, password);
    if (error) return res.status(status).json(message);
    res.status(status).json(message);
  } catch (error) {
    console.log(error);
  }
};

export default { findeUser };
