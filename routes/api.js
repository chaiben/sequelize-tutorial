const router = require('express').Router()

const middleware = require('../routes/middlewares')
const apiFilmsRouter = require('../routes/api/films')
const apiUsersRouter = require('../routes/api/users')

router.use('/films', middleware.checkToken, apiFilmsRouter)
router.use('/users', apiUsersRouter)

module.exports = router