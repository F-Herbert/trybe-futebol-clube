import 'dotenv/config';
import * as jwt from 'jsonwebtoken';

const { MY_SECRET_PASSWORD } = process.env;
const options = {
  expiresIn: '1h',
  algorithm: 'HS256',
};

const createToken = (obj: object) => {
  const token = jwt.sign(obj, MY_SECRET_PASSWORD as string, options as object);

  return { token };
};

export default createToken;
