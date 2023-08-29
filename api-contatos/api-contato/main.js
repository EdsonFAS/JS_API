const express = require('express');

const app = express();

// Rota principal
app.get('/', function (request, response) {
  
    
      return response.send(`API Funcionando...`);
  
});
app.get('/comand',function(request,response){
  return response.send("28")
});


// Iniciando a aplicação na porta 3000
app.listen(3000, function () {
  console.log('API iniciada na porta: 3000');
});