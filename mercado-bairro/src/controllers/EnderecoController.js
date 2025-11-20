const express = require('express');
const router = express.Router();
const EnderecoModel = require('../models/EnderecoModel');
const { validarEndereco } = require('../validators/EnderecoValidator');
const { validarId } = require('../validators/IDValidator');

router.get('/enderecos', async (req, res) => { res.json(await EnderecoModel.find().populate('clienteId')); });
router.get('/enderecos/:id', validarId, async (req, res) => {
  const item = await EnderecoModel.findById(req.params.id).populate('clienteId');
  if (!item) return res.status(404).json({ erro: "Não encontrado" });
  res.json(item);
});
router.post('/enderecos', validarEndereco, async (req, res) => {
  try { res.status(201).json(await EnderecoModel.create(req.body)); }
  catch (err) { res.status(400).json({ erro: err.message }); }
});
router.put('/enderecos/:id', validarId, validarEndereco, async (req, res) => {
  const item = await EnderecoModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!item) return res.status(404).json({ erro: "Não encontrado" });
  res.json(item);
});
router.delete('/enderecos/:id', validarId, async (req, res) => {
  if (!await EnderecoModel.findByIdAndDelete(req.params.id)) return res.status(404).json({ erro: "Não encontrado" });
  res.status(204).send();
});
module.exports = router;