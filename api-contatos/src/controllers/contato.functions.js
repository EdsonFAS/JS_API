const connection = require('../configs/mysql.config');

function buscaNome(nome) {
    connection.query('SELECT * FROM contatos WHERE nome = ?',[nome], function (err, result) {
        if(err){
            return res.json({erro: 'Ocorreram erros ao buscar contato'});
        }else if(result.affectedRows > 0){
            return true;
        };
    });
    return false;
}
function buscaEmail(email) {
    connection.query('SELECT * FROM contatos WHERE email = ?',[email], function (err, result) {
        if(err){
            return res.json({erro: 'Ocorreram erros ao buscar contato'});
        }else if(result.affectedRows > 0){
            return true;
        };
    });
    return false;
}
function buscaTelefone(telefone) {
    connection.query('SELECT * FROM contatos WHERE telefone = ?',[telefone], function (err, result) {
        if(err){
            return res.json({erro: 'Ocorreram erros ao buscar contato'});
        }else if(result.affectedRows > 0){
            return true;
        };
    });
    return false;
}
module.exports = {buscaNome, buscaEmail, buscaEmail, buscaTelefone};