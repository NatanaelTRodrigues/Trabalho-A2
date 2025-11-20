const yup = require('yup');
const schema = yup.object().shape({
  nome: yup.string().required("Nome obrigatório"),
  cpf: yup.string().required("CPF obrigatório").min(11),
  email: yup.string().email("Email inválido").required("Email obrigatório"),
  telefone: yup.string().required("Telefone obrigatório"),
  dataNascimento: yup.date().required("Data de nascimento obrigatória")
});
async function validarCliente(req, res, next) {
  try { await schema.validate(req.body, { abortEarly: false }); next(); }
  catch (err) { res.status(400).json({ erro: err.errors }); }
}
module.exports = { validarCliente };