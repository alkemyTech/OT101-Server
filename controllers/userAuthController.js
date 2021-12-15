const { User, Role } = require("../models/index")
const bcrypt = require("bcrypt")
const { validationResult } = require("express-validator")
const authConfig = require("../config/authConfig")
const jwt = require("jsonwebtoken")

//bcrypt.js
const saltRounds = 10

module.exports = {
	register: async (req, res) => {
		// Finds the validation errors in this request and wraps them in an object with handy functions
		const errors = validationResult(req)

		//Encript password
		const password = req.body.password
		const hashPassword = await bcrypt.hash(password, saltRounds)

		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() })
		}
		const user = await User.create({
			email: req.body.username,
			password: hashPassword,
			firstName: req.body.firstName,
			lastName: req.body.lastName,
		})

		let token = jwt.sign({ ...user }, authConfig.secret, {
			expiresIn: authConfig.expirationTime,
		})

		res.status(200).send({ ...user, token })
	},

	findOne: async (req, res) => {
		const user = await User.findOne({ where: { email: req.body.username } })
		if (user === null) {
			res.json({ ok: false })
		} else {
			bcrypt.compare(req.body.password, user.password, function (err, result) {
				if (result == true) {
					let token = jwt.sign({ ...user }, authConfig.secret, {
						expiresIn: authConfig.expirationTime,
					})
					res.status(200).send({ ...user, token })
				} else {
					res.json({ ok: false })
				}
			})
		}
	},

	getUserData: async (req, res) => {
		const user = await User.findOne({
			attributes: {
				exclude: ["password", "createdAt", "updatedAt", "deletedAt", "roleId"],
			},
			include: [{ model: Role, as: "role" }],
			where: { id: req.user.id },
		})
		if (!user) {
			res.status(404).send("User not found")
		} else {
			res.status(200).send(user)
		}
	},
}
