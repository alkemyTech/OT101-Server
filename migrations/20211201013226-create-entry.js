'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('entries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      categoryId: {
        type: DateTypes.INTEGER,
        allowNull: false,
      },
      deletedAt: DataTypes.DATE,
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('entries');
  },
};
