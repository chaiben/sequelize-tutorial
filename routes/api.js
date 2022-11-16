const router = require('express').Router()

const apiFilmsRouter = require('../routes/api/films')

router.use('/films', apiFilmsRouter)

module.exports = router