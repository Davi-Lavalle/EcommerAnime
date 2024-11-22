const express = require('express');
const Produtos = require('../model/produtos');
const router = express.Router();

router.get('/produtos', async (req, res) => {
  try {
    const produtoItems = await Produtos.findAll();
    res.json(produtoItems);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter itens do produto' });
  }
});

router.get('/produtos/:id', async (req, res) => {
  const produto = await Produtos.findByPk(req.params.id);
  res.json(produto);
});

router.post('/produtos', async (req, res) => {
  try {
    const { image, name, description, price, quantity, category } = req.body;
    const ProdutosItem = await Produtos.create({ image, name, description, price, quantity, category});
    res.status(201).json(ProdutosItem);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao adicionar o produto' });
  }
});

router.put('/produtos/:id', async (req, res) => {
    const { id } = req.params;
    const { image, name, description, price, quantity, category } = req.body;
    await Produtos.update({ image, name, description, price, quantity, category }, { where: { id } });
    res.json({ message: 'Produto atualizado com sucesso' });
  });
  
router.delete('/produtos/:id', async (req, res) => {
    const { id } = req.params;
    await Produtos.destroy({ where: { id } });
    res.json({ message: 'Produto deletado com sucesso' });
});

module.exports = router;
