const express = require('express');
const router = express.Router();
const ItemPedidoModel = require('../models/ItemPedidoModel');
const { validarItemPedido } = require('../validators/ItemPedidoValidator');
const { validarId } = require('../validators/IDValidator');

router.get('/itens-pedido', async (req, res) => { res.json(await ItemPedidoModel.find().populate(['pedidoId', 'produtoId'])); });
router.get('/itens-pedido/:id', validarId, async (req, res) => {
  const item = await ItemPedidoModel.findById(req.params.id).populate(['pedidoId', 'produtoId']);
  if (!item) return res.status(404).json({ erro: "Não encontrado" });
  res.json(item);
});
router.post('/itens-pedido', validarItemPedido, async (req, res) => {
  try { res.status(201).json(await ItemPedidoModel.create(req.body)); }
  catch (err) { res.status(400).json({ erro: err.message }); }
});
router.put('/itens-pedido/:id', validarId, validarItemPedido, async (req, res) => {
  const item = await ItemPedidoModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!item) return res.status(404).json({ erro: "Não encontrado" });
  res.json(item);
});
router.delete('/itens-pedido/:id', validarId, async (req, res) => {
  if (!await ItemPedidoModel.findByIdAndDelete(req.params.id)) return res.status(404).json({ erro: "Não encontrado" });
  res.status(204).send();
});
module.exports = router;