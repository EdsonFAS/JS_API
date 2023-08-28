let  salario  =200
let aument = 0
let porcent = 0
let porc_aumento= 0.15
let salario_Aut =0
function aumento(s,x) {

    if(s<280){
       aument = salario * x

    }
    if(s>= 280 && salario<=700 ){
        aument= salario * x
    }    
    if(s>= 700 && salario<=1500 ){
        aument = salario * x
    }
    if(s> 1500){
        aument = salario * x
    }
    return aument
}

porcent = aumento(salario,porc_aumento)
salario_Aut = porcent + salario
console.log(`Salario anterio: ${salario} 
Porcentagem de aumento ${porc_aumento*100} 
Aumento: ${porcent}
Salario atual: ${salario_Aut}`)