#API de Gestão de Mercado

Este projeto consiste no desenvolvimento de uma API RESTful completa para o gerenciamento de um Mercado. O sistema permite o controle de produtos, estoque, vendas (pedidos), funcionários, clientes e fornecedores, utilizando Node.js e MongoDB.

O projeto foi desenvolvido como parte da avaliação "Trabalho Prático A2" da disciplina de Construção de Backend.

#Tecnologias Utilizadas

Runtime: Node.js
Framework: Express.js
Banco de Dados: MongoDB Atlas (Nuvem)
ODM: Mongoose (Modelagem de dados e conexão)
Validação: Yup (Validação de esquemas e dados de entrada)
Variáveis de Ambiente: Dotenv
Servidor para Testes: Postman

#Arquitetura e Estrutura do Projeto
O projeto segue o padrão MVC (Model-View-Controller), adaptado para uma API, organizado em três camadas principais para garantir a separação de responsabilidades:

1 - Models:
    Definem a estrutura dos dados (Schema) no MongoDB.
    Configuram os tipos de dados.
    Estabelecem os relacionamentos entre as coleções (ex: Um `Produto` pertence a uma `Categoria`).
    
2 - Validators:
    Utilizam a biblioteca **Yup** para garantir a integridade dos dados antes de chegarem ao banco.
    Verificam campos obrigatórios, formatos (CPF, Email), tamanhos mínimos e tipos numéricos.
    Inclui um `IDValidator` que verifica se o ID passado na URL é um `ObjectId` válido do MongoDB.
    
3 - Controllers:
    Contêm a lógica de negócio e as rotas da API.
    Realizam as operações do CRUD (Create, Read, Update, Delete).
    Gerenciam as respostas HTTP (status 200, 201, 400, 404) e o retorno em JSON.
    

#Descrição das Coleções (Collections)

1. Clientes: Dados pessoais dos consumidores.
2. Endereços:Relacionado a Clientes (1:N).
3. Funcionários: Equipe do mercado.
4. Fornecedores: Empresas que fornecem produtos.
5. Categorias: Classificação dos produtos.
6. Produtos: Itens à venda (Relacionado a Categoria e Fornecedor).
7. Estoque: Controle de quantidade (Relacionado a Produto).
8. FormasPagamento: Métodos aceitos .
9. Pedidos: Cabeçalho da venda (Relacionado a Cliente, Funcionário, FormaPagamento).
10. ItensPedido: Detalhes da venda (Relacionado a Pedido e Produto).

#Endpoints da API
A API possui 10 CRUDs completos. Todas as rotas retornam dados em formato JSON.
| **Método** | **Rota Base (Recurso)** | **Descrição** |
| `GET`      | `/clientes`             | Lista todos os clientes |
| `POST`     | `/clientes`             | Cria um novo cliente |
| `PUT`      | `/clientes/:id`         | Atualiza um cliente existente |
| `DELETE`   | `/clientes/:id`         | Remove um cliente |

#Lista de Recursos Disponíveis:
- `/clientes`
- `/funcionarios`
- `/fornecedores`
- `/produtos`
- `/categorias`
- `/estoque`
- `/pedidos`
- `/itens-pedido`
- `/formas-pagamento`
- `/enderecos`

#Exemplo de Requisição (POST /produtos)
`{
"nome": "Arroz Branco 5kg",
"preco": 25.90,
"categoriaId": "655a1b2c3d4e5f6g7h8i9j0k",
"fornecedorId": "655a1b2c3d4e5f6g7h8i9j1l"
}`


#Instalação e Execução
Siga os passos abaixo para rodar o projeto localmente:

1. Clone o repositório:
    `git clone https://github.com/NatanaelTRodrigues/Trabalho-A2.git
    cd mercado-bairro`
    
2. Instale as dependências:
    `npm install`
    
3. Configure o ambiente:
Crie um arquivo `.env` na raiz do projeto e adicione suas credenciais do MongoDB:
    
    `DB_USER=seu_usuario
    DB_PASS=sua_senha
    DB_HOST=cluster0.xxxxx.mongodb.net
    DB_NAME=MercadoDB`
    
4. Inicie o servidor:
    `node index.js`
    
O servidor rodará em: `http://localhost:3000`*

    
## Equipe de Desenvolvimento

Integrantes:

Freud Frederick Castelo de Arruda (24214290052) - (https://github.com/freudfrederick)
  Funções:
  Estrutura inicial do projeto;
  Criação das pastas iniciais;
  Cruds completas criadas: Categorias, Clientes e Endereços;
  Contribuição no ReadMe;
  Issues: Configuração inicial, Definir as Entidades e os valores, Implementação das Cruds e Conferir Documentação
    
  Hugo Lima Oliveira (24214290033)** - (https://github.com/hagaele)
  Funções:
  Criação das Issues;
  Cruds completas criadas: Funcionarios, ItensPedido, Pedido e Produto;
  Criação do IDValidator;
  Contribuição no ReadMe;
  Issues: Definir as Entidades e os valores, Implementação das Cruds, testes no Postman e Conferir Documentação
    
  Natanael Tavares Rodrigues (24114290098)** - (https://github.com/NatanaelTRodrigues)
  Funções:
  Criação do repositorio no github;
  Junção das Branchs (Merges);
  Cruds completas criadas: Estoque, FormaPagamento e Fornecedor;
  Contribuição no ReadMe;
  Issues: Configuração inicial, Definir as Entidades e os valores, Implementação das Cruds, testes no Postman, Exportar as collections Postman e Conferir Documentação.


#Postman
Exportação do Postman está na pasta /docs

  
