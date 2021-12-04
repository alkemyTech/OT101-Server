'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Category.hasMany(models.Entry, {foreignKey: 'categoryId', foreignKeyConstraint: true}); 
    }
  };
  Category.init({
    name:{ 
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: { notEmpty: true }
    },
    description: DataTypes.STRING,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};