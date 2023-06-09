import { Router } from 'express';
import verifyToken from '../middlewares/verifyToken';
import findAll, { createMatche, finshMatch, update } from '../controller/Matches.controller';
import checkParans from '../middlewares/checkParams';
import verifyMatches from '../middlewares/verifyMatches';

const matchesRoute = Router();

matchesRoute.get('/', checkParans, findAll);
matchesRoute.post('/', verifyToken, verifyMatches, createMatche);

matchesRoute.patch('/:id/finish', finshMatch);
matchesRoute.patch('/:id', update);

export default matchesRoute;
