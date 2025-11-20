const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Configuração do dotenv para ler o arquivo .env
require('dotenv').config();

app.use(express.json());

// --- CONEXÃO COM O BANCO DE DADOS ---
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_HOST = process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;


const url = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(url)
  .then(() => {
    console.log(" Conectado ao MongoDB com sucesso!");
  })
  .catch(err => {
    console.error(" Erro ao conectar no MongoDB:", err);
  });

// Produtos e Organização
const ProdutoController = require('./controllers/ProdutoController');
app.use(ProdutoController);

const CategoriaController = require('./controllers/CategoriaController');
app.use(CategoriaController);

const EstoqueController = require('./controllers/EstoqueController');
app.use(EstoqueController);

// Vendas e Operações
const PedidoController = require('./controllers/PedidoController');
app.use(PedidoController);

const ItemPedidoController = require('./controllers/ItemPedidoController');
app.use(ItemPedidoController);

const FormaPagamentoController = require('./controllers/FormaPagamentoController');
app.use(FormaPagamentoController);

// Dados Adicionais
const EnderecoController = require('./controllers/EnderecoController');
app.use(EnderecoController);

// --- INICIALIZAÇÃO DO SERVIDOR ---
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(` API Rodando em http://localhost:${PORT}`);
});