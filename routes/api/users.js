const router = require('express').Router()
const bcrypt = require('bcryptjs')  
const { User } = require('../../db')
const { check, validator, validationResult } = require('express-validator')

router.post('/register', [
  check('username', 'El nombre del usuario es obligatorio').not().isEmpty(),
  check('password', 'La contraseña del usuario es obligatoria').not().isEmpty(),
  check('email', 'Debes incluir un email valido').isEmail()
], async (req, res) => {
  const errors = validationResult(req)

  if(!errors.isEmpty()) {
    return res.status(422).json({ errores: errors.array() })
  }

  req.body.password = bcrypt.hashSync(req.body.password, 10)
  const user = await User.create(req.body)
  res.json(user)
})

module.exports = router