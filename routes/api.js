const router = require('express').Router()

const apiFilmsRouter = require('../routes/api/films')
const apiUsersRouter = require('../routes/api/users')

router.use('/films', apiFilmsRouter)
router.use('/users', apiUsersRouter)

module.exports = router