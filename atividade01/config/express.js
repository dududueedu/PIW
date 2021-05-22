// Importando módulo express (Padrão CommonJS)
const express = require('express')
const routerUsuarios = require('../app/routes/usuarios')
//const bodyParser = require("body-parser")

module.exports = function () {
    let app = express()

    app.set("port", 8393)
    //app.use(bodyParser.json()); x
    //app.use(bodyParser.urlencoded({ extended: false })); x
    
    app.use(express.static('./public'))

    routerUsuarios(app)
    return app
}