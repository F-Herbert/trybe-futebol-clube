import { Router } from 'express';
import verifyToken from '../middlewares/verifyToken';
import findAll, { createMatche } from '../controller/Matches.controller';
import checkParans from '../middlewares/checkParams';

const matchesRoute = Router();

matchesRoute.get('/', checkParans, findAll);
matchesRoute.post('/', verifyToken, createMatche);

export default matchesRoute;
