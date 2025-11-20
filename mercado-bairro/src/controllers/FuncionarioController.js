const express = require('express');
const router = express.Router();
const FuncionarioModel = require('../models/FuncionarioModel');
const { validarFuncionario } = require('../validators/FuncionarioValidator');
const { validarId } = require('../validators/IDValidator');

router.get('/funcionarios', async (req, res) => { res.json(await FuncionarioModel.find()); });
router.get('/funcionarios/:id', validarId, async (req, res) => {
  const item = await FuncionarioModel.findById(req.params.id);
  if (!item) return res.status(404).json({ erro: "Não encontrado" });
  res.json(item);
});
router.post('/funcionarios', validarFuncionario, async (req, res) => {
  try { res.status(201).json(await FuncionarioModel.create(req.body)); }
  catch (err) { res.status(400).json({ erro: err.message }); }
});
router.put('/funcionarios/:id', validarId, validarFuncionario, async (req, res) => {
  const item = await FuncionarioModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!item) return res.status(404).json({ erro: "Não encontrado" });
  res.json(item);
});
router.delete('/funcionarios/:id', validarId, async (req, res) => {
  if (!await FuncionarioModel.findByIdAndDelete(req.params.id)) return res.status(404).json({ erro: "Não encontrado" });
  res.status(204).send();
});
module.exports = router;