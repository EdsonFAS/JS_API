//importando a biblioteca e definindo uma aplicação tipo express
const { application } = require('express');
const express = require('express');

const app = express();
//importação dos arquivos de confg rotas
const baseRouter = require('./routers/base');
const contatoRouter = require('./routers/contato');
const autorRouter = require('./routers/autor');
const categoriaRouter = require('./routers/categoria')

app.use(express.json());


//Definindo EndPoints (Rotas)
//Rota Principal
app.use(baseRouter);

//Rota retorno autor
app.use(autorRouter);

//rota Contatos
app.use(contatoRouter);

//rota Categorias
app.use(categoriaRouter);

//Iniciando A Aplicação na porta 3000
app.listen(3000, function () {
    console.log('API iniciada na porta 3000');    
});