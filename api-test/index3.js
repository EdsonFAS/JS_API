function diaDaSemana(numero) {
    let resposta = "";
    switch (numero) {
        case 1:
            resposta = "DOMINGO"
            break;
        case 2:
            resposta = "SEGUNDA-FEIRA"
            break;
        case 3:
            resposta = "TERÇA-FEIRA"
            break;
        case 4:
            resposta = "QUARTA-FEIRA"
            break;

        case 5:
            resposta = "QUINTA-FEIRA"
            break;
        case 6:
            resposta = "SEXTA-FEIRA"
            break;
        case 7:
            resposta = "SÁBADO"
            break;
        default:
            resposta = "Valor Inválido!"
            break;
    }

    console.log(`
Opção: ${numero}
Dia da Semana: ${resposta}`);
}
diaDaSemana(4)