const router = require('express').Router()

const authApiRoiute = require('./api/apiAuth.routes')
const mapApiRoute = require('./api/apiMap.routes')
const postApiRoute = require('./api/apiPostBuy.routes')


router.use('/api/auth', authApiRoiute)
router.use('/api/postbuy', postApiRoute)
router.use('/api/map', mapApiRoute)

module.exports = router
