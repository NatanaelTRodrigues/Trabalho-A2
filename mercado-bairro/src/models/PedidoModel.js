const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  clienteId: { type: mongoose.Schema.Types.ObjectId, ref: 'Clientes', required: true },
  funcionarioId: { type: mongoose.Schema.Types.ObjectId, ref: 'Funcionarios', required: true },
  formaPagamentoId: { type: mongoose.Schema.Types.ObjectId, ref: 'FormasPagamento', required: true },
  data: { type: Date, default: Date.now },
  valorTotal: { type: Number, required: true }
}, { timestamps: true });
module.exports = mongoose.model('Pedidos', schema);