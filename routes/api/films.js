const  router = require('express').Router()

const { Film } = require('../../db')

router.get('/', async (req, res) => {
  const films = await Film.findAll()
  res.json(films);
})

router.post('/', async (req, res) => {
  const film = await Film.create(req.body)
  res.json(film)
})

module.exports = router