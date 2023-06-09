// "use strict";

// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     await queryInterface.createTable("matches", {
//       id: {
//         type: Sequelize.INTEGER,
//         primaryKey: true,
//         allowNull: false,
//         autoIncrement: true,
//         field: 'id'
//       },
//       homeTeamId: {
//         type: Sequelize.INTEGER,
//         allowNull:false,
//         field: 'home_team_id',
//         references: {
//           model: 'teams',
//           key: 'id',
//         },
//         onUpdate: 'CASCADE',
//         onDelete: 'CASCADE',
//       },
//       homeTeamGoals: {
//         type: Sequelize.INTEGER,
//         allowNull:false,
//         field: 'home_team_goals',
//       },
//       awayTeamId: {
//         type: Sequelize.INTEGER,
//         allowNull:false,
//         field:'away_team_id',
//         references: {
//           model: 'teams',
//           key: 'id',
//         },
//         onUpdate: 'CASCADE',
//         onDelete: 'CASCADE',
//       },
//       awayTeamGoals: {
//         type: Sequelize.INTEGER,
//         allowNull:false,
//         field:'away_team_goals'
//       },
//       inProgress:{
//         type: Sequelize.BOOLEAN,
//         allowNull:false,
//         field:'in_progress'
//       },
//     });
//   },

//   down: async (queryInterface, Sequelize) => {
//     await queryInterface.dropTable("matches");
//   },
// };

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('matches', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      home_team_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      home_team_goals: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      away_team_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      away_team_goals: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      in_progress: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('matches');
  }
};