const router = require('express').Router()

router.use('/users', require('./userRoutes.js'))
router.use('/movies', require('./movieRoutes.js'))

module.exports = router
