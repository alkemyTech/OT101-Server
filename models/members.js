'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Members extends Model {
    
    static associate(models) {
        Members.belongsTo(models.Role, {as: 'role'});
    }
  };
  Members.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Members',
  });
  return Members;
};