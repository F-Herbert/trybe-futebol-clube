import { NextFunction, Request, Response } from 'express';

const checkInput = (req: Request, res:Response, next:NextFunction): Response | void => {
  const { email, password } = req.body;
  if (!email) return res.status(400).json({ message: 'All fields must be filled' });
  if (!password) return res.status(400).json({ message: 'All fields must be filled' });
  next();
};

export default checkInput;
