const express = require('express');
const router = express.Router();
const PedidoModel = require('../models/PedidoModel');
const { validarPedido } = require('../validators/PedidoValidator');
const { validarId } = require('../validators/IDValidator');

router.get('/pedidos', async (req, res) => {
  res.json(await PedidoModel.find().populate(['clienteId', 'funcionarioId', 'formaPagamentoId']));
});
router.get('/pedidos/:id', validarId, async (req, res) => {
  const item = await PedidoModel.findById(req.params.id).populate(['clienteId', 'funcionarioId', 'formaPagamentoId']);
  if (!item) return res.status(404).json({ erro: "Não encontrado" });
  res.json(item);
});
router.post('/pedidos', validarPedido, async (req, res) => {
  try { res.status(201).json(await PedidoModel.create(req.body)); }
  catch (err) { res.status(400).json({ erro: err.message }); }
});
router.put('/pedidos/:id', validarId, validarPedido, async (req, res) => {
  const item = await PedidoModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!item) return res.status(404).json({ erro: "Não encontrado" });
  res.json(item);
});
router.delete('/pedidos/:id', validarId, async (req, res) => {
  if (!await PedidoModel.findByIdAndDelete(req.params.id)) return res.status(404).json({ erro: "Não encontrado" });
  res.status(204).send();
});
module.exports = router;