import Team from '../database/models/Team.model';
import Match from '../database/models/Match.model';
import { IBodyMatches } from '../interface/IMatches';

const findAllMatchWithFilter = async (Progress: string) => {
  const boolean = Progress === 'true';

  const findAll = await Match.findAll({
    where: { inProgress: boolean },
    include: [
      { model: Team, as: 'homeTeam', attributes: { exclude: ['id'] } },
      { model: Team, as: 'awayTeam', attributes: { exclude: ['id'] } },
    ],
  });

  if (findAll) return { status: 200, error: false, message: findAll };
  return { status: 401, error: true, message: 'Matchs not found' };
};

const findAllMatchWithoutFilter = async (Progress: string) => {
  if (Progress === 'true' || Progress === 'false') return findAllMatchWithFilter(Progress);
  const findAll = await Match.findAll({ include: [
    { model: Team, as: 'homeTeam', attributes: { exclude: ['id'] } },
    { model: Team, as: 'awayTeam', attributes: { exclude: ['id'] } },
  ] });
  if (findAll) return { status: 200, error: false, message: findAll };
  return { status: 401, error: true, message: 'Matchs not found' };
};

export const insertMatch = async (payload: IBodyMatches) => {
  const { homeTeamId, awayTeamId, homeTeamGoals, awayTeamGoals } = payload as IBodyMatches;
  if (homeTeamId === awayTeamId) {
    return { status: 422,
      error: true,
      message: 'It is not possible to create a match with two equal teams' };
  }

  const insert = await Match.create({
    homeTeamId,
    awayTeamId,
    homeTeamGoals,
    awayTeamGoals,
    inProgress: true,
  });

  return { status: 201, error: false, message: insert.dataValues };
};

export const updateMatche = async (id: number) => {
  const update = await Match.update({ inProgress: 0 }, { where: { id } });
  if (!update) return { error: true, message: 'not found', status: 401 };
  return { message: 'Finished', error: false, status: 200 };
};

export default findAllMatchWithoutFilter;
