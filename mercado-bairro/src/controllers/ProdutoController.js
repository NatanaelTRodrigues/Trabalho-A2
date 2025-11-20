const express = require('express');
const router = express.Router();
const ProdutoModel = require('../models/ProdutoModel');
const { validarProduto } = require('../validators/ProdutoValidator');
const { validarId } = require('../validators/IDValidator');

router.get('/produtos', async (req, res) => {
  res.json(await ProdutoModel.find().populate(['categoriaId', 'fornecedorId']));
});
router.get('/produtos/:id', validarId, async (req, res) => {
  const item = await ProdutoModel.findById(req.params.id).populate(['categoriaId', 'fornecedorId']);
  if (!item) return res.status(404).json({ erro: "Não encontrado" });
  res.json(item);
});
router.post('/produtos', validarProduto, async (req, res) => {
  try { res.status(201).json(await ProdutoModel.create(req.body)); }
  catch (err) { res.status(400).json({ erro: err.message }); }
});
router.put('/produtos/:id', validarId, validarProduto, async (req, res) => {
  const item = await ProdutoModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!item) return res.status(404).json({ erro: "Não encontrado" });
  res.json(item);
});
router.delete('/produtos/:id', validarId, async (req, res) => {
  if (!await ProdutoModel.findByIdAndDelete(req.params.id)) return res.status(404).json({ erro: "Não encontrado" });
  res.status(204).send();
});
module.exports = router;