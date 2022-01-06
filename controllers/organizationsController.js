const { sequelize, Sequelize, Organization, Slide } = require("../models")

const controller = {
	index: async function (req, res, next) {
		let { id } = req.params

		try {
			// Find organization with ID from params
			const org = await Organization.findByPk(
				id,
				{
					attributes: { exclude: ['createdAt', 'updatedAt']},
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
		const files = [
			req.files['img1'] ? req.files['img1'][0].location : null,
			req.files['img2'] ? req.files['img2'][0].location : null,
			req.files['img3'] ? req.files['img3'][0].location : null,
		];
		const texts  = [img1text, img2text, img3text];

		let deleteWhereCondition = [];
		let insertSlides = [];
		let updateTexts = [];

		files.forEach((file, idx) => {
			if (file) {
				deleteWhereCondition.push({order: idx + 1});
				insertSlides.push({
					imageURL: file,
					text: texts[idx],
					order: idx + 1,
					organizationID: id
				});
			} else { // Only updating image's text
				if (texts[idx]) {
					updateTexts.push({'order': idx +1, 'text': texts[idx]})
					console.log('updating:', texts[idx])
				}
			}
		});

		if (!welcomeText && !deleteWhereCondition.length &&
			!insertSlides.length && !updateTexts) {
			return res.status(400);
		}

		const t = await sequelize.transaction();
		try {
			if (welcomeText) {
				await Organization.update(
					{ welcomeText },
					{ where: { id: id}, transaction: t }
				);
			}

			if (deleteWhereCondition.length) {
				await Slide.destroy({
					where: { [Sequelize.Op.or]: deleteWhereCondition },
					transaction: t,
				});
			}

			if (insertSlides.length) {
				await Slide.bulkCreate(insertSlides, { transaction: t });
			}

			for (const updateText of updateTexts) {
				await Slide.update(
					{text: updateText.text},
					{ 
						where: {order: updateText.order},
						transaction: t
					}
				);
			};

			await t.commit();

			return res.status(200);
		} catch (error) {
			await t.rollback();

			console.log(error);
			return res.status(500);
		}
	},
}

module.exports = controller
