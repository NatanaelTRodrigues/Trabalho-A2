const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  nome: { type: String, required: true },
  cpf: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  telefone: { type: String, required: true },
  cargo: { type: String, required: true },
  dataContratacao: { type: Date, required: true }
}, { timestamps: true });
module.exports = mongoose.model('Funcionarios', schema);