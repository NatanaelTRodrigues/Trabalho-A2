const express = require('express');
const router = express.Router();
const FormaPagamentoModel = require('../models/FormaPagamentoModel');
const { validarFormaPagamento } = require('../validators/FormaPagamentoValidator');
const { validarId } = require('../validators/IDValidator');

router.get('/formas-pagamento', async (req, res) => { res.json(await FormaPagamentoModel.find()); });
router.get('/formas-pagamento/:id', validarId, async (req, res) => {
  const item = await FormaPagamentoModel.findById(req.params.id);
  if (!item) return res.status(404).json({ erro: "Não encontrado" });
  res.json(item);
});
router.post('/formas-pagamento', validarFormaPagamento, async (req, res) => {
  try { res.status(201).json(await FormaPagamentoModel.create(req.body)); }
  catch (err) { res.status(400).json({ erro: err.message }); }
});
router.put('/formas-pagamento/:id', validarId, validarFormaPagamento, async (req, res) => {
  const item = await FormaPagamentoModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!item) return res.status(404).json({ erro: "Não encontrado" });
  res.json(item);
});
router.delete('/formas-pagamento/:id', validarId, async (req, res) => {
  if (!await FormaPagamentoModel.findByIdAndDelete(req.params.id)) return res.status(404).json({ erro: "Não encontrado" });
  res.status(204).send();
});
module.exports = router;