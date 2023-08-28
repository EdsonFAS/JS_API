function CalculoDesconto(combustivel,quantidade){
    let totalPagar = 0;
    let desconto = 0;
    let preco_nomarl =0;
    if(combustivel.toUpperCase()== "G"){


        combustivel= "Gasolina"
        if(quantidade<=20&&quantidade>0){
            preco_nomarl= quantidade*2.50
            desconto =preco_nomarl*0.04;
            totalPagar=preco_nomarl-desconto;

        }
        if(quantidade>20){
            preco_nomarl= quantidade*2.50
            desconto =preco_nomarl*0.06;
            totalPagar=preco_nomarl-desconto;
        }
    }
    if(combustivel.toUpperCase()=="A"){
        combustivel= "Alcool"
        if(quantidade<=20&&quantidade>0){
            preco_nomarl= quantidade*1.90
            desconto =preco_nomarl*0.03;
            totalPagar=preco_nomarl-desconto;

        }
        if(quantidade>20){
            preco_nomarl= quantidade*1.90
            desconto =preco_nomarl*0.05;
            totalPagar=preco_nomarl-desconto;
        }

    }

    console.log(`Tipo de combustivel: ${combustivel}
    Total da bomba: R$: ${preco_nomarl.toFixed(2)}
    Quantidade de combustivel: ${quantidade}
    Total a pagar: R$: ${totalPagar.toFixed(2)}
    Desconto: R$: ${desconto.toFixed(2)}`);

}
CalculoDesconto("g",53)
