const router = require('express').Router()
const authApiRoiute = require('./api/apiAuth.routes')


router.use('/auth', authApiRoiute)

module.exports = router
