import { ITeamResponse } from '../interface/ITeams';
import Team from '../database/models/Team.model';

const findAllTeams = async (): Promise<ITeamResponse> => {
  const allTeams = await Team.findAll({ raw: true });
  if (allTeams) return { status: 200, message: allTeams, error: false };
  return { status: 404, error: true, message: 'teams not found' };
};

export default findAllTeams;
