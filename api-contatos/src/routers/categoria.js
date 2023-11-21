const express = require("express");
const router = express.Router();

const categoriaController = require("../controllers/categoria.controller");
//Listar todas as categorias
router.get('/categorias', categoriaController.list);

//Inserir uma categoria
router.post('/categoria', categoriaController.create);

//Excluir uma categoria 
router.delete('/categoria/:codigo', categoriaController.destroy);

module.exports = router;