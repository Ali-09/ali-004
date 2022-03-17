const router = require('express').Router();

const { decode } = require('../utils/jwt')
const { send_email } = require('../utils/mailer');


router.post('/send-mail', async (req,res)=>{
    const token = req.headers.authorization.split(' ')[1]
    const email = decode(token).email
  
    try {
      result = await send_email(email)
      res.status(200).send({result})
    } catch (error) {
      console.log(error);
      res.status(500).send({message:error.message})    
    }
})

module.exports = router