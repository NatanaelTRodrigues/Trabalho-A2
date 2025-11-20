const express = require('express');
const router = express.Router();
const ClienteModel = require('../models/ClienteModel');
const { validarCliente } = require('../validators/ClienteValidator');
const { validarId } = require('../validators/IDValidator');

router.get('/clientes', async (req, res) => { res.json(await ClienteModel.find()); });
router.get('/clientes/:id', validarId, async (req, res) => {
  const item = await ClienteModel.findById(req.params.id);
  if (!item) return res.status(404).json({ erro: "Não encontrado" });
  res.json(item);
});
router.post('/clientes', validarCliente, async (req, res) => {
  try { res.status(201).json(await ClienteModel.create(req.body)); }
  catch (err) { res.status(400).json({ erro: err.message }); }
});
router.put('/clientes/:id', validarId, validarCliente, async (req, res) => {
  const item = await ClienteModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!item) return res.status(404).json({ erro: "Não encontrado" });
  res.json(item);
});
router.delete('/clientes/:id', validarId, async (req, res) => {
  if (!await ClienteModel.findByIdAndDelete(req.params.id)) return res.status(404).json({ erro: "Não encontrado" });
  res.status(204).send();
});
module.exports = router;