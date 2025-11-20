const yup = require('yup');
const schema = yup.object().shape({
  clienteId: yup.string().required("Cliente obrigatório").length(24),
  cep: yup.string().required("CEP obrigatório"),
  rua: yup.string().required("Rua obrigatória"),
  numero: yup.string().required("Número obrigatório"),
  bairro: yup.string().required("Bairro obrigatório"),
  cidade: yup.string().required("Cidade obrigatória"),
  uf: yup.string().required("UF obrigatório").length(2)
});
async function validarEndereco(req, res, next) {
  try { await schema.validate(req.body, { abortEarly: false }); next(); }
  catch (err) { res.status(400).json({ erro: err.errors }); }
}
module.exports = { validarEndereco };