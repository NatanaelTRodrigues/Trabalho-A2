const express = require('express');
const router = express.Router();
const CategoriaModel = require('../models/CategoriaModel');
const { validarCategoria } = require('../validators/CategoriaValidator');
const { validarId } = require('../validators/IDValidator');

router.get('/categorias', async (req, res) => { res.json(await CategoriaModel.find()); });
router.get('/categorias/:id', validarId, async (req, res) => {
  const item = await CategoriaModel.findById(req.params.id);
  if (!item) return res.status(404).json({ erro: "Não encontrado" });
  res.json(item);
});
router.post('/categorias', validarCategoria, async (req, res) => {
  try { res.status(201).json(await CategoriaModel.create(req.body)); }
  catch (err) { res.status(400).json({ erro: err.message }); }
});
router.put('/categorias/:id', validarId, validarCategoria, async (req, res) => {
  const item = await CategoriaModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!item) return res.status(404).json({ erro: "Não encontrado" });
  res.json(item);
});
router.delete('/categorias/:id', validarId, async (req, res) => {
  if (!await CategoriaModel.findByIdAndDelete(req.params.id)) return res.status(404).json({ erro: "Não encontrado" });
  res.status(204).send();
});
module.exports = router;