const yup = require('yup');
const schema = yup.object().shape({
  produtoId: yup.string().required("Produto obrigatório").length(24),
  quantidade: yup.number().required("Quantidade obrigatória").integer(),
  atualizadoEm: yup.date()
});
async function validarEstoque(req, res, next) {
  try { await schema.validate(req.body, { abortEarly: false }); next(); }
  catch (err) { res.status(400).json({ erro: err.errors }); }
}
module.exports = { validarEstoque };