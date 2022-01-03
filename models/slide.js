'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Slide extends Model {
    static associate(models) {
      Slide.belongsTo(models.Organization, {
        as: 'organization'
      });
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
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: { notEmpty: true },
    }
  }, {
    sequelize,
    modelName: 'Slide',
  });
  return Slide;
};