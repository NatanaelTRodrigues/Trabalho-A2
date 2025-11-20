const yup = require('yup');
const schema = yup.object().shape({
  nome: yup.string().required("Nome obrigatório"),
  descricao: yup.string().required("Descrição obrigatória")
});
async function validarCategoria(req, res, next) {
  try { await schema.validate(req.body, { abortEarly: false }); next(); }
  catch (err) { res.status(400).json({ erro: err.errors }); }
}
module.exports = { validarCategoria };