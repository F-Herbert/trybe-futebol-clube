import { Router } from 'express';
import { findAll, findOne } from '../controller/Teams.controller';

const teamsRoute = Router();

teamsRoute.get('/', findAll);
teamsRoute.get('/:id', findOne);

export default teamsRoute;
