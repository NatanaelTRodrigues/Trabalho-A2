const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  nome: { type: String, required: true },
  preco: { type: Number, required: true },
  categoriaId: { type: mongoose.Schema.Types.ObjectId, ref: 'Categorias', required: true },
  fornecedorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Fornecedores', required: true }
}, { timestamps: true });
module.exports = mongoose.model('Produtos', schema);