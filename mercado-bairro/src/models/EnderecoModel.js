const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  clienteId: { type: mongoose.Schema.Types.ObjectId, ref: 'Clientes', required: true },
  cep: { type: String, required: true },
  rua: { type: String, required: true },
  numero: { type: String, required: true },
  bairro: { type: String, required: true },
  cidade: { type: String, required: true },
  uf: { type: String, required: true, maxLength: 2 }
}, { timestamps: true });
module.exports = mongoose.model('Enderecos', schema);