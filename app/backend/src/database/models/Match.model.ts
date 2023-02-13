import { BOOLEAN, Model, INTEGER } from 'sequelize';
import db from '.';
import Team from './Team.model';

export default class Match extends Model {
  declare id:number;
  declare homeTeamId: number;
  declare homeTeamGoals: number;
  declare awayTeamGoals: number;
  declare awayTeamId: number;
  declare inProgress: boolean;
}

Match.init({
  id: {
    type: INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  homeTeamId: {
    type: INTEGER,
    allowNull: false,
  },
  homeTeamGoals: {
    type: INTEGER,
    allowNull: false,
  },
  awayTeamId: {
    type: INTEGER,
    allowNull: false,
  },
  awayTeamGoals: {
    type: INTEGER,
    allowNull: false,
  },
  inProgress: {
    type: BOOLEAN,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'matches',
  timestamps: false,
  underscored: true,
});

Team.hasMany(Match, {
  foreignKey: 'homeTeamId',
  as: 'homeTeam',
});
Team.hasMany(Match, {
  foreignKey: 'awayTeamId',
  as: 'awayTeam',
});

Match.belongsTo(Team, {
  foreignKey: 'homeTeamId',
  as: 'homeTeam',
});
Match.belongsTo(Team, {
  foreignKey: 'awayTeamId',
  as: 'awayTeam',
});
