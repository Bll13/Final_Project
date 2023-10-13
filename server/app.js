require('@babel/register')

const morgan = require('morgan')
const express = require('express')
const config = require('./config/serverConfig')
const indexRouter = require('./routes/index.route')

const app = express()
app.use(morgan('dev'))
const PORT = 3000
config(app)
app.use('/', indexRouter)


app.listen(PORT, () => console.log(`Сервер работает за ${PORT} рублей`))
