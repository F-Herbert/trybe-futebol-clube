import Matche from '../database/models/Match.model';

const findAllMatchWithFilter = async (Progress: string) => {
  const boolean = Progress === 'true';
  const findAll = await Matche.findAll({
    raw: true,
    where: { inProgress: boolean },
    include: [
      { association: 'homeTeam', attributes: ['teamName'] },
      { association: 'awayTeam', attributes: ['teamName'] },
    ],
  });
  if (findAll) return { status: 200, error: false, message: findAll };
  return { status: 401, error: true, message: 'matches not found' };
};

const findAllMatchWithoutFilter = async (Progress: string) => {
  if (Progress) return findAllMatchWithFilter(Progress);
  const findAll = await Matche.findAll({
    raw: true,
    include: [
      { association: 'homeTeam', attributes: ['teamName'] },
      { association: 'awayTeam', attributes: ['teamName'] },
    ],
  });
  if (findAll) return { status: 200, error: false, message: findAll };
  return { status: 401, error: true, message: 'matches not found' };
};
export default findAllMatchWithoutFilter;
