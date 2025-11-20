const yup = require('yup');
const schema = yup.object().shape({
  nome: yup.string().required("Nome obrigatório"),
  cnpj: yup.string().required("CNPJ obrigatório"),
  email: yup.string().email("Email inválido").required(),
  telefone: yup.string().required()
});
async function validarFornecedor(req, res, next) {
  try { await schema.validate(req.body, { abortEarly: false }); next(); }
  catch (err) { res.status(400).json({ erro: err.errors }); }
}
module.exports = { validarFornecedor };