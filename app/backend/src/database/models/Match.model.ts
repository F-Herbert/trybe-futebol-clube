import { BOOLEAN, Model, DataTypes } from 'sequelize';
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
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  homeTeamId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  homeTeamGoals: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  awayTeamId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  awayTeamGoals: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  inProgress: BOOLEAN,
}, {
  sequelize: db,
  underscored: true,
  modelName: 'matches',
  timestamps: false,
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
