let salario_bruto = 1100.00
let IR = 0
result_IR =0
let inns=0
let fgts =0
let desconto =0
let salarioliquido =0

function descontoIR (sl,r){
    let resul=0
    resul = sl * (r/100)
  
    return resul
    
}

if(salario_bruto<=1500){
    IR=5
    result_IR=descontoIR(salario_bruto,IR)
   
}if(salario_bruto<=2500&& salario_bruto>=1500){
    IR=10
    result_IR=descontoIR(salario_bruto,IR)
}if(salario_bruto>=2500){
    IR=20
    result_IR=descontoIR(salario_bruto,IR)
}

function descontFgts(s){
fgts = s * (11/100)
return fgts
}
fgts = descontFgts(salario_bruto)
function descontInss(x){
    inns = x * (10/100)
    return inns
    }
inns= descontInss(salario_bruto)
    desconto =  inns +result_IR

    salarioliquido = salario_bruto - desconto
console.log(`Salário Bruto: R$: ${salario_bruto.toFixed(2)}
(-) IR (${IR}%)   R$: ${result_IR.toFixed(2)}
(-) INSS (10%)  R$: ${inns.toFixed(2)}
FGTS (11%)      R$ ${fgts.toFixed(2)}
Total de Desconto    R$: ${desconto.toFixed(2)}
Salário Liquido    R$: ${salarioliquido.toFixed(2)}`)


   