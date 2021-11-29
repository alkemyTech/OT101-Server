'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Slide extends Model {
    static associate(models) {
      // define association here
    }
  };
  Slide.init({

    imageURL: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: { notEmpty: true, isUrl: true },
      unique: true
    },

    text: DataTypes.TEXT,

    order: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: { notEmpty: true, min: 0, isInt: true },
      unique: true
    },

    organizationID: {
      type: DataTypes.UUID,
      allowNull: false,
      validate: { notEmpty: true, isUUID: true },
      unique: true,
    }
  }, {
    sequelize,
    modelName: 'Slide',
  });
  return Slide;
};