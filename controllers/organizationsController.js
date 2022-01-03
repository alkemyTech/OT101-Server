const { sequelize, Sequelize, Organization, Slide } = require("../models")

const controller = {
	index: async function (req, res, next) {
		let { id } = req.params

		try {
			// Find organization with ID from params
			const org = await Organization.findByPk(
				id,
				{
					attributes: { exclude: ['id', 'createdAt', 'updatedAt']},
					include: {
						model: Slide,
						attributes: ['imageURL', 'text', 'order']
					}
				}
			);

			if (!org) {
				return res.send(404);
			}
			// Return a JSON with the information found
			res.json(org);
		} catch (error) {
			console.log(error);
			res.status(500);
		};
	},
	update: async (req, res) => {
		const { id } = req.params;
		const { welcomeText, img1text, img2text, img3text } = req.body;

		const img1 = req.files.img1[0].location;
		const img2 = req.files.img2[0].location;
		const img3 = req.files.img3[0].location;

		if (!welcomeText.length || !img1 || !img2 || !img3) {
			return res.status(400);
		}

		const t = await sequelize.transaction();
		try {
			await Organization.update(
				{ id, welcomeText },
				{ where: { id: id}, transaction: t }
			);

			await Slide.destroy({
				where: { [Sequelize.Op.or]: [{order: 1}, {order: 2}, {order: 3}] },
				transaction: t,
			});

			await Slide.bulkCreate(
				[
					{ imageUR1: img1, text: img1text, order: 1, organizationID: id },
					{ imageURL: img2, text: img2text, order: 2, organizationID: id },
					{ imageURL: img3, text: img3text, order: 3, organizationID: id }
				],
				{ transaction: t }
			);

			await t.commit();

			return res.json({});
		} catch (error) {
			await t.rollback();

			console.log(error);
			return res.status(500);
		}
	},
}

module.exports = controller
