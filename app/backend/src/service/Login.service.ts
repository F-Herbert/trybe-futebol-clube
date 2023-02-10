import bcrypt = require('bcryptjs');
import User from '../database/models/User.model';
import createToken from '../middlewares/generateTokens';

const Login = async (email:string, password: string) => {
  const userWithoutPassword = { email };
  const user = await User.findOne({ where: { email } }) as User;

  if (user) {
    const chekcPassword = bcrypt.compareSync(password, user.password);

    if (chekcPassword) {
      const token = createToken(userWithoutPassword);
      return { status: 200, message: token, error: false };
    }
  }

  return { status: 401, message: 'Incorrect email or password', error: true };
};

export default Login;
