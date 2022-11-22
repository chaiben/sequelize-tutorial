module.exports = (sequelize, type) => {
  return sequelize.define('User', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: type.STRING,
    email: type.STRING,
    password: type.STRING(150)
  })
}