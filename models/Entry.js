'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Entry extends Model {
    static associate(models) {
      Entry.belongsTo(models.Category)
    }
  }
  Entry.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: DataTypes.STRING,
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      deletedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Entry',
      tableName: 'entries',
      paranoid: true,
    }
  );
  return Entry;
};
