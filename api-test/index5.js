function promocaoCarnes(tipo, quant, tipoPagament) {
    let TotalCompra = 0.0;
    let desconto = 0.0;
    let TotalPagar = 0.0;
    if (tipoPagament == "D") {
        tipoPagament = "DINHEIRO";
        if (tipo == "F" || tipo == "FD") {
            tipo = "FILE DUPLO";
            if (quant <= 5.0) {
                TotalCompra = quant * 4.90;
                desconto += quant * 0.90;
            } else {
                TotalCompra = quant * 5.80;
            }
        } else if (tipo == "A" || tipo == "ALCATRA") {
            tipo = "ALCATRA";
            if (quant <= 5.0) {
                TotalCompra = quant * 5.90;
                desconto += quant * 0.90;
            } else {
                TotalCompra = quant * 6.80;
            }
        } else if (tipo == "P" || tipo == "PICANHA") {
            tipo = "PICANHA";
            if (quant <= 5.0) {
                TotalCompra = quant * 6.90;
                desconto += quant * 0.90;
            } else {
                TotalCompra = quant * 7.80;
            }
        } else {
            console.log("Tipo invalido!");
        }
        TotalPagar = TotalCompra;
        TotalCompra += desconto;
    } else if (tipoPagament == "C") {
        tipoPagament = "CARTÃO ASSAÍ";
        if (tipo == "F" || tipo == "FD") {
            tipo = "FILE DUPLO";
            if (quant <= 5.0) {
                TotalCompra = quant * 4.90;
                desconto += quant * 0.90;
            } else {
                TotalCompra = quant * 5.80;
            }
        } else if (tipo == "A" || tipo == "ALCATRA") {
            tipo = "ALCATRA";
            if (quant <= 5.0) {
                TotalCompra = quant * 5.90;
                desconto += quant * 0.90;
            } else {
                TotalCompra = quant * 6.80;
            }
        } else if (tipo == "P" || tipo == "PICANHA") {
            tipo = "PICANHA";
            if (quant <= 5.0) {
                TotalCompra = quant * 6.90;
                desconto += quant * 0.90;
            } else {
                TotalCompra = quant * 7.80;
            }
        } else {
            console.log("Tipo invalido!");
        }

        TotalPagar = TotalCompra * 0.95;
        let aux = TotalCompra + desconto;
        desconto += TotalCompra - TotalPagar;
        TotalCompra = aux;
    }

    console.log(`
    Tipo da Carne: ${tipo}
    Quantidade: ${quant}Kg
    Total da Compra: R$${TotalCompra.toFixed(2)}
    Tipo de Pagamento: ${tipoPagament}
    Desconto: R$${desconto.toFixed(2)}
    Total a Pagar: R$${TotalPagar.toFixed(2)}`)
}