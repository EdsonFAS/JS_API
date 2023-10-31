const express = require("express");
const { type } = require("express/lib/response");
const moment = require("moment");
const router = express.Router();



const listaContatos = [
    {
      codigo: 1,
          nome: "Christine Ray",
          data: "2023-02-06",
          telefone: "(284) 901-8328",
          email: "mauris@protonmail.ca"
      },
      {
      codigo: 2,
          nome: "Eagan Hutchinson",
          data: "2023-02-04",
          telefone: "(892) 511-7166",
          email: "eget.odio@icloud.org"
      },
      {
      codigo: 3,
          nome: "Brock Lambert",
          data: "2023-03-09",
          telefone: "1-457-158-4122",
          email: "nullam.vitae.diam@yahoo.org"
      },
      {
      codigo: 4,
          nome: "Craig Vinson",
          data: "2024-06-21",
          telefone: "(437) 598-0259",
          email: "nunc.sed@google.ca"
      },
  ];
  
  // Listar todos os contatos
  router.get('/contatos', function (request, response) {
    return response.json({ dados: listaContatos });
  });
  
  /*app.get('/contatos', function (request,response){
  return response.send('lista de contatos');
  });*/
  
  router.post('/contatos', function (request,response){
  
    const nome = request.body.nome;
   const  data  = request.body.data ;
    const telefone = request.body.telefone;
    const email = request.body.email;

    const value = data;
    const check = (moment (value, 'DD-MM-YYYY',true)).isValid();
     console.log(check)
     if(check == false){
       return response.json({erro:"data incorreta!!!"})
     }
    if(nome === undefined && data === undefined && telefone === undefined && email === undefined){
      return response.json({erro:"dados incompletos!!"})
    }

    if( nome.length<5){
      return response.json({erro:"Nome com tamanho insuficiente!!!"})
    }
  
    const quantidade = listaContatos.length;
  
    const novoContato = {
      codigo: quantidade + 1,
      nome: nome,
      data: data,
      telefone: telefone,
      email: email,
    };
  
    listaContatos.push(novoContato);
  
    return response.json(novoContato);
  });
  
  router.put('/contatos/:codigo', function (request, response){
  const codigo = request.params.codigo;
  
  let contato = null;
   for (const _contato of listaContatos){
     if (_contato.codigo == codigo){
  
      contato = _contato;
     }
   }
  
   if(contato == undefined){
     return response.json ({erro: `Contato #${codigo} não foi encontrato`});
   }
  
   const nome = request.body.nome;
   const data = request.body.data;
   const telefone = request.body.telefone;
   const email = request.body.email;
  
   contato.nome = nome;
   contato.data = data;
   contato.telefone = telefone;
   contato.email = email;
  
   return response.json(contato);
  
  
  
  });
  
  router.delete('/contatos/:codigo', function (request, response) {
    const codigo = request.params.codigo;
  
    return response.send(`Remover o contato Código: ${codigo}`);
  });




module.exports=router;
