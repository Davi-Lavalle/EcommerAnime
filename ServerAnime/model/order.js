const { Model, DataTypes } = require("sequelize");
const sequelize = require("../bd/bd");

class Order extends Model {}

Order.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    total: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    items: {
      type: DataTypes.JSON, // Armazena os itens como JSON
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Order",
  }
);

module.exports = Order;
