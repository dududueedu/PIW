const controller = require("../controlles/usuarios")
const controllerAuthUsers = require("../controlles/authUsers")

module.exports = function(app){
    //post login
    app.post("/api/usuarios/signin", controllerAuthUsers.logar)
    // POST usuario
    app.post("/api/usuarios", controller.inserirUsuario)

    
    app.use("/api/usuarios", controllerAuthUsers.checar)
    // GET usuarios
    app.get("/api/usuarios", controller.listarUsuarios)
    // GET usuario por ID
    app.get("/api/usuarios/:id", controller.listarUsuariosPorId)
    // DELETE usuario por ID
    app.delete("/api/usuarios/:id", controller.excluirUsuario)
    // GET posts de um usuario por ID
    app.get("/api/usuarios/:id/posts", controller.buscarPostsUsuarioPorID)
}