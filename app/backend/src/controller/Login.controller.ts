import { Request, Response } from 'express';
import verifyToken from '../middlewares/verifyToken';
import Login from '../service/Login.service';

declare module 'jsonwebtoken' {
  interface JwtPayload {
    role: string;
  }
}

const findeUser = async (req:Request, res:Response) => {
  try {
    const { email, password } = req.body;
    const { message, status, error, token } = await Login(email, password);
    if (error) return res.status(status).json({ message });
    return res.status(status).json({ token });
  } catch (error) {
    console.log(error);
  }
};

const valideUser = async (req:Request, res: Response) => {
  try {
    const { authorization } = req.headers;
    const { role } = verifyToken(authorization as string);
    if (role) res.status(200).json({ role });
    return res.status(400).json({ message: 'token is not valid or token expires' });
  } catch (error) {
    console.error(error);
    throw new Error(`${error}`);
  }
};

export { findeUser, valideUser };
