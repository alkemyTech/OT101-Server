const { User, Role } = require("../models/index")
const bcrypt = require("bcrypt")
const { validationResult } = require("express-validator")
const authConfig = require("../config/authConfig")
const jwt = require("jsonwebtoken")

const sendMail = require('../services/sendMail')

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

		try {
			const { dataValues: user } = await User.create({
				email: req.body.email,
				password: hashPassword,
				firstName: req.body.name,
				lastName: req.body.lastName,
			})

			delete user.password;

			let token = jwt.sign({ id: user.id }, authConfig.secret, {
				expiresIn: authConfig.expirationTime,
			})

			let welcomeMail = await sendMail(
				emailTo = req.body.username,
				emailSender = process.env.ONG_EMAIL,
				subject = 'Bienvenido ' + req.body.firstName + '!',
				content = 'gracias por registrarse'
			);

			res.status(200).json({ ...user, token, welcomeMail })
		} catch (err) {
			res.status(500).json({ errors: err});
		};
	},

	findOne: async (req, res) => {
		try {
			const user = await User.findOne({ where: { email: req.body.email },  raw: true} )
			if (user === null) {
				res.json({ ok: false })
			} else {
				bcrypt.compare(req.body.password, user.password, function (err, result) {
					if (result == true) {
						delete user.password;

						let token = jwt.sign({ id: user.id }, authConfig.secret, {
							expiresIn: authConfig.expirationTime,
						})
						res.status(200).json({ ...user, token })
					} else {
						res.json({ ok: false })
					}
				})
			}
		} catch (err) {
			res.status(500).json({ errors: err});
		}
	},

	getUserData: async (req, res) => {
		try {
			const user = await User.findByPk(req.user.id, {
				attributes: {
					exclude: ["password", "createdAt", "updatedAt", "deletedAt", "roleId"],
				},
				include: [{ model: Role, as: "role" }],
			})
			if (!user) {
				res.status(404).json({errors: "User not found"})
			} else {
				res.status(200).json(user);
			}
		} catch (err) {
			res.status(500).json({errors: err});
		}
	},
}