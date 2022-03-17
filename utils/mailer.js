const nodemailer = require('nodemailer')
const { google } = require('googleapis');
const { clientId, clientSecret, refreshToken, user, redirectURI } = require('../config');

const OAuth2 = google.auth.OAuth2

const OAuth2_client = new OAuth2(clientId, clientSecret, redirectURI)
OAuth2_client.setCredentials({refresh_token: refreshToken})

exports.send_email = async (recipent) => {
    const accessToken = await OAuth2_client.getAccessToken()

    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: user,
            clientId: clientId,
            clientSecret: clientSecret,
            refreshToken: refreshToken,
            accessToken: accessToken
        }
    })

    const mailOptions = {
        from: user,
        to: recipent,
        subject: "My C.V.",
        text: "C.V.",
        html: "<p>HTML version of the message</p>"
    }

    return await transport.sendMail(mailOptions)
    
}