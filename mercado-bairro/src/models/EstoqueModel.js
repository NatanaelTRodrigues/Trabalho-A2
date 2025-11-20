const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  produtoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Produtos', required: true },
  quantidade: { type: Number, required: true },
  atualizadoEm: { type: Date, default: Date.now }
}, { timestamps: true });
module.exports = mongoose.model('Estoque', schema);