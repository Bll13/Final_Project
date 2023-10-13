const cookieParser = require('cookie-parser')
const express = require('express')
const path = require('path')
const session = require('express-session')

// const getUser = require('../middleware/getUser')
const sessionConfig = require('./sessionsConfig')

const config = (app) => {
  app.use(express.urlencoded({ extended: true }))
  app.use(express.static(path.join(__dirname, '../public')))
  app.use(express.json())

  app.use(cookieParser())
  app.use(session(sessionConfig))
  
}

module.exports = config
