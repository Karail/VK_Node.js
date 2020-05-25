'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('vk_users_groups', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      group_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('VKusersGroups');
  }
};