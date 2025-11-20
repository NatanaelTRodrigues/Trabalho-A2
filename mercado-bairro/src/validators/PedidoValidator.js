const yup = require('yup');
const schema = yup.object().shape({
  clienteId: yup.string().required("Cliente obrigatório").length(24),
  funcionarioId: yup.string().required("Funcionário obrigatório").length(24),
  formaPagamentoId: yup.string().required("Forma de pagamento obrigatória").length(24),
  data: yup.date(),
  valorTotal: yup.number().required("Valor total obrigatório")
});
async function validarPedido(req, res, next) {
  try { await schema.validate(req.body, { abortEarly: false }); next(); }
  catch (err) { res.status(400).json({ erro: err.errors }); }
}
module.exports = { validarPedido };