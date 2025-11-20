const express = require('express');
const router = express.Router();
const FornecedorModel = require('../models/FornecedorModel');
const { validarFornecedor } = require('../validators/FornecedorValidator');
const { validarId } = require('../validators/IDValidator');

router.get('/fornecedores', async (req, res) => { res.json(await FornecedorModel.find()); });
router.get('/fornecedores/:id', validarId, async (req, res) => {
  const item = await FornecedorModel.findById(req.params.id);
  if (!item) return res.status(404).json({ erro: "Não encontrado" });
  res.json(item);
});
router.post('/fornecedores', validarFornecedor, async (req, res) => {
  try { res.status(201).json(await FornecedorModel.create(req.body)); }
  catch (err) { res.status(400).json({ erro: err.message }); }
});
router.put('/fornecedores/:id', validarId, validarFornecedor, async (req, res) => {
  const item = await FornecedorModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!item) return res.status(404).json({ erro: "Não encontrado" });
  res.json(item);
});
router.delete('/fornecedores/:id', validarId, async (req, res) => {
  if (!await FornecedorModel.findByIdAndDelete(req.params.id)) return res.status(404).json({ erro: "Não encontrado" });
  res.status(204).send();
});
module.exports = router;