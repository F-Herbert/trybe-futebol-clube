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
    const result: any = verifyToken(authorization as string);
    if (result) res.status(200).json({ role: result.role });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: 'deu ruim' });
  }
};

export { findeUser, valideUser };
