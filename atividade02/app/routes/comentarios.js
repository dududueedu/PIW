const controller = require("../controlles/comentarios")

module.exports = function(app){
    // GET comentarios
    app.get("/api/comentarios", controller.listarComentarios)

    // GET comentarios por ID
    app.get("/api/comentarios/:id", controller.listarComentariosPorId)

    // POST comentarios
    app.post("/api/comentarios", controller.inserirComentarios)

    // DELETE comentarios por ID
    app.delete("/api/comentarios/:id", controller.excluirComentarios)
}