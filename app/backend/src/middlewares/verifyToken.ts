import * as jwt from 'jsonwebtoken';
import 'dotenv/config';
import { JwtPayload } from 'jsonwebtoken';

const secret = process.env.JWT_SECRET as string;

const verifyToken = (token:string): JwtPayload => {
  const checkToken = jwt.verify(token, secret);
  console.log(checkToken);

  return checkToken as JwtPayload;
};

export default verifyToken;
