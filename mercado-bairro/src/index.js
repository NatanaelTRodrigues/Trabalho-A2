const express = require('express');
const app = express();
const mongoose = require('mongoose');

require('dotenv').config();

app.use(express.json());

const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_HOST = process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;

const url = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(url)
  .then(() => {
    console.log("Conectado ao MongoDB com sucesso!");
  })
  .catch(err => {
    console.error("Erro ao conectar no MongoDB:", err);
  });


const ProdutoController = require('./controllers/ProdutoController');
app.use(ProdutoController);

const CategoriaController = require('./controllers/CategoriaController');
app.use(CategoriaController);

const EstoqueController = require('./controllers/EstoqueController');
app.use(EstoqueController);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`API Rodando em http://localhost:${PORT}`);
});