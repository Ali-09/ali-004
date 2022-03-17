const jwt = require('jsonwebtoken')
const jwtKey = process.env.PASSWORD_HASH

exports.verify = (token) => jwt.verify(token, jwtKey)

exports.generate = (email) => jwt.sign({email}, jwtKey, {expiresIn: "1h"})

exports.decode = (token) => jwt.decode(token)