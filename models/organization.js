"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
	class Organization extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Organization.hasMany(
				models.Slide,
				{ foreignKey: 'organizationID' }
			);
		}
	}
	Organization.init(
		{
			name: DataTypes.STRING,
			image: DataTypes.STRING,
			phone: DataTypes.STRING,
			address: DataTypes.STRING,
			welcomeText: DataTypes.STRING,
			facebook: DataTypes.STRING,
			instagram: DataTypes.STRING,
			linkedin: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "Organization",
		}
	)
	return Organization
}
