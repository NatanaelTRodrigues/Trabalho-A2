const yup = require('yup');
const schema = yup.object().shape({
  nome: yup.string().required("Nome obrigatório"),
  preco: yup.number().required("Preço obrigatório"),
  categoriaId: yup.string().required("Categoria obrigatória").length(24),
  fornecedorId: yup.string().required("Fornecedor obrigatório").length(24)
});
async function validarProduto(req, res, next) {
  try { await schema.validate(req.body, { abortEarly: false }); next(); }
  catch (err) { res.status(400).json({ erro: err.errors }); }
}
module.exports = { validarProduto };