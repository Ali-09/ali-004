const { verify } = require('../utils/jwt')

const validHeaderToken = (req, res, next) => {
    if (!req.headers.authorization) return res.status(403)
        .send({ message: "Your request does not have an authorization header" });
    
    try{
        const token = req.headers.authorization.split(' ')[1]
        verify(token)
        next();
    } catch (error) {
        res.status(403).send({message: error.message})  
    }
}

module.exports = validHeaderToken