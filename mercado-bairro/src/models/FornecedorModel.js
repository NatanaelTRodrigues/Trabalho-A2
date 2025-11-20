const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  nome: { type: String, required: true },
  cnpj: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  telefone: { type: String, required: true }
}, { timestamps: true });
module.exports = mongoose.model('Fornecedores', schema);