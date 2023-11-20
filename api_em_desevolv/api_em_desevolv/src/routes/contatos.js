const express = require("express");
const { type } = require("express/lib/response");

const router = express.Router();

const contatoController = require('../controllers/controller');


  // Listar todos os contatos
router.get('/contatos', contatoController.list);


  


  /*app.get('/contatos', function (request,response){
  return response.send('lista de contatos');
  });*/
  
  router.post('/contatos', contatoController.create)
  
  router.put('/contatos/:codigo', contatoController.update);
  
  router.delete('/contatos/:codigo', contatoController.Delete);




module.exports=router;
