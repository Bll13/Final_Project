const router = require('express').Router()
const authApiRoiute = require('./api/apiAuth.routes')
const addPostRoute = require('./api/apiAddPost.routes')


router.use('/api/auth', authApiRoiute)
router.use('/api/posts', addPostRoute)


module.exports = router
