const validacoes = require('validatorjs');

const connection = require('../configs/mysql.config');

//funcao lista
function list(request, response) {
    connection.query('SELECT * FROM contatos', function (err, result) {
        if(err){
            return response.json({erro: 'Ocorreram erros ao buscar os dados'});
        }
        return response.json(result);
    });
}

function searchList(request, response) {
    let codigo = request.params.codigo;
    connection.query('SELECT * FROM contatos WHERE id = ?',[codigo], function (err, result) {
        if(err){
            return response.json({erro: 'Ocorreram erros ao buscar contato'});
        }
        return response.json(result);
    });
}

//funcao criar contato
function create(request, response) {
    const {nome, data, telefone, email} = request.body;

    let regras = {
        nome: 'required|min:5',
        data: 'required|date',
        telefone: ['required', 'regex:/^\\(\\d{2}\\)\\s?\\d\\d{4}\\-\\d{4}$/'],
        email: 'required|email'
    };

    let validacao = new validacoes(request.body, regras);

    if (validacao.fails()) {
        return response.json(validacao.errors);
    }else
    {
        connection.query('INSERT INTO contatos VALUES (NULL,?,?,?,?);',[nome,data,telefone,email], function (err, result) {
            if (err) {
                return response.json({erro: err.message})
            }
            if(result.affectedRows == 0){
                return response.json({erro: 'Falha ao tentar Cadastrar'});
            }else return response.json({id: result.insertId, nome, data, telefone, email});
        });
    }
}

function update(request, response) {
    const codigo = request.params.codigo;
    const {nome, data, telefone, email} = request.body;
    let regras = {
        nome: 'required|min:5',
        data: 'required|date',
        telefone: ['required','regex:/^\\(\\d{2}\\)\\s?\\d\\d{4}\\-\\d{4}$/'],
        email: 'required|email'
    };

    let validacao = new validacoes(request.body, regras);

    if (validacao.fails()) {
        return response.json(validacao.errors)
    }else
    {
        connection.query('UPDATE contatos SET nome = ?, data_nascimento = ?, telefone = ?, email = ? WHERE id = ?;',[nome,data,telefone,email, codigo], function (err, result) {
            if (err) {
                return response.json({erro: err.message})
            }
            if(result.affectedRows == 0){
                return response.json({erro: 'Falha ao tentar Atualizar'});
            }else return response.json({nome, data, telefone, email});
        });
    }
}

function destroy(request, response) {
    const codigo = request.params.codigo;
    connection.query('DELETE FROM contatos WHERE id = ?;',[codigo], function (err, result) {
        if (err) {
            return response.json({erro: err.message})
        }
        return response.json({information: 'Excluido com sucesso!'})
    })
}
module.exports = {list, searchList, create, update, destroy};