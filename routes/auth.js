const router = require('express').Router();

const { generate } = require('../utils/jwt')

router.post('/generate-access-token', (req, res) => {
  
    const emailUser = req.body.email
  
    if(emailUser){
      try {
        const token = generate(emailUser)
        res.status(200).send({accesstoken:token})
      } catch (error) {
        res.status(500).send({message:error.message})    
      }
    }else{
      res.status(500).send({message: 'email required'})
    }
})

module.exports = router;