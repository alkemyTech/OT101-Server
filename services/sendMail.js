const sendGrid = require("@sendgrid/mail")

sendGrid.setApiKey(process.env.SENDGRID_API_KEY)

const sendMail = async (emailTo, emailSender, subject, content) => {
	const msg = {
		to: emailTo,
		from: emailSender,
		subject: subject,
		html: content,
	}
	try {
		await sendGrid.send(msg)
	} catch (err) {
		console.error(error)

		if (err.response) {
			console.error(error.response.body)
		}
	}
}

module.exports = sendMail
