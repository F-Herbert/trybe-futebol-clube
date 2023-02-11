import 'dotenv/config';
import * as jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET as string;
const options = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const createToken = (obj: object): string => {
  const token = jwt.sign(obj, secret, options as jwt.SignOptions);
  return token;
};

export default createToken;
