const validacoes = require('validatorjs');
//funcao lista
function list(request, response) {
    connection.query('SELECT * FROM categorias', function (err, result) {
        if(err){
            return response.json({erro: 'Ocorreram erros ao buscar os dados'});
        }
        return response.json(result);
    });
}

//funcao criar categoria
function create(request, response) {
    const {nome, descricao} = request.body;

    let regras = {
        nome: 'required|min:4'
    };

    let validacao = new validacoes(request.body, regras);

    if (validacao.fails()) {
        return response.json(validacao.errors);
    }else
    {
        connection.query('INSERT INTO categorias VALUES (NULL,?,?);',[nome,descricao], function (err, result) {
            if (err) {
                return response.json({erro: err.message})
            }
            if(result.affectedRows == 0){
                return response.json({erro: 'Falha ao tentar Cadastrar'});
            }else return response.json({id: result.insertId, nome, descricao});
        });
    }
}

function destroy(request, response) {
    const codigo = request.params.codigo;
    connection.query('DELETE FROM categorias WHERE id = ?;',[codigo], function (err, result) {
        if (err) {
            return response.json({erro: err.message})
        }
        return response.json({information: 'Excluido com sucesso!'})
    })
}

module.exports = {list, create, destroy};