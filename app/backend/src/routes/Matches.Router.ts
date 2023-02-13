import { Router } from 'express';
import verifyToken from '../middlewares/verifyToken';
import findAll, { createMatche, update } from '../controller/Matches.controller';
import checkParans from '../middlewares/checkParams';

const matchesRoute = Router();

matchesRoute.get('/', checkParans, findAll);
matchesRoute.post('/', verifyToken, createMatche);

matchesRoute.patch('/:id/finish', update);

export default matchesRoute;
