const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const validHeaderToken = require('./middlewares/headerAuth')
const bodyParser = require('body-parser')
const favicon = require('serve-favicon')
const path = require('path')

const routesAuth = require('./routes/auth')
const routesMail = require('./routes/mail')

app.get('/', (_,req)=>{
  req.send('Service mailer not one more step!')
})
app.use('/auth', routesAuth)

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(validHeaderToken)

app.use('/mail', routesMail)


app.listen(port, () => {
  console.log(`Server running in port:${port}`)
})
