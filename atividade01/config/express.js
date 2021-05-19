// Importando módulo express (Padrão CommonJS)
const express = require('express');
//const routerAlunos = require('../app/routes/alunos');
//const bodyParser = require("body-parser")

// Exportando módulo (Padrão CommonJS)
module.exports = function () {
    let app = express();

    // Definindo variável de aplicação
    app.set("port", 8393);
    //app.use(bodyParser.json()); x
    //app.use(bodyParser.urlencoded({ extended: false })); x
    
    app.use(express.static('./public'));

    app.get("/alunos", function(req, res){
        console.log("Está funcionando GET /alunos")
        res.json([
            {nome: "Eduardo", sobrenome: "Silva"},
            {nome: "Nicolau", sobrenome: "Caetanno"}
        ])
    })

    //routerAlunos(app); x
    return app;
}