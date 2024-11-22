// configurando o Sequelize
/*const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('cadastro', 'root', '1234', {
  host: 'localhost',
  dialect: 'mysql'
});


module.exports = sequelize;*/
const Sequelize = require('sequelize')
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage:'./bd/animebd.sqlite'
})
module.exports = sequelize;
