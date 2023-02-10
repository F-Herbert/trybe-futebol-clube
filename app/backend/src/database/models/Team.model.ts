import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';
import Match from './Match.model';

export default class Team extends Model {
  declare id:number;
  declare teamName: string;
}

Team.init({
  id: {
    type: INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  teamName: {
    type: STRING,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'teams',
  timestamps: false,
});

Team.hasMany(Match);
Match.belongsTo(Team);
