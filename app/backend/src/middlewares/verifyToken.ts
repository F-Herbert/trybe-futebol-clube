import * as jwt from 'jsonwebtoken';
import 'dotenv/config';

const secret = process.env.JWT_SECRET as string;

const verifyToken = (token:string) => {
  const checkToken = jwt.verify(token, secret);
  console.log(checkToken);

  return checkToken;
};

export default verifyToken;
