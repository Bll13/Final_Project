const router = require('express').Router()
const authApiRoiute = require('./api/apiAuth.routes')


router.use('/api/auth', authApiRoiute)

module.exports = router
