const Sequelize = require('sequelize')

const FilmModel = require('./models/films')

const sequelize = new Sequelize('db', 'user', 'password', {
  host: 'localhost',
  dialect: 'mysql'
})

const Film = FilmModel(sequelize, Sequelize);

sequelize.sync({ force: false })
  .then(() => {
    console.log('Tablas sincornizadas')
  }) 

module.exports = {
  Film
}