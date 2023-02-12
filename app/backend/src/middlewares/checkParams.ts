import { Request, Response, NextFunction } from 'express';

const checkParans = async (req:Request, res:Response, next:NextFunction):
Promise<void | Response> => {
  const { inProgress } = req.query;
  if (inProgress === 'true' || inProgress === 'false' || inProgress === undefined) {
    return next();
  }
  return res.status(401).json('parameter must be true or false');
};

export default checkParans;
