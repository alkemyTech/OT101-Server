"use strict"
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("Organizations", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			name: {
				type: Sequelize.STRING,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			image: { type: Sequelize.STRING },
			phone: { type: Sequelize.STRING },
			address: { type: Sequelize.STRING },
			welcomeText: { type: Sequelize.STRING },
			facebook: { type: Sequelize.STRING },
			instagram: { type: Sequelize.STRING },
			linkedin: { type: Sequelize.STRING },
		})
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("Organizations")
	},
}
