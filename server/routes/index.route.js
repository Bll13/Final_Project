const router = require('express').Router()
const authApiRoiute = require('./api/apiAuth.routes')
const postApiRoute = require('./api/apiPostBuy.routes')

router.use('/api/auth', authApiRoiute)
router.use('/api/postbuy', postApiRoute)

module.exports = router
