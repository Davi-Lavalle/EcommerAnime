const { DataTypes } = require('sequelize');
const sequelize = require('../bd/bd');

const Produtos = sequelize.define('Produtos', {
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER, // Corrigido de NUMBER para INTEGER
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
  },
}, {
  timestamps: true,
});

module.exports = Produtos;
