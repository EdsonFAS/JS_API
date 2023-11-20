var  validador  =  require ("validador" ) ;
const moment = require("moment");
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
  function list(request, response) {
    return response.json({ dados: listaContatos });
  }

  function create(request, response){

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

     function validaremail(email){
       const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]{2,}$/;
       return regex.test(email)
     }
     if(validaremail(email)==false){
       return response.json({erro:"email incorreto"});
     }

     function validarTEl(telefone){
      const regex =/^\(\d{2}\)\s?\d\d{4}\-\d{4}$/
      return regex.test(telefone)
     } 
     if(validarTEl(telefone)== false){
      return response.json({erro:"telefone incorreto"});
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
  }

function update ( request,response){

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
  
  
}


function Delete(request, response) {
  const codigo = req.params.codigo;
  let cond = true;

  for (const _contato of listContatos) {
      if (_contato.id == codigo){
          listContatos.splice(listContatos.indexOf(codigo),1)
          
          return res.json({sucess:`o contato ${codigo} foi Excluido`});
      }        
  }

  if (cond) {
  return res.json({erro:`Contato #${codigo} nao foi encontrado.`})  
  }
}


  module.exports = {list,create,update,Delete}