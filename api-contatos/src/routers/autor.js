const express = require('express');
const router = express.Router();

router.get('/autor', function(req,res){
    const info = {
        autor: "Leyukezer Cruz",
        email: "leyukezer.c@ifro.edu.br",
        telefone: "(69) 99354-2265"
    };
    res.json(info);
    return res.send("Autor: Leyukezer Cruz de Lima");
});

module.exports = router;