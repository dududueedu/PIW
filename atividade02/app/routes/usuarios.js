const controller = require("../controlles/usuarios")

module.exports = function(app){
    // GET/usuario?nome=Eduardo
    app.get("/api/usuarios", controller.listarUsuarios)

    // GET usuario por ID
    app.get("/api/usuarios/:id", controller.listarUsuariosPorId)

    // POST usuario
    app.post("/api/usuarios", controller.inserirUsuario)

    // DELETE usuario por ID
    app.delete("/api/usuarios/:id", controller.excluirUsuario)
}