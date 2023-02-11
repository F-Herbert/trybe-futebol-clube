import { Router } from 'express';
import checkInput from '../middlewares/checkImputs';
import { valideUser, findeUser } from '../controller/Login.controller';

const userRouter = Router();

userRouter.post('/login', checkInput, findeUser);

userRouter.get('/login/validate', valideUser);

export default userRouter;
