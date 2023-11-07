// Importando a biblioteca e definindo uma aplicação tipo express
const express = require('express');
const app = express();
app.use (express.json());

const baseRouter = require('./routes/base')
const contatoRouter = require('./routes/contatos')

app.use(express.json());



app.use(baseRouter);
app.use(contatoRouter);

// Iniciando a aplicação na porta definida (porta 3000)
app.listen(3000, function () {
  console.log('API iniciada na porta: 3000');
});
