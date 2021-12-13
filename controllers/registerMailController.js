const sendMail = require('../services/sendMail')

module.exports = {
    send: async (req, res) => {
        
        await sendMail(
            emailTo = req.body.username,
            emailSender = process.env.ONG_EMAIL,
            subject = 'Bienvenido ' + req.body.firstName + '!',
            content = 'gracias por registrarse'
        ).then(res.json(req.body));
    }
}

