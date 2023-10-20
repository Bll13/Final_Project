require('dotenv').config()
// require('@babel/register')
const path = require('path')
const morgan = require('morgan')
const express = require('express')
const config = require('./config/serverConfig')
const indexRouter = require('./routes/index.route')

const app = express()
app.use(morgan('dev'))
const { PORT } = process.env
config(app)
app.use('/', indexRouter)
app.use(express.static(path.join(__dirname, '../client/dist')))
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'))
})
app.listen(PORT, () => console.log(`наш сервер пашет на ${PORT}  порту`))
