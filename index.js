const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const jwt = require('jsonwebtoken')
const jwtKey = process.env.PASSWORD_HASH

app.get("/", async (_,res) => {
  res.send('SERVICE MAILER v1.0')
})

app.post('/verify', async (req, res) => {
  const token = req.headers.authorization.split(' ')[1]
  jwt.verify(token, jwtKey, (err, verifiedJwt) => {
    if(err){
      res.status(500).send({message:err.message})
    }else{
      res.status(200).send(verifiedJwt)
    }
  })
})

app.post('/generate-access-token', (req, res) => {
  const emailUser = req.body.email
  const token = jwt.sign({email: emailUser}, jwtKey, {expiresIn: "30s"})

  res.send(token)
})

app.listen(port, () => {
  console.log(`Server running in port:${port}`)
})
