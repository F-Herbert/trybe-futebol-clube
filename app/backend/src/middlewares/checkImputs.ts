import { NextFunction, Request, Response } from 'express';

const checkInput = (req: Request, res:Response, next:NextFunction): Response | void => {
  const { email, password } = req.body;
  if (!email) return res.status(401).json({ message: 'the field email is missing' });
  if (!password) return res.status(401).json({ message: 'the field password is missing' });
  next();
};

export default checkInput;
