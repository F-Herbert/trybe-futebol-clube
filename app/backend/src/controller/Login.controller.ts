import { Request, Response } from 'express';
import { IErros } from '../interface/IUser';
import { tokenWithoutPassword } from '../middlewares/verifyToken';
import Login from '../service/Login.service';

declare module 'jsonwebtoken' {
  interface JwtPayload {
    role: string;
  }
}

const findeUser = async (req:Request, res:Response) => {
  try {
    const { email, password } = req.body;
    const { message, status, error, token } = await Login(email, password) as IErros;
    if (error) return res.status(status).json({ message });
    return res.status(status).json({ token });
  } catch (error) {
    console.log(error);
  }
};

const valideUser = async (req:Request, res: Response) => {
  try {
    const { authorization } = req.headers;
    const { role } = tokenWithoutPassword(authorization as string);
    if (role) return res.status(200).json({ role });
    return res.status(400).json({ message: 'token is not valid or token expires' });
  } catch (error) {
    console.error(error);
  }
};

export { findeUser, valideUser };
