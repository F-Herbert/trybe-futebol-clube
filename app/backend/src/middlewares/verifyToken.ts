import * as jwt from 'jsonwebtoken';
import 'dotenv/config';
import { Request, Response, NextFunction } from 'express';
import { JwtPayload } from 'jsonwebtoken';

const secret = process.env.JWT_SECRET as string;

export const tokenWithoutPassword = (token:string): JwtPayload => {
  const checkToken = jwt.verify(token, secret);

  return checkToken as JwtPayload;
};

const verifyToken = (req:Request, res:Response, next:NextFunction) => {
  try {
    const { authorization } = req.headers;
    const checkToken = jwt.verify(authorization as string, secret);
    console.log(checkToken);

    return next();
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: 'token is not valid or token expires' });
  }
};

export default verifyToken;
