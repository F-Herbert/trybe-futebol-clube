import { Router } from 'express';
import mountLeaderboardHome, {
  mountLeaderboar, mountLeaderboardAway } from '../controller/Leaderboard.controller';

const leaderboardRoute = Router();

leaderboardRoute.get('/home', mountLeaderboardHome);
leaderboardRoute.get('/away', mountLeaderboardAway);
leaderboardRoute.get('/', mountLeaderboar);

export default leaderboardRoute;
