const { Organization } = require("../models")

const controller = {
	index: async function (req, res, next) {
		let { id } = req.params
		// Find organization with ID from params
		const org = await Organization.findByPk(id)

		// Return a JSON with the information found

		res.json({
			name: org.name,
			image: org.image,
			phone: org.phone,
			address: org.address,
			welcomeText: org.welcomeText,
			facebook: org.facebook,
			instagram: org.instagram,
			linkedin: org.linkedin,
		})
	},
}

module.exports = controller
