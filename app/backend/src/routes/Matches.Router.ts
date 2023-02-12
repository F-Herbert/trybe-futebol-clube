import { Router } from 'express';
import findAll from '../controller/Matches.controller';
import checkParans from '../middlewares/checkParams';

const matchesRoute = Router();

matchesRoute.get('/', checkParans, findAll);
export default matchesRoute;
