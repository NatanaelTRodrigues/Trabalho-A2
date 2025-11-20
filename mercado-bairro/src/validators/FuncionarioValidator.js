const yup = require('yup');
const schema = yup.object().shape({
  nome: yup.string().required("Nome obrigatório"),
  cpf: yup.string().required("CPF obrigatório"),
  email: yup.string().email("Email inválido").required(),
  telefone: yup.string().required(),
  cargo: yup.string().required(),
  dataContratacao: yup.date().required()
});
async function validarFuncionario(req, res, next) {
  try { await schema.validate(req.body, { abortEarly: false }); next(); }
  catch (err) { res.status(400).json({ erro: err.errors }); }
}
module.exports = { validarFuncionario };