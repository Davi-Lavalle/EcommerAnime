const express = require("express");
const Order = require("../model/order");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.get('/orders', async (req, res) => {
  try {
    const orderItems = await Order.findAll();
    res.json(orderItems);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter itens do carrinho' });
  }
});

router.post("/orders", authMiddleware(), async (req, res) => {
  const { items, total } = req.body;

  try {
    const order = await Order.create({
      userId: req.user.id, // Obtém o ID do usuário autenticado
      items,
      total,
    });

    res.status(201).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao criar pedido" });
  }
});

module.exports = router;
