import bcrypt = require('bcryptjs');
import User from '../database/models/User.model';
import createToken from '../middlewares/generateTokens';

const Login = async (email:string, password: string) => {
  const userWithoutPassword = { email };
  const user = await User.findOne({ where: { email } }) as User;

  const chekcPassword = bcrypt.compareSync(password, user.password);
  const token = createToken(userWithoutPassword);

  console.log(token);

  if (chekcPassword) return { status: 200, message: token, error: false };
  return { status: 401, message: 'email or password is incorrect', error: true };
};

export default Login;
