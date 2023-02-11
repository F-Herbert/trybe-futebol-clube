import { Router } from 'express';
import findAll from '../controller/Teams.controller';

const teamsRoute = Router();

teamsRoute.get('/', findAll);

export default teamsRoute;
