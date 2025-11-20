const mongoose = require('mongoose');

async function validarId(req, res, next) {
  const { id } = req.params;
  
  // Verifica se o ID segue o padrão do MongoDB (ObjectId)
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ erro: 'ID inválido.' });
  }
  
  next();
}

module.exports = { validarId };