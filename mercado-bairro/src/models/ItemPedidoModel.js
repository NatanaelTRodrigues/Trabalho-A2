const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  pedidoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Pedidos', required: true },
  produtoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Produtos', required: true },
  quantidade: { type: Number, required: true },
  subtotal: { type: Number, required: true }
}, { timestamps: true });
module.exports = mongoose.model('ItensPedido', schema);