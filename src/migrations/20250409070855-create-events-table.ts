'use strict';

import { DataTypes } from 'sequelize';

module.exports = {
  up: async (queryInterface: any) => {
    await queryInterface.createTable('events', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      event: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      timestamp: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    });
  },

  down: async (queryInterface: any) => {
    await queryInterface.dropTable('events');
  },
};
