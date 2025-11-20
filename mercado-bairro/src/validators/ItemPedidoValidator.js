const yup = require('yup');
const schema = yup.object().shape({
  pedidoId: yup.string().required("Pedido obrigatório").length(24),
  produtoId: yup.string().required("Produto obrigatório").length(24),
  quantidade: yup.number().required("Quantidade obrigatória"),
  subtotal: yup.number().required("Subtotal obrigatório")
});
async function validarItemPedido(req, res, next) {
  try { await schema.validate(req.body, { abortEarly: false }); next(); }
  catch (err) { res.status(400).json({ erro: err.errors }); }
}
module.exports = { validarItemPedido };