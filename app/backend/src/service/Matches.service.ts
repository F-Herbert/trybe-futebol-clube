import Match from '../database/models/Match.model';
import { IBodyMatches } from '../interface/IMatches';

const findAllMatchWithFilter = async (Progress: string) => {
  const boolean = Progress === 'true';

  const findAll = await Match.findAll({
    raw: true,
    where: { inProgress: boolean },
    include: [
      { association: 'homeTeam', attributes: ['teamName'] },
      { association: 'awayTeam', attributes: ['teamName'] },
    ],
  });
  if (findAll) return { status: 200, error: false, message: findAll };
  return { status: 401, error: true, message: 'Matchs not found' };
};

const findAllMatchWithoutFilter = async (Progress: string) => {
  if (Progress === 'true' || Progress === 'false') return findAllMatchWithFilter(Progress);
  const findAll = await Match.findAll({
    raw: true,
    include: [
      { association: 'homeTeam', attributes: ['teamName'] },
      { association: 'awayTeam', attributes: ['teamName'] },
    ],
  });
  if (findAll) return { status: 200, error: false, message: findAll };
  return { status: 401, error: true, message: 'Matchs not found' };
};

export const insertMatch = async (payload: IBodyMatches) => {
  const { homeTeamId, awayTeamId, homeTeamGoals, awayTeamGoals } = payload as IBodyMatches;

  const insert = await Match.create({
    homeTeamId,
    awayTeamId,
    homeTeamGoals,
    awayTeamGoals,
    inProgress: true,
  });

  return { status: 201, error: false, message: insert.dataValues };
};
export default findAllMatchWithoutFilter;
