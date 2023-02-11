import bcrypt = require('bcryptjs');
import IUserWithoutPassword, { IErros } from '../interface/IUser';
import User from '../database/models/User.model';
import createToken from '../middlewares/generateTokens';

const Login = async (email:string, password: string):Promise<IUserWithoutPassword | IErros> => {
  const user = await User.findOne({ where: { email }, raw: true });

  if (user) {
    const chekcPassword = bcrypt.compareSync(password, user.password);

    if (chekcPassword) {
      const { password: _, ...userWithoutPass } = user;
      const token = createToken(userWithoutPass);
      return { status: 200, token, error: false };
    }
  }

  return { status: 401, message: 'Incorrect email or password', error: true };
};

export default Login;
