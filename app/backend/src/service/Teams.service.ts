import { ITeamsResponse, ITeamResponse } from '../interface/ITeams';
import Team from '../database/models/Team.model';

const findAllTeams = async (): Promise<ITeamsResponse> => {
  const allTeams = await Team.findAll({ raw: true });
  if (allTeams) return { status: 200, message: allTeams, error: false };
  return { status: 404, error: true, message: 'teams not found' };
};

const findOneTeam = async (id:number): Promise<ITeamResponse> => {
  const oneTeam = await Team.findOne({ where: { id }, raw: true });
  if (!oneTeam) return { status: 404, error: true, message: 'invalid team' };
  return { status: 200, error: false, message: oneTeam };
};

export { findAllTeams, findOneTeam };
