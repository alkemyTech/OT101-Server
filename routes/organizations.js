var express = require("express")
var router = express.Router()
/* GET home page. */
router.get("/:id/public", function (req, res, next) {
	let { id } = req.params.id 

	// Find organization with ID from params


	// Return a JSON with the information found

	res.json({
		name: "Organizations name",
		image: "image url",
		phone: "phone number",
		address: "address",
		welcomeText: "welcome text",
	})
})

module.exports = router
