const validacoes = require('validatorjs');
//funcao lista
function list(req, res) {
    connection.query('SELECT * FROM categorias', function (err, result) {
        if(err){
            return res.json({erro: 'Ocorreram erros ao buscar os dados'});
        }
        return res.json(result);
    });
}

//funcao criar categoria
function create(req, res) {
    const {nome, descricao} = req.body;

    let regras = {
        nome: 'required|min:4'
    };

    let validacao = new validacoes(req.body, regras);

    if (validacao.fails()) {
        return res.json(validacao.errors);
    }else
    {
        connection.query('INSERT INTO categorias VALUES (NULL,?,?);',[nome,descricao], function (err, result) {
            if (err) {
                return res.json({erro: err.message})
            }
            if(result.affectedRows == 0){
                return res.json({erro: 'Falha ao tentar Cadastrar'});
            }else return res.json({id: result.insertId, nome, descricao});
        });
    }
}

function destroy(req, res) {
    const codigo = req.params.codigo;
    connection.query('DELETE FROM categorias WHERE id = ?;',[codigo], function (err, result) {
        if (err) {
            return res.json({erro: err.message})
        }
        return res.json({information: 'Excluido com sucesso!'})
    })
}

module.exports = {list, create, destroy};