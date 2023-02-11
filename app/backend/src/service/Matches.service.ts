import Matche from '../database/models/Match.model';

const findAllMatch = async () => {
  const findAll = Matche.findAll({ raw: true });
  if (!findAll) return { status: 200, error: false, message: findAll };
  return { status: 401, error: true, message: 'matches not found' };
};

export default findAllMatch;
