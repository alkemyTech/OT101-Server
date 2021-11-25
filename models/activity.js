'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Activity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Activity.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: DataTypes.STRING,
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Activity',
    tableName: 'activities',
    paranoid: true
  });
  return Activity;
};