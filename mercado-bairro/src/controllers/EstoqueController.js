const express = require('express');
const router = express.Router();
const EstoqueModel = require('../models/EstoqueModel');
const { validarEstoque } = require('../validators/EstoqueValidator');
const { validarId } = require('../validators/IDValidator');

router.get('/estoque', async (req, res) => { res.json(await EstoqueModel.find().populate('produtoId')); });
router.get('/estoque/:id', validarId, async (req, res) => {
  const item = await EstoqueModel.findById(req.params.id).populate('produtoId');
  if (!item) return res.status(404).json({ erro: "Não encontrado" });
  res.json(item);
});
router.post('/estoque', validarEstoque, async (req, res) => {
  try { res.status(201).json(await EstoqueModel.create(req.body)); }
  catch (err) { res.status(400).json({ erro: err.message }); }
});
router.put('/estoque/:id', validarId, validarEstoque, async (req, res) => {
  const item = await EstoqueModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!item) return res.status(404).json({ erro: "Não encontrado" });
  res.json(item);
});
router.delete('/estoque/:id', validarId, async (req, res) => {
  if (!await EstoqueModel.findByIdAndDelete(req.params.id)) return res.status(404).json({ erro: "Não encontrado" });
  res.status(204).send();
});
module.exports = router;