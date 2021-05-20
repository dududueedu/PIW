const controller = require("../controlles/usuarios")

module.exports = function(app){
    app.get("/usuarios", controller.listarUsuarios)

    app.get("/usuarios/:id", controller.listarUsuariosPorId)
}