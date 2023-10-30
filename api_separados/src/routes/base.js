const express = require("express");
const router = express.Router();

router.get('/', function(request,response){
    return response.send('API funcionando')
});

router.get('/sobre', function (request, response) {
    response.send('Informações sobre a API.');
  });
  



module.exports=router;
