const express = require('express');
const router = express.Router();

//lista de contatos
const contatoController = require('../controllers/contato.controller');

//rota Listar todos os contatos
router.get('/contatos', contatoController.list);

//Informações de um contato Expecifico
//Listar todos os contatos
router.get('/contato/:codigo', contatoController.searchList);

//Inserir um contato na lista de contatos
router.post('/contato', contatoController.create);

// editar um contato Existente
router.put('/contato/:codigo', contatoController.update);

//Excluir um Contato Existente
router.delete('/contato/:codigo', contatoController.destroy);

module.exports = router;